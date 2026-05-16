//components/Adoption
import { db } from "../Firebaseconfig"
import { updateDoc, doc, collection, addDoc, serverTimestamp } from "firebase/firestore"
function Adoption({ pet }) {
    console.log(pet)

    async function approveAdoption() {
        let docRef = doc(db, "petinterest", pet.id)
        await updateDoc(docRef, {
            "status": "Approved"
        })

        // Create notification for user
        await addDoc(collection(db, "notifications"), {
            userId: pet.userId,
            message: `Your adoption request for ${pet.petName} has been Approved!`,
            type: "request",
            referenceId: pet.id,
            isRead: false,
            createdAt: serverTimestamp()
        })

        // Update the pet status in the pets collection to 'adopted'
        if (pet.petId) {
            let petDocRef = doc(db, "pets", pet.petId)
            await updateDoc(petDocRef, {
                "status": "adopted"
            })
        }

        swal.fire({
            title: "Adoption Approved..",
            text: "This pet has been moved to adopted status and will no longer show in the gallery.",
            icon: "success"
        })
    }

    async function rejectAdoption() {
        let docRef = doc(db, "petinterest", pet.id)
        // let docRef = collection(db, "pets", pet.id)
        await updateDoc(docRef, {
            "status": "Rejected"
        })

        // Create notification for user
        await addDoc(collection(db, "notifications"), {
            userId: pet.userId,
            message: `Your adoption request for ${pet.petName} has been Rejected.`,
            type: "request",
            referenceId: pet.id,
            isRead: false,
            createdAt: serverTimestamp()
        })
        Swal.fire({
            title: "Adoption Rejected..",
            icon: "warning"
        })
    }

    async function markAsCompleted() {
        let docRef = doc(db, "petinterest", pet.id)
        await updateDoc(docRef, {
            "status": "Completed"
        })
        Swal.fire({
            title: "Task Completed!",
            text: "Adoption process has been marked as completed.",
            icon: "success"
        })
    }

    async function handleApproveReschedule() {
        try {
            const docRef = doc(db, "petinterest", pet.id);
            await updateDoc(docRef, {
                pickupDate: pet.requestedDate,
                pickupTime: pet.requestedTime,
                status: "Scheduled",
                userReason: "" 
            });
            Swal.fire({
                title: "Reschedule Approved!",
                text: "The new pickup date has been finalized.",
                icon: "success"
            });
        } catch (error) {
            console.error("Error approving reschedule:", error);
            Swal.fire({
                title: "Error",
                text: "Failed to approve reschedule.",
                icon: "error"
            });
        }
    }
    return (
        <div className="card shadow-sm border-0 h-100 transition-up" style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <div className="card-body p-0">
                <div className="position-relative">
                    <img 
                        src={pet.petImage} 
                        alt={pet.petName} 
                        className="img-fluid w-100" 
                        style={{ height: '220px', objectFit: 'cover' }} 
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                        <span className={`badge ${pet.status === "Scheduled" ? "bg-info" : pet.status === "RescheduleRequested" ? "bg-danger" : "bg-warning"} text-dark px-3 py-2 shadow-sm`} style={{ borderRadius: '20px', fontWeight: 'bold' }}>
                            {pet.status === "RescheduleRequested" ? "Reschedule Req" : pet.status || "Pending"}
                        </span>
                    </div>
                </div>
                
                <div className="p-4">
                    <div className="d-flex align-items-center mb-1">
                        <div className="bg-soft-primary p-2 rounded-circle me-3">
                            <i className="fa-solid fa-paw text-primary"></i>
                        </div>
                        <h5 className="mb-0 text-dark" style={{ letterSpacing: '0.5px' }}>{pet.petName}</h5>
                    </div>
                    <p className="text-muted mb-3 small" style={{ marginLeft: "50px" }}>Requested by: <strong>{pet.name}</strong></p>
                    
                    <div className="mb-3">
                        <div className="d-flex align-items-center text-muted mb-2">
                            <i className="fa-solid fa-location-dot me-2 font-size-14"></i>
                            <span className="font-size-14 text-truncate">{pet.addr || "No address provided"}</span>
                        </div>
                        <div className="d-flex align-items-center text-muted">
                            <i className="fa-solid fa-envelope me-2 font-size-14"></i>
                            <span className="font-size-14 text-truncate">{pet.email}</span>
                        </div>
                    </div>

                    {pet.status === "Scheduled" && (
                        <div className="mt-3 p-3 bg-light rounded shadow-sm border">
                            <h6 className="font-size-14 mb-2 text-primary"><i className="fa-solid fa-calendar-check me-2"></i>Pickup Details</h6>
                            <div className="text-dark small mb-1"><strong>Date:</strong> {pet.pickupDate}</div>
                            <div className="text-dark small mb-1"><strong>Time:</strong> {pet.pickupTime}</div>
                            {pet.pickupAddress && <div className="text-dark small"><strong>Address:</strong> {pet.pickupAddress}</div>}
                        </div>
                    )}

                    {pet.status === "RescheduleRequested" && (
                        <div className="mt-3 p-3 bg-soft-danger rounded shadow-sm border">
                            <h6 className="font-size-14 mb-2 text-danger"><i className="fa-solid fa-clock-rotate-left me-2"></i>New Request</h6>
                            <div className="text-dark small mb-1"><strong>Requested:</strong> {pet.requestedDate} {pet.requestedTime}</div>
                            <div className="text-dark italic small"><strong>Reason:</strong> "{pet.userReason}"</div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="card-footer bg-white border-top-0 p-3">
                {pet.status === "Scheduled" ? (
                    <button 
                        onClick={markAsCompleted} 
                        type="button" 
                        className="btn btn-primary w-100 py-2 waves-effect waves-light shadow-sm"
                        style={{ borderRadius: '10px' }}
                    >
                        <i className="fa-solid fa-circle-check me-1"></i> Mark as Completed
                    </button>
                ) : pet.status === "RescheduleRequested" ? (
                    <button 
                        onClick={handleApproveReschedule} 
                        type="button" 
                        className="btn btn-danger w-100 py-2 waves-effect waves-light shadow-sm"
                        style={{ borderRadius: '10px' }}
                    >
                        <i className="fa-solid fa-check-double me-1"></i> Approve Reschedule
                    </button>
                ) : (
                    <div className="row g-2">
                        <div className="col-6">
                            <button 
                                onClick={approveAdoption} 
                                type="button" 
                                className="btn btn-success w-100 py-2 waves-effect waves-light shadow-sm"
                                style={{ borderRadius: '10px' }}
                            >
                                <i className="fa-solid fa-check me-1"></i> Approve
                            </button>
                        </div>
                        <div className="col-6">
                            <button 
                                onClick={rejectAdoption} 
                                type="button" 
                                className="btn btn-outline-danger w-100 py-2 waves-effect waves-light"
                                style={{ borderRadius: '10px' }}
                            >
                                <i className="fa-solid fa-xmark me-1"></i> Reject
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Adoption