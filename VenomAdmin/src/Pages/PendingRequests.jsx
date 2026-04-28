import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Sidebare from "../component/Sidebare";
import Header from "../component/Header";
import Footer from "../component/footer";
import { db } from "../Firebaseconfig";
import { collection, onSnapshot, query, where, doc, updateDoc } from "firebase/firestore";

function PendingRequests() {
  const [pendingPets, setPendingPets] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    const q = query(collection(db, "pets"), where("status", "==", "pending"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPendingPets(results);
    });

    return () => unsubscribe();
  }, []);

  const filteredPets = pendingPets.filter(pet => {
    if (!searchQuery) return true;
    return (
      pet.name?.toLowerCase().includes(searchQuery) ||
      pet.type?.toLowerCase().includes(searchQuery) ||
      pet.color?.toLowerCase().includes(searchQuery) ||
      pet.email?.toLowerCase().includes(searchQuery) ||
      pet.phone?.includes(searchQuery) ||
      pet.addr?.toLowerCase().includes(searchQuery)
    );
  });

  const handleApprove = async (id) => {
    try {
      const petRef = doc(db, "pets", id);
      await updateDoc(petRef, {
        status: "approved",
      });
      Swal.fire({
        title: "Pet Approved!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error approving pet:", error);
      Swal.fire({
        title: "Error",
        text: "Could not approve pet.",
        icon: "error",
      });
    }
  };

  const handleReject = async (id) => {
    try {
      const petRef = doc(db, "pets", id);
      await updateDoc(petRef, {
        status: "rejected",
      });
      Swal.fire({
        title: "Pet Rejected!",
        icon: "warning",
      });
    } catch (error) {
      console.error("Error rejecting pet:", error);
      Swal.fire({
        title: "Error",
        text: "Could not reject pet.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div id="layout-wrapper">
        <div className="vertical-menu">
          <div data-simplebar className="sidebar-menu-scroll">
            <Header />
            <Sidebare />
          </div>
        </div>

        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Pending Pet Approvals</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a href="#">Admin</a></li>
                        <li className="breadcrumb-item active">Pending Pets</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {pendingPets.length === 0 ? (
                  <div className="col-12 text-center p-5">
                    <div className="card shadow-sm border-0">
                      <div className="card-body">
                        <i className="fa-solid fa-folder-open text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                        <h5 className="text-muted">No pending pet approvals found.</h5>
                      </div>
                    </div>
                  </div>
                ) : filteredPets.length === 0 ? (
                  <div className="col-12 text-center p-5">
                    <div className="card shadow-sm border-0">
                      <div className="card-body">
                        <i className="fa-solid fa-magnifying-glass text-warning mb-3" style={{ fontSize: '3rem' }}></i>
                        <h5 className="text-muted">No results found for "{searchQuery}"</h5>
                        <p className="text-muted small">Try checking your spelling or using a different search term.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  filteredPets.map((pet) => (
                    <div className="col-md-6 col-xl-3" key={pet.id}>
                      <div className="card">
                        <img
                          className="card-img-top img-fluid"
                          src={pet.url || "minible/assets/images/small/img-2.jpg"}
                          alt={pet.name}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h4 className="card-title">{pet.name}</h4>
                          <p className="card-text">{pet.type}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"><strong>Type:</strong> {pet.type}</li>
                          <li className="list-group-item"><strong>Color:</strong> {pet.color}</li>
                          <li className="list-group-item"><strong>Address:</strong> {pet.addr}</li>
                          <li className="list-group-item"><strong>Age:</strong> {pet.age}</li>
                          <li className="list-group-item"><strong>Owner:</strong> {pet.email}</li>
                          <li className="list-group-item"><strong>Phone:</strong> {pet.phone}</li>
                          <li className="list-group-item"><strong>Justification:</strong> {pet.justification}</li>
                          <li className="list-group-item">
                            <strong>Status:</strong> <span className="badge bg-warning">Pending</span>
                          </li>
                        </ul>
                        <div className="card-body">
                          <button
                            onClick={() => handleApprove(pet.id)}
                            className="btn btn-success waves-effect waves-light p-2 me-2"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(pet.id)}
                            className="btn btn-danger waves-effect waves-light p-2"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default PendingRequests;
