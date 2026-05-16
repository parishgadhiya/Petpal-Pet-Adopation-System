import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { collection, deleteDoc, onSnapshot, doc, query, where } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import Footer from "../component/footer";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";


function ViewPets() {
  const [pets, setPets] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    const q = query(collection(db, "pets"), where("status", "==", "approved"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPets(results);
    });

    return unsubscribe;
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, "pets", id));
        Swal.fire("Deleted!", "Pet has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting pet:", error);
        Swal.fire("Error", "Could not delete pet.", "error");
      }
    }
  };

  const filteredPets = pets.filter(pet => {
    if (!searchQuery) return true;
    return (
      pet.name?.toLowerCase().includes(searchQuery) ||
      pet.type?.toLowerCase().includes(searchQuery) ||
      pet.color?.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <Sidebare />
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between mb-4">
                    <h4 className="mb-0" style={{ fontWeight: "800", color: "#001d3d" }}>View All Pets</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                {pets.length === 0 ? (
                  <div className="col-12 text-center p-5">
                    <div className="card shadow-sm border-0">
                      <div className="card-body">
                        <i className="fa-solid fa-paw text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                        <h5 className="text-muted">No approved pets found.</h5>
                      </div>
                    </div>
                  </div>
                ) : filteredPets.length === 0 ? (
                  <div className="col-12 text-center p-5">
                    <div className="card shadow-sm border-0">
                      <div className="card-body">
                        <i className="fa-solid fa-magnifying-glass text-warning mb-3" style={{ fontSize: '3rem' }}></i>
                        <h5 className="text-muted">No results found for "{searchQuery}"</h5>
                      </div>
                    </div>
                  </div>
                ) : (
                  filteredPets.map((pet) => (
                    <div className="col-xl-3 col-lg-4 col-md-6" key={pet.id}>
                      <div className="card shadow-sm mb-4 border-0" style={{ borderRadius: "15px", overflow: "hidden" }}>
                        <img
                          src={pet.url || "/placeholder-pet.png"}
                          alt={pet.name}
                          style={{ height: "220px", objectFit: "cover" }}
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="card-title mb-0" style={{ fontWeight: "700", color: "#001d3d" }}>{pet.name}</h5>
                            <span className="badge bg-soft-info text-info">{pet.type}</span>
                          </div>
                          <p className="text-muted small mb-3">
                            <i className="fa-solid fa-location-dot me-1"></i> {pet.addr}
                          </p>
                          <div className="row g-2 mb-3">
                            <div className="col-6">
                              <div className="p-2 bg-light rounded text-center">
                                <small className="text-muted d-block">Age</small>
                                <span className="fw-bold">{pet.age}</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="p-2 bg-light rounded text-center">
                                <small className="text-muted d-block">Color</small>
                                <span className="fw-bold">{pet.color}</span>
                              </div>
                            </div>
                          </div>
                          <div className="d-grid">
                            <button
                              onClick={() => handleDelete(pet.id)}
                              className="btn btn-soft-danger waves-effect waves-light"
                            >
                              <i className="fa-solid fa-trash me-1"></i> Delete Pet
                            </button>
                          </div>
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

export default ViewPets;
