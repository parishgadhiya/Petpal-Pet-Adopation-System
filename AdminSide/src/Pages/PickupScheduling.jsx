import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { db } from "../Firebaseconfig";
import { collection, query, where, onSnapshot, doc, updateDoc, addDoc, serverTimestamp } from "firebase/firestore";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import Footer from "../component/footer";

function PickupScheduling() {
    const [petInterests, setPetInterests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";

    useEffect(() => {
        getPets();
    }, []);

    const getPets = () => {
        const q = query(
            collection(db, "petinterest"),
            where("status", "in", ["Approved", "Scheduled", "RescheduleRequested"])
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const results = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPetInterests(results);
            setLoading(false);
        });

        return () => unsubscribe();
    };

    const filteredInterests = petInterests.filter(interest => {
        if (!searchQuery) return true;
        return (
            interest.petName?.toLowerCase().includes(searchQuery) ||
            interest.name?.toLowerCase().includes(searchQuery) ||
            interest.email?.toLowerCase().includes(searchQuery) ||
            interest.phone?.includes(searchQuery)
        );
    });

    const handleUpdatePickup = async (id, pickupData) => {
        try {
            const docRef = doc(db, "petinterest", id);
            await updateDoc(docRef, {
                pickupDate: pickupData.date || "",
                pickupTime: pickupData.time || "",
                pickupAddress: pickupData.address || "",
                adminMessage: pickupData.message || "",
                status: "Scheduled"
            });

            // Create notification for user
            // We need to find the specific pet interest data to get the userId and petName
            const petInterest = petInterests.find(p => p.id === id);
            if (petInterest) {
                await addDoc(collection(db, "notifications"), {
                    userId: petInterest.userId,
                    message: `A pickup has been scheduled for ${petInterest.petName} on ${pickupData.date} at ${pickupData.time}.`,
                    type: "pickup",
                    referenceId: id,
                    isRead: false,
                    createdAt: serverTimestamp()
                });
            }
            if (window.Swal) {
                window.Swal.fire({
                    title: "Updated",
                    text: "Pickup details have been updated.",
                    icon: "success"
                });
            } else if (window.swal) {
                window.swal.fire({
                    title: "Updated",
                    text: "Pickup details have been updated.",
                    icon: "success"
                });
            }
        } catch (error) {
            console.error("Error updating pickup details:", error);
        }
    };

    const handleApproveReschedule = async (id, requestedDate, requestedTime) => {
        try {
            const docRef = doc(db, "petinterest", id);
            await updateDoc(docRef, {
                pickupDate: requestedDate,
                pickupTime: requestedTime,
                status: "Scheduled",
                userReason: "" // Clear reason after approval
            });

            // Create notification for user
            const petInterest = petInterests.find(p => p.id === id);
            if (petInterest) {
                await addDoc(collection(db, "notifications"), {
                    userId: petInterest.userId,
                    message: `Your reschedule request for ${petInterest.petName} has been Approved.`,
                    type: "pickup",
                    referenceId: id,
                    isRead: false,
                    createdAt: serverTimestamp()
                });
            }
            if (window.Swal) {
                window.Swal.fire({
                    title: "Reschedule Approved!",
                    text: "The new pickup date has been finalized.",
                    icon: "success"
                });
            }
        } catch (error) {
            console.error("Error approving reschedule:", error);
        }
    };

    return (
        <div id="layout-wrapper">
            <Header />
            <Sidebare />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Pickup Scheduling</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <style dangerouslySetInnerHTML={{ __html: `
                                            .custom-bold-table {
                                                border: 2px solid #dee2e6 !important;
                                            }
                                            .custom-bold-table th, .custom-bold-table td {
                                                border: 1px solid #dee2e6 !important;
                                                vertical-align: middle;
                                            }
                                            .custom-bold-table thead th {
                                                border-bottom: 2px solid #dee2e6 !important;
                                                background-color: #f8f9fa;
                                            }
                                        `}} />
                                        <div className="table-responsive">
                                            <table className="table table-centered table-nowrap table-bordered custom-bold-table mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th>Pet Name</th>
                                                        <th>Adopter Name</th>
                                                        <th>Contact Info</th>
                                                        <th>Pickup Details</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loading ? (
                                                        <tr>
                                                            <td colSpan="5" className="text-center">Loading...</td>
                                                        </tr>
                                                    ) : filteredInterests.length === 0 ? (
                                                        <tr>
                                                            <td colSpan="5" className="text-center py-5">
                                                                <div className="text-muted mb-2">
                                                                    {searchQuery ? (
                                                                        <>
                                                                            <i className="fa-solid fa-magnifying-glass mb-3 d-block" style={{ fontSize: '2rem' }}></i>
                                                                            <h5>No results found for "{searchQuery}"</h5>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <i className="fa-solid fa-folder-open mb-3 d-block" style={{ fontSize: '2rem' }}></i>
                                                                            <h5>No pending pickups found.</h5>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ) : (
                                                        filteredInterests.map((interest) => (
                                                            <PickupRow 
                                                                key={interest.id} 
                                                                request={interest} 
                                                                onUpdate={handleUpdatePickup} 
                                                                onApproveReschedule={handleApproveReschedule}
                                                            />
                                                        ))
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

function PickupRow({ request, onUpdate, onApproveReschedule }) {
    const [pickupData, setPickupData] = useState({
        date: request.pickupDate || "",
        time: request.pickupTime || "",
        address: request.pickupAddress || "",
        message: request.adminMessage || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPickupData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <tr>
            <td>
                <strong>{request.petName}</strong><br/>
                <small className="text-muted">{request.petCategory}</small>
            </td>
            <td>{request.name}</td>
            <td>
                <i className="fa-solid fa-phone me-1"></i> {request.phone}<br/>
                <i className="fa-solid fa-envelope me-1"></i> {request.email}
            </td>
            <td>
                <div className="row g-2">
                    <div className="col-md-6">
                        <input 
                            type="date" 
                            name="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={pickupData.date}
                            onChange={handleChange}
                            className="form-control form-control-sm" 
                            placeholder="Date"
                        />
                    </div>
                    <div className="col-md-6">
                        <input 
                            type="time" 
                            name="time"
                            value={pickupData.time}
                            onChange={handleChange}
                            className="form-control form-control-sm" 
                            placeholder="Time"
                        />
                    </div>
                    <div className="col-12">
                        <input 
                            type="text" 
                            name="address"
                            value={pickupData.address}
                            onChange={handleChange}
                            className="form-control form-control-sm mb-2" 
                            placeholder="Pickup Address"
                        />
                    </div>
                    <div className="col-12">
                        <textarea 
                            name="message"
                            value={pickupData.message}
                            onChange={handleChange}
                            className="form-control form-control-sm" 
                            placeholder="Message to User (e.g. Please bring an ID)"
                            rows="2"
                        ></textarea>
                    </div>
                </div>
                {request.status === "RescheduleRequested" && (
                    <div className="mt-2 p-2 bg-light border rounded text-dark shadow-sm">
                        <div className="small text-danger mb-1"><strong><i className="fa-solid fa-circle-exclamation me-1"></i> User requested reschedule:</strong></div>
                        <div className="small mb-1"><strong>New Date:</strong> {request.requestedDate}</div>
                        <div className="small mb-1"><strong>New Time:</strong> {request.requestedTime}</div>
                        <div className="small italic" style={{ fontSize: "11px" }}><strong>Reason:</strong> {request.userReason}</div>
                        <button 
                            className="btn btn-soft-success btn-sm w-100 mt-2" 
                            style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", border: "1px solid #c8e6c9" }}
                            onClick={() => onApproveReschedule(request.id, request.requestedDate, request.requestedTime)}
                        >
                            Approve Reschedule
                        </button>
                    </div>
                )}
            </td>
            <td>
                <button 
                    className={`btn ${request.status === 'RescheduleRequested' ? 'btn-warning' : 'btn-primary'} btn-sm w-100 mb-1`}
                    onClick={() => onUpdate(request.id, pickupData)}
                >
                    <i className="fa-solid fa-paper-plane me-1"></i> {request.status === 'Scheduled' ? 'Update Proposal' : 'Send Proposal'}
                </button>
                {request.status === "Scheduled" && (
                    <div className="text-center">
                        <span className="badge bg-soft-success text-success">Active Proposal</span>
                    </div>
                )}
            </td>
        </tr>
    );
}

export default PickupScheduling;
