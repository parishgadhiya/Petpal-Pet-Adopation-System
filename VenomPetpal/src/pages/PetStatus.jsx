import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Pagetitle from "../components/pagetitle";
import { db, auth } from "../firebaseconfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { generateCertificate } from "../utils/pdf";

function PetStatus() {
    const [interestRequests, setInterestRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [schedulingData, setSchedulingData] = useState({ date: "", time: "", reason: "" });
    const [showRescheduleForm, setShowRescheduleForm] = useState(null);
    const [isScheduling, setIsScheduling] = useState(false);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Fetch user's interest requests
                const interestQuery = query(
                    collection(db, "petinterest"),
                    where("userId", "==", user.uid)
                );
                const unsubscribeInterest = onSnapshot(interestQuery, (snapshot) => {
                    const interests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setInterestRequests(interests);
                    setLoading(false);
                });

                return () => {
                    unsubscribeInterest();
                };
            } else {
                setLoading(false);
            }
        });

        return () => unsubscribeAuth();
    }, []);

    const getStatusClass = (status) => {
        switch (status?.toLowerCase()) {
            case "approved": return "badge bg-success";
            case "scheduled": return "badge bg-info";
            case "completed": return "badge bg-primary";
            case "rejected": return "badge bg-danger";
            default: return "badge bg-warning text-dark";
        }
    };

    const handleSchedulePickup = async (id) => {
        if (!schedulingData.date || !schedulingData.time) {
            Swal.fire({
                title: "Error",
                text: "Please select both date and time.",
                icon: "error"
            });
            return;
        }

        setIsScheduling(true);
        try {
            const { doc, updateDoc } = await import("firebase/firestore");
            const docRef = doc(db, "petinterest", id);
            await updateDoc(docRef, {
                pickupDate: schedulingData.date,
                pickupTime: schedulingData.time,
                status: "Scheduled"
            });
            
            Swal.fire({
                title: "Scheduled!",
                text: "Pickup has been scheduled successfully.",
                icon: "success"
            });
            setSchedulingData({ date: "", time: "" });
        } catch (error) {
            console.error("Error scheduling pickup:", error);
            Swal.fire({
                title: "Error",
                text: "Failed to schedule pickup.",
                icon: "error"
            });
        } finally {
            setIsScheduling(false);
        }
    };

    const handleRequestReschedule = async (id) => {
        if (!schedulingData.date || !schedulingData.time || !schedulingData.reason) {
            Swal.fire({
                title: "Error",
                text: "Please provide a new date, time, and reason.",
                icon: "error"
            });
            return;
        }

        setIsScheduling(true);
        try {
            const { doc, updateDoc } = await import("firebase/firestore");
            const docRef = doc(db, "petinterest", id);
            await updateDoc(docRef, {
                requestedDate: schedulingData.date,
                requestedTime: schedulingData.time,
                userReason: schedulingData.reason,
                status: "RescheduleRequested"
            });
            
            Swal.fire({
                title: "Request Sent",
                text: "Your reschedule request has been sent to the admin.",
                icon: "success"
            });
            setShowRescheduleForm(null);
            setSchedulingData({ date: "", time: "", reason: "" });
        } catch (error) {
            console.error("Error requesting reschedule:", error);
            Swal.fire({
                title: "Error",
                text: "Failed to send request.",
                icon: "error"
            });
        } finally {
            setIsScheduling(false);
        }
    };

    return (
        <>
            <Nav />
            <main className="fix">
                <Pagetitle title="My Requests Status" />
                <section className="status-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section__title mb-40 text-center">
                                    <h2 className="title">Adoption Interest Requests</h2>
                                    <p>Track the status of pets you want to adopt.</p>
                                </div>
                                <div className="row g-4">
                                    {interestRequests.length > 0 ? (
                                        interestRequests.map((interest) => (
                                            <div key={interest.id} className="col-lg-12">
                                                <div className="card shadow-sm border-0 adoption-card mb-4 overflow-hidden" style={{ borderRadius: '15px' }}>
                                                    <div className="row g-0">
                                                        <div className="col-md-7 p-4 border-end bg-white">
                                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                                <div>
                                                                    <h3 className="h4 mb-1 text-primary">{interest.petName}</h3>
                                                                    <span className="text-muted small"><i className="fa-solid fa-tag me-1"></i>{interest.petCategory}</span>
                                                                </div>
                                                                <span className={`${getStatusClass(interest.status)} px-3 py-2`} style={{ borderRadius: '20px', fontWeight: 'bold', fontSize: '11px' }}>
                                                                    {interest.status === 'RescheduleRequested' ? 'Reschedule Requested' : interest.status || "Pending"}
                                                                </span>
                                                            </div>
                                                            
                                                            <div className="row mt-4">
                                                                <div className="col-sm-6 mb-3">
                                                                    <h6 className="text-secondary small text-uppercase fw-bold mb-2">Requester Info</h6>
                                                                    <div className="small mb-1"><i className="fa-solid fa-user me-2 text-primary"></i>{interest.name}</div>
                                                                    <div className="small mb-1 text-muted"><i className="fa-solid fa-envelope me-2 text-primary"></i>{interest.email}</div>
                                                                    <div className="small text-muted"><i className="fa-solid fa-phone me-2 text-primary"></i>{interest.phone}</div>
                                                                </div>
                                                                <div className="col-sm-6 mb-3">
                                                                    <h6 className="text-secondary small text-uppercase fw-bold mb-2">Experience & Terms</h6>
                                                                    <div className="small mb-1"><strong>Exp:</strong> {interest.experience}</div>
                                                                    <div className="small"><strong>Terms:</strong> {interest.conditions}</div>
                                                                </div>
                                                            </div>

                                                            <div className="mt-2 text-muted x-small">
                                                                <i className="fa-solid fa-clock-rotate-left me-1"></i> 
                                                                Requested on: {interest.createdAt?.toDate ? interest.createdAt.toDate().toLocaleDateString() : 'N/A'}
                                                            </div>
                                                        </div>

                                                        <div className="col-md-5 p-4 bg-light d-flex flex-column justify-content-center">
                                                            {interest.status?.toLowerCase() === "approved" && (
                                                                <div className="text-center p-3 border rounded bg-white shadow-sm" style={{ borderStyle: "dashed !important", borderColor: "#f86011 !important" }}>
                                                                    <div className="display-6 text-warning mb-2"><i className="fa-solid fa-hourglass-half"></i></div>
                                                                    <h6 className="mb-2">Awaiting Schedule</h6>
                                                                    <p className="small text-muted mb-0">The admin will propose a pickup time shortly. Please keep an eye on this page.</p>
                                                                </div>
                                                            )}

                                                            {interest.status?.toLowerCase() === "scheduled" && (
                                                                <div className="p-3 border rounded bg-white shadow-sm border-primary">
                                                                    <div className="d-flex align-items-center mb-3">
                                                                        <div className="bg-soft-success p-2 rounded-circle me-3">
                                                                            <i className="fa-solid fa-calendar-check text-success"></i>
                                                                        </div>
                                                                        <h6 className="mb-0 fw-bold">Pickup Proposal</h6>
                                                                    </div>
                                                                    
                                                                    <div className="pickup-details p-3 rounded mb-3" style={{ backgroundColor: "#f0f7ff", border: "1px solid #cde3ff" }}>
                                                                        <div className="mb-2 text-dark d-flex align-items-center"><i className="fa-solid fa-calendar-day me-3 text-primary"></i> <strong>{interest.pickupDate}</strong></div>
                                                                        <div className="mb-2 text-dark d-flex align-items-center"><i className="fa-solid fa-clock me-3 text-primary"></i> <strong>{interest.pickupTime}</strong></div>
                                                                        {interest.pickupAddress && (
                                                                            <div className="mb-2 text-dark d-flex align-items-start"><i className="fa-solid fa-location-dot me-3 mt-1 text-primary"></i> <span className="small">{interest.pickupAddress}</span></div>
                                                                        )}
                                                                        {interest.adminMessage && (
                                                                            <div className="mt-3 p-2 rounded bg-white small italic border" style={{ borderColor: "#cde3ff" }}>
                                                                                <i className="fa-solid fa-quote-left text-primary me-2 opacity-50"></i>
                                                                                {interest.adminMessage}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    
                                                                    {showRescheduleForm === interest.id ? (
                                                                        <div className="reschedule-form animate__animated animate__fadeIn">
                                                                            <div className="row g-2 mb-2">
                                                                                <div className="col-6">
                                                                                    <input 
                                                                                        type="date" 
                                                                                        className="form-control form-control-sm"
                                                                                        min={new Date().toISOString().split("T")[0]}
                                                                                        value={schedulingData.date}
                                                                                        onChange={(e) => setSchedulingData({ ...schedulingData, date: e.target.value })}
                                                                                    />
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <input 
                                                                                        type="time" 
                                                                                        className="form-control form-control-sm"
                                                                                        value={schedulingData.time}
                                                                                        onChange={(e) => setSchedulingData({ ...schedulingData, time: e.target.value })}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <textarea 
                                                                                className="form-control form-control-sm mb-3"
                                                                                placeholder="Short reason for reschedule..."
                                                                                rows="2"
                                                                                value={schedulingData.reason}
                                                                                onChange={(e) => setSchedulingData({ ...schedulingData, reason: e.target.value })}
                                                                            ></textarea>
                                                                            <div className="d-flex gap-2">
                                                                                <button 
                                                                                    className="btn btn-primary btn-sm flex-grow-1"
                                                                                    onClick={() => handleRequestReschedule(interest.id)}
                                                                                    disabled={isScheduling}
                                                                                >
                                                                                    {isScheduling ? "Sending..." : "Send Request"}
                                                                                </button>
                                                                                <button className="btn btn-light btn-sm" onClick={() => setShowRescheduleForm(null)}>Cancel</button>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <div className="d-grid gap-2">
                                                                            <Link to="/MyAdoptedPets" className="btn btn-primary btn-sm">
                                                                                <i className="fa-solid fa-circle-check me-2"></i>Confirm & View in Adoption History
                                                                            </Link>
                                                                            <button 
                                                                                className="btn btn-outline-secondary btn-sm"
                                                                                onClick={() => {
                                                                                    setShowRescheduleForm(interest.id);
                                                                                    setSchedulingData({ date: interest.pickupDate || "", time: interest.pickupTime || "", reason: "" });
                                                                                }}
                                                                                style={{ fontSize: '11px' }}
                                                                            >
                                                                                <i className="fa-solid fa-clock-rotate-left me-2"></i>Request Different Time
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}

                                                            {interest.status?.toLowerCase() === "reschedulerequested" && (
                                                                <div className="p-3 border rounded bg-soft-warning shadow-sm" style={{ borderStyle: "dashed !important" }}>
                                                                    <div className="text-center mb-3">
                                                                        <div className="bg-white p-2 rounded-circle d-inline-block mb-2 shadow-sm">
                                                                            <i className="fa-solid fa-hourglass-start text-warning fa-lg"></i>
                                                                        </div>
                                                                        <h6 className="mb-1 fw-bold">Reschedule Requested</h6>
                                                                        <p className="x-small text-muted mb-0">Waiting for admin to review your request.</p>
                                                                    </div>
                                                                    <div className="p-3 bg-white rounded border-0 small shadow-sm">
                                                                        <div className="mb-1 text-dark"><strong><i className="fa-solid fa-calendar-plus me-2 text-warning"></i>Requested:</strong> {interest.requestedDate} @ {interest.requestedTime}</div>
                                                                        <div className="mt-2 p-2 bg-light rounded italic" style={{ fontSize: '11px' }}>
                                                                            <i className="fa-solid fa-comment-dots text-warning me-2"></i>"{interest.userReason}"
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {interest.status?.toLowerCase() === "completed" && (
                                                                <div className="text-center p-4 bg-white rounded shadow-sm">
                                                                    <div className="display-5 text-success mb-2"><i className="fa-solid fa-circle-check"></i></div>
                                                                    <h5 className="mb-1 fw-bold">Adoption Complete!</h5>
                                                                    <p className="small text-muted mb-3">You've successfully adopted {interest.petName}.</p>
                                                                    <Link to="/MyAdoptedPets" className="btn btn-soft-success btn-sm w-100 mb-2">
                                                                        <i className="fa-solid fa-receipt me-2"></i>View Adoption Record
                                                                    </Link>
                                                                    <button 
                                                                        className="btn btn-success btn-sm w-100"
                                                                        onClick={() => generateCertificate(
                                                                            interest.name,
                                                                            interest.petName,
                                                                            interest.createdAt?.toDate ? interest.createdAt.toDate().toLocaleDateString() : 'N/A'
                                                                        )}
                                                                    >
                                                                        <i className="fa-solid fa-download me-1"></i> Download Certificate
                                                                    </button>
                                                                </div>
                                                            )}

                                                            {interest.status?.toLowerCase() === "rejected" && (
                                                                <div className="text-center p-3 opacity-75">
                                                                    <div className="display-6 text-danger mb-2"><i className="fa-solid fa-circle-xmark"></i></div>
                                                                    <h6 className="mb-1">Request Denied</h6>
                                                                    <p className="small text-muted">Sorry, this adoption request was not approved.</p>
                                                                </div>
                                                            )}
                                                            
                                                            {interest.status?.toLowerCase() === "pending" && (
                                                                <div className="text-center p-3">
                                                                     <div className="spinner-grow text-warning spinner-grow-sm mb-3" role="status"></div>
                                                                     <h6 className="mb-1 text-warning">Pending Review</h6>
                                                                     <p className="x-small text-muted mb-0">Our team is currently reviewing your application.</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-12 text-center py-5">
                                            <div className="mb-3 display-4 text-muted opacity-25"><i className="fa-solid fa-folder-open"></i></div>
                                            <p className="lead text-muted">No interest requests found.</p>
                                            <Link to="/petlist" className="btn btn-primary">Find Your New Best Friend</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <style dangerouslySetInnerHTML={{ __html: `
                .adoption-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid rgba(0,0,0,0.05) !important;
                }
                .adoption-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
                }
                .bg-soft-success { background-color: #e8f5e9 !important; color: #2e7d32 !important; }
                .bg-soft-warning { background-color: #fff3e0 !important; color: #ef6c00 !important; }
                .bg-soft-primary { background-color: #e3f2fd !important; color: #1565c0 !important; }
                .bg-soft-danger { background-color: #ffebee !important; color: #c62828 !important; }
                .x-small { font-size: 11px; }
                .italic { font-style: italic; }
                .btn-soft-success {
                    background-color: #e8f5e9;
                    color: #2e7d32;
                    border: none;
                }
                .btn-soft-success:hover {
                    background-color: #2e7d32;
                    color: white;
                }
                .text-primary { color: #f86011 !important; }
                .btn-primary { background-color: #f86011 !important; border-color: #f86011 !important; }
                .btn-primary:hover { background-color: #d1500d !important; border-color: #d1500d !important; }
                .badge.bg-success { background-color: #2e7d32 !important; }
                .badge.bg-info { background-color: #0288d1 !important; }
                .badge.bg-primary { background-color: #6a1b9a !important; }
                .badge.bg-warning { background-color: #fbc02d !important; color: #000 !important; }
            `}} />
        </>
    );
}

export default PetStatus;
