import React, { useState, useEffect, useRef } from "react";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import Footer from "../component/footer";
import { ChatService } from "../utils/ChatService";

function ViewChats() {
  const [chats, setChats] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Listen for all chats
  useEffect(() => {
    const unsubscribe = ChatService.listenAllChats((chatList) => {
      setChats(chatList);
    });
    return () => unsubscribe();
  }, []);

  // Listen for messages when a user is selected
  useEffect(() => {
    if (selectedUserId) {
      const unsubscribeMessages = ChatService.listenMessages(selectedUserId, (msgs) => {
        setMessages(msgs);
        scrollToBottom();
        // Mark as read for admin
        ChatService.markAsRead(selectedUserId);
      });

      const unsubscribeChat = ChatService.listenChat(selectedUserId, (chat) => {
        setSelectedUser(chat);
      });

      return () => {
        unsubscribeMessages();
        unsubscribeChat();
      };
    }
  }, [selectedUserId]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || !selectedUserId) return;

    const text = inputText;
    setInputText("");
    
    // Stop typing
    setIsTyping(false);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    ChatService.setTypingStatus(selectedUserId, false);

    await ChatService.sendMessage(selectedUserId, text);
    scrollToBottom();
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);

    if (!isTyping && selectedUserId) {
      setIsTyping(true);
      ChatService.setTypingStatus(selectedUserId, true);
    }

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      if (selectedUserId) ChatService.setTypingStatus(selectedUserId, false);
    }, 3000);
  };

  return (
    <div id="layout-wrapper">
      <Header />
      <Sidebare />

      <div className="main-content" style={{ transition: "all 0.3s ease" }}>
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between mb-4">
                        <h4 className="mb-0" style={{ fontWeight: "800", color: "#001d3d" }}>Customer Support Chats</h4>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm border-0" style={{ height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'row', overflow: 'hidden', borderRadius: '15px' }}>
              
              {/* Left Sidebar: Chat List */}
              <div className="chat-list-panel border-end" style={{ width: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
                <div className="p-3 border-bottom bg-light">
                  <div className="position-relative">
                    <input type="text" className="form-control form-control-sm ps-4" placeholder="Search conversations..." style={{ borderRadius: '20px' }} />
                    <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" style={{ fontSize: '12px' }}></i>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-auto">
                  {chats.length === 0 ? (
                    <div className="text-center p-5 opacity-50">
                      <p>No conversations found</p>
                    </div>
                  ) : (
                    chats.map(chat => (
                      <div 
                        key={chat.id} 
                        onClick={() => setSelectedUserId(chat.id)}
                        className={`p-3 border-bottom cursor-pointer d-flex align-items-center transition-all ${selectedUserId === chat.id ? 'bg-soft-primary' : 'hover-bg-light'}`}
                        style={{ cursor: 'pointer', backgroundColor: selectedUserId === chat.id ? 'rgba(59, 130, 246, 0.05)' : 'transparent' }}
                      >
                        <div className="avatar me-3 position-relative" style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                          {chat.userName ? chat.userName.charAt(0).toUpperCase() : 'U'}
                          {chat.unreadCountAdmin > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                              {chat.unreadCountAdmin}
                            </span>
                          )}
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 text-truncate" style={{ fontWeight: chat.unreadCountAdmin > 0 ? '700' : '600' }}>{chat.userName || 'Anonymous'}</h6>
                            <small className="text-muted" style={{ fontSize: '10px' }}>
                              {chat.lastMessageTime ? new Date(chat.lastMessageTime.seconds * 1000).toLocaleDateString() === new Date().toLocaleDateString() 
                                ? new Date(chat.lastMessageTime.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                : new Date(chat.lastMessageTime.seconds * 1000).toLocaleDateString()
                              : ''}
                            </small>
                          </div>
                          <p className="mb-0 text-truncate text-muted" style={{ fontSize: '12px' }}>
                             {chat.userTyping ? <em className="text-primary italic">Typing...</em> : chat.lastMessage}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Right Panel: Active Chat */}
              <div className="chat-window-panel d-flex flex-column flex-grow-1 bg-white">
                {selectedUserId ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-white">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3" style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f3f4f6', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                           {selectedUser?.userName?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div>
                          <h6 className="mb-0" style={{ fontWeight: '700' }}>{selectedUser?.userName || 'Chatting with User'}</h6>
                          <small className="text-success" style={{ fontSize: '11px' }}>
                             <i className="fas fa-circle me-1" style={{ fontSize: '8px' }}></i> Active Now
                          </small>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-light btn-sm rounded-circle me-2"><i className="fas fa-phone-alt"></i></button>
                        <button className="btn btn-light btn-sm rounded-circle"><i className="fas fa-info-circle"></i></button>
                      </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-grow-1 p-4 overflow-auto bg-light" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}>
                      {messages.map((msg, index) => {
                        const isMe = msg.senderId !== selectedUserId;
                        return (
                          <div key={msg.id || index} className={`d-flex mb-3 ${isMe ? 'justify-content-end' : 'justify-content-start'}`}>
                            <div style={{ maxWidth: '70%' }}>
                              {msg.petName && (
                                <div className="mb-1 text-primary fw-bold" style={{ fontSize: '10px' }}>
                                   <i className="fas fa-paw me-1"></i> Topic: {msg.petName}
                                </div>
                              )}
                              <div className={`p-3 ${isMe ? 'bg-primary text-white shadow-primary' : 'bg-white shadow-sm'}`} 
                                   style={{ 
                                     borderRadius: isMe ? '15px 15px 0 15px' : '15px 15px 15px 0',
                                     fontSize: '14px',
                                     boxShadow: isMe ? '0 4px 15px rgba(59, 130, 246, 0.2)' : '0 2px 5px rgba(0,0,0,0.05)'
                                   }}>
                                {msg.text}
                              </div>
                              <div className={`mt-1 d-flex ${isMe ? 'justify-content-end' : 'justify-content-start'}`} style={{ fontSize: '10px', color: '#999' }}>
                                {msg.timestamp ? new Date(msg.timestamp.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '...'}
                                {isMe && (
                                  <span className="ms-2">
                                    {msg.seen ? <i className="fas fa-check-double text-info"></i> : <i className="fas fa-check"></i>}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {selectedUser?.userTyping && (
                         <div className="d-flex align-items-center mb-3">
                            <div className="dot-typing-admin me-2"></div>
                            <small className="text-muted">User is typing...</small>
                         </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-top bg-white">
                      <form onSubmit={handleSendMessage} className="d-flex gap-2">
                        <button type="button" className="btn btn-light rounded-circle"><i className="fas fa-paperclip"></i></button>
                        <input 
                          type="text" 
                          className="form-control rounded-pill border-0 bg-light px-4" 
                          placeholder="Type your reply..." 
                          value={inputText}
                          onChange={handleInputChange}
                          style={{ boxShadow: 'none' }}
                        />
                        <button type="submit" className="btn btn-primary rounded-pill px-4" style={{ fontWeight: '600' }}>
                           Send <i className="fas fa-paper-plane ms-2"></i>
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <div className="h-100 d-flex flex-column align-items-center justify-content-center opacity-50 bg-light">
                    <div className="mb-4" style={{ height: '150px', width: '150px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                       <i className="fas fa-comments fa-5x text-primary"></i>
                    </div>
                    <h4>Support Portal</h4>
                    <p>Select a user from the left to start chatting</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <style>{`
        .bg-soft-primary { background-color: rgba(59, 130, 246, 0.08); }
        .cursor-pointer { cursor: pointer; }
        .hover-bg-light:hover { background-color: #f8f9fa; }
        .shadow-primary { box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2); }
        
        .dot-typing-admin {
          position: relative;
          left: -9999px;
          width: 6px;
          height: 6px;
          border-radius: 5px;
          background-color: #3b82f6;
          color: #3b82f6;
          box-shadow: 9984px 0 0 0 #3b82f6, 9999px 0 0 0 #3b82f6, 10014px 0 0 0 #3b82f6;
          animation: dot-typing-admin 1.5s infinite linear;
          margin-left: 15px;
        }
        @keyframes dot-typing-admin {
          0% { box-shadow: 9984px 0 0 0 #3b82f6, 9999px 0 0 0 #3b82f6, 10014px 0 0 0 #3b82f6; }
          16.667% { box-shadow: 9984px -6px 0 0 #3b82f6, 9999px 0 0 0 #3b82f6, 10014px 0 0 0 #3b82f6; }
          33.333% { box-shadow: 9984px 0 0 0 #3b82f6, 9999px 0 0 0 #3b82f6, 10014px 0 0 0 #3b82f6; }
          50% { box-shadow: 9984px 0 0 0 #3b82f6, 9999px -6px 0 0 #3b82f6, 10014px 0 0 0 #3b82f6; }
          66.667% { box-shadow: 9984px 0 0 0 #3b82f6, 9999px 0 0 0 #3b82f6, 10014px 0 0 0 #3b82f6; }
          83.333% { box-shadow: 9984px 0 0 0 #3b82f6, 9999px 0 0 0 #3b82f6, 10014px -6px 0 0 #3b82f6; }
          100% { box-shadow: 9984px 0 0 0 #3b82f6, 9999px 0 0 0 #3b82f6, 10014px 0 0 0 #3b82f6; }
        }
      `}</style>
    </div>
  );
}

export default ViewChats;
