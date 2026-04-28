import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { ChatService } from "../utils/ChatService";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Pagetitle from "../components/pagetitle";

const ADMIN_ID = "admin";

function Chat() {
  const [searchParams] = useSearchParams();
  const petId = searchParams.get("petId");
  const petName = searchParams.get("petName");
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [chatMetadata, setChatMetadata] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(true);

  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribeAuth();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      // Listen for messages
      const unsubscribeMessages = ChatService.listenMessages(user.uid, (msgs) => {
        setMessages(msgs);
        scrollToBottom();
        // Mark as seen when new messages arrive and user is looking at chat
        ChatService.markAsSeen(user.uid, "user");
      });

      // Listen for metadata
      const unsubscribeMetadata = ChatService.listenChatMetadata(user.uid, (metadata) => {
        setChatMetadata(metadata);
      });

      return () => {
        unsubscribeMessages();
        unsubscribeMetadata();
      };
    }
  }, [user]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || !user) return;

    const text = inputText;
    setInputText("");
    
    // Stop typing status
    setIsTyping(false);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    ChatService.setTypingStatus(user.uid, "user", false);

    const petContext = petId ? { petId, petName } : null;
    await ChatService.sendMessage(user.uid, user.uid, text, petContext);
    scrollToBottom();
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);

    // Handle typing indicator
    if (!isTyping && user) {
      setIsTyping(true);
      ChatService.setTypingStatus(user.uid, "user", true);
    }

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      if (user) ChatService.setTypingStatus(user.uid, "user", false);
    }, 3000);
  };

  if (loading) return <div className="text-center p-5"><h4>Loading Chat...</h4></div>;

  return (
    <>
      <Nav />
      <main className="fix">
        <Pagetitle title="Customer Support" />
        
        <section className="contact-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="chat-container card shadow-lg border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                  {/* Chat Header */}
                  <div className="card-header text-white d-flex align-items-center justify-content-between p-3" style={{ backgroundColor: '#8a4b8f' }}>
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3" style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                        <i className="fas fa-headset fa-lg"></i>
                      </div>
                      <div>
                        <h5 className="mb-0 text-white">PetPal Support</h5>
                        <small className="text-white-50">Online</small>
                      </div>
                    </div>
                  </div>

                  {/* Message Area */}
                  <div className="card-body p-4" style={{ height: '500px', overflowY: 'auto', backgroundColor: '#f8f9fa' }}>
                    {messages.length === 0 ? (
                      <div className="text-center mt-5 opacity-50">
                        <i className="far fa-comments fa-4x mb-3 text-secondary"></i>
                        <p>No messages yet. Start a conversation with us!</p>
                      </div>
                    ) : (
                      messages.map((msg, index) => {
                        const isMe = msg.senderId === user.uid;
                        return (
                          <div key={msg.id || index} className={`d-flex mb-4 ${isMe ? 'justify-content-end' : 'justify-content-start'}`}>
                            <div className="message-wrapper" style={{ maxWidth: '75%' }}>
                              {msg.petName && (
                                <div className="pet-context-badge mb-1" style={{ fontSize: '10px', color: '#8a4b8f', fontWeight: 'bold' }}>
                                   <i className="fas fa-paw me-1"></i> Query about: {msg.petName}
                                </div>
                              )}
                              <div className={`p-3 rounded-4 ${isMe ? 'bg-primary text-white' : 'bg-white shadow-sm border'}`} 
                                   style={{ 
                                     borderRadius: isMe ? '20px 20px 0 20px' : '20px 20px 20px 0',
                                     backgroundColor: isMe ? '#8a4b8f' : '#fff',
                                     color: isMe ? '#white' : '#333'
                                   }}>
                                {msg.text}
                              </div>
                              <div className={`mt-1 d-flex ${isMe ? 'justify-content-end' : 'justify-content-start'}`} style={{ fontSize: '10px', color: '#999' }}>
                                {msg.timestamp ? new Date(msg.timestamp.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Sending...'}
                                {isMe && (
                                  <span className="ms-2">
                                    {msg.seen ? <i className="fas fa-check-double text-info"></i> : <i className="fas fa-check"></i>}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                    {chatMetadata?.adminTyping && (
                      <div className="typing-indicator d-flex align-items-center mb-3">
                         <div className="dot-typing me-2"></div>
                         <small className="text-muted">Admin is typing...</small>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="card-footer bg-white border-0 p-3">
                    {petName && (
                       <div className="alert alert-info py-2 px-3 mb-3 d-flex align-items-center justify-content-between" style={{ fontSize: '13px', borderRadius: '10px', backgroundColor: 'rgba(138, 75, 143, 0.1)', border: '1px solid rgba(138, 75, 143, 0.2)', color: '#8a4b8f' }}>
                          <span><i className="fas fa-info-circle me-2"></i>You are asking about <strong>{petName}</strong></span>
                          <button onClick={() => navigate('/chat')} className="btn-close" style={{ fontSize: '10px' }}></button>
                       </div>
                    )}
                    <form onSubmit={handleSendMessage} className="d-flex gap-2">
                      <input
                        type="text"
                        className="form-control rounded-pill border-0 bg-light p-3 px-4"
                        placeholder="Type your message..."
                        value={inputText}
                        onChange={handleInputChange}
                        style={{ boxShadow: 'none' }}
                      />
                      <button 
                        type="submit" 
                        className="btn rounded-circle d-flex align-items-center justify-content-center" 
                        style={{ width: '50px', height: '50px', backgroundColor: '#8a4b8f', color: 'white', border: 'none' }}>
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        .dot-typing {
          position: relative;
          left: -9999px;
          width: 6px;
          height: 6px;
          border-radius: 5px;
          background-color: #8a4b8f;
          color: #8a4b8f;
          box-shadow: 9984px 0 0 0 #8a4b8f, 9999px 0 0 0 #8a4b8f, 10014px 0 0 0 #8a4b8f;
          animation: dot-typing 1.5s infinite linear;
          margin-left: 15px;
        }
        @keyframes dot-typing {
          0% { box-shadow: 9984px 0 0 0 #8a4b8f, 9999px 0 0 0 #8a4b8f, 10014px 0 0 0 #8a4b8f; }
          16.667% { box-shadow: 9984px -6px 0 0 #8a4b8f, 9999px 0 0 0 #8a4b8f, 10014px 0 0 0 #8a4b8f; }
          33.333% { box-shadow: 9984px 0 0 0 #8a4b8f, 9999px 0 0 0 #8a4b8f, 10014px 0 0 0 #8a4b8f; }
          50% { box-shadow: 9984px 0 0 0 #8a4b8f, 9999px -6px 0 0 #8a4b8f, 10014px 0 0 0 #8a4b8f; }
          66.667% { box-shadow: 9984px 0 0 0 #8a4b8f, 9999px 0 0 0 #8a4b8f, 10014px 0 0 0 #8a4b8f; }
          83.333% { box-shadow: 9984px 0 0 0 #8a4b8f, 9999px 0 0 0 #8a4b8f, 10014px -6px 0 0 #8a4b8f; }
          100% { box-shadow: 9984px 0 0 0 #8a4b8f, 9999px 0 0 0 #8a4b8f, 10014px 0 0 0 #8a4b8f; }
        }
      `}</style>
    </>
  );
}

export default Chat;
