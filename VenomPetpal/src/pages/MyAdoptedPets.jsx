import React, { useEffect, useState } from "react";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Pagetitle from "../components/pagetitle";
import { db, auth } from "../firebaseconfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { generateCertificate } from "../utils/pdf";

function MyAdoptedPets() {
    const [adoptedPets, setAdoptedPets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Fetch user's interest requests and filter for 'approved' status in JS for case-insensitivity
                const adoptedQuery = query(
                    collection(db, "petinterest"),
                    where("userId", "==", user.uid)
                );

                const unsubscribeAdopted = onSnapshot(adoptedQuery, (snapshot) => {
                    const allInterests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    // Case-insensitive filtering
                    const approvedPets = allInterests.filter(pet => 
                        ["approved", "scheduled", "completed", "reschedulerequested"].includes(pet.status?.toLowerCase())
                    );
                    setAdoptedPets(approvedPets);
                    setLoading(false);
                });

                return () => unsubscribeAdopted();
            } else {
                setLoading(false);
            }
        });

        return () => unsubscribeAuth();
    }, []);

    return (
        <>
            <Nav />
            <main className="fix">
                <Pagetitle title="My Adopted Pets" />
                <section className="adopted-pets-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section__title mb-60 text-center">
                                    <h2 className="title">Successfully Adopted 🐾</h2>
                                    <p>Meet the furry friends you've brought home!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered custom-table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Pet Image</th>
                                                <th>Pet Details</th>
                                                <th>Your Details</th>
                                                <th>Contact Info</th>
                                                <th>Conditions & Experience</th>
                                                <th>Pickup Details</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan="6" className="text-center">
                                                        <div className="spinner-border text-primary" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ) : adoptedPets.length > 0 ? (
                                                adoptedPets.map((pet) => (
                                                    <tr key={pet.id}>
                                                        <td style={{ width: "120px" }}>
                                                            <div className="adopted-pet-img-small">
                                                                <img src={pet.petImage || "/petpal/assets/img/images/adoption_img01.png"} alt={pet.petName} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <strong>{pet.petName}</strong><br/>
                                                            <small className="text-muted">{pet.petCategory}</small><br/>
                                                            <small className="text-success">Adopted on: {pet.createdAt?.toDate ? pet.createdAt.toDate().toLocaleDateString() : 'N/A'}</small>
                                                        </td>
                                                        <td>
                                                            {pet.name}<br/>
                                                            <small className="text-muted">{pet.email}</small>
                                                        </td>
                                                        <td>
                                                             {pet.phone}<br/>
                                                             <small className="text-muted">{pet.addr}</small>
                                                        </td>
                                                        <td>
                                                            <strong>Experience:</strong> {pet.experience}<br/>
                                                            <strong>Conditions:</strong> {pet.conditions}
                                                        </td>
                                                        <td>
                                                            {["scheduled", "completed", "reschedulerequested"].includes(pet.status?.toLowerCase()) ? (
                                                                <div className="pickup-info p-2 rounded" style={{ backgroundColor: "#fff4ee", border: "1px dashed #f86011" }}>
                                                                    <div className="mb-1"><strong><i className="fa-solid fa-calendar-day me-1"></i> {pet.status?.toLowerCase() === 'reschedulerequested' ? pet.requestedDate : pet.pickupDate}</strong></div>
                                                                    <div className="mb-1"><strong><i className="fa-solid fa-clock me-1"></i> {pet.status?.toLowerCase() === 'reschedulerequested' ? pet.requestedTime : pet.pickupTime}</strong></div>
                                                                    {pet.pickupAddress && <div className="mb-1 small"><strong><i className="fa-solid fa-location-dot me-1"></i> {pet.pickupAddress}</strong></div>}
                                                                    {pet.status?.toLowerCase() === "reschedulerequested" && (
                                                                        <div className="mt-1 text-warning small"><strong><i className="fa-solid fa-rotate me-1"></i> Change Requested</strong></div>
                                                                    )}
                                                                    {pet.status?.toLowerCase() === "completed" && (
                                                                        <div className="mt-1 text-success small"><strong><i className="fa-solid fa-check-double me-1"></i> Pickup Completed</strong></div>
                                                                    )}
                                                                </div>
                                                            ) : (
                                                                <div className="text-center">
                                                                    <span className="text-muted italic" style={{ fontSize: "12px" }}>Not scheduled yet</span>
                                                                    <br/>
                                                                    <Link to="/PetStatus" className="btn btn-sm mt-1" style={{ fontSize: "10px", padding: "2px 8px" }}>Schedule Now</Link>
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="d-flex flex-column gap-2">
                                                                <Link to={`/petdetails/${pet.petId}`} className="btn btn-sm" style={{ padding: "5px 15px", fontSize: "12px" }}>Details</Link>
                                                                <span className={`badge ${
                                                                    pet.status?.toLowerCase() === 'completed' ? 'bg-success' : 
                                                                    pet.status?.toLowerCase() === 'scheduled' ? 'bg-info' : 
                                                                    pet.status?.toLowerCase() === 'reschedulerequested' ? 'bg-warning text-dark' : 'bg-secondary'
                                                                }`} style={{ fontSize: "10px text-transform: capitalize" }}>
                                                                    {pet.status === 'RescheduleRequested' ? 'Reschedule Requested' : pet.status}
                                                                </span>
                                                                {pet.status?.toLowerCase() === 'completed' && (
                                                                    <button 
                                                                        className="btn btn-success btn-sm mt-1" 
                                                                        style={{ padding: "5px 15px", fontSize: "12px" }}
                                                                        onClick={() => generateCertificate(
                                                                            pet.name, 
                                                                            pet.petName, 
                                                                            pet.createdAt?.toDate ? pet.createdAt.toDate().toLocaleDateString() : 'N/A'
                                                                        )}
                                                                    >
                                                                        <i className="fa-solid fa-download me-1"></i> Certificate
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" className="text-center">
                                                        <div className="no-pets-found p-4">
                                                            <h3>No adopted pets yet.</h3>
                                                            <p>Browse our pets and find your perfect companion!</p>
                                                            <Link to="/Pets" className="btn mt-20">Find a Pet</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <style dangerouslySetInnerHTML={{ __html: `
                .custom-table {
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                }
                .custom-table thead {
                    background-color: #f86011;
                    color: white;
                }
                .custom-table th {
                    border: none;
                    text-transform: uppercase;
                    font-size: 14px;
                }
                .custom-table td {
                    vertical-align: middle;
                    padding: 15px;
                }
                .adopted-pet-img-small {
                    width: 100px;
                    height: 100px;
                    border-radius: 10px;
                    overflow: hidden;
                }
                .adopted-pet-img-small img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .no-pets-found {
                    text-align: center;
                }
            `}} />
        </>
    );
}

export default MyAdoptedPets;
