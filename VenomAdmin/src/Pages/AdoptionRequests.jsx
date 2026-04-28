//pages/AdoptionRequest
import Header from "../component/Header"
import Sidebar from "../component/Sidebare"
import Footer from "../component/footer"
import Adoption from '../component/AdoptionRequest'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { db } from "../Firebaseconfig";
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import AdoptionRequest from "../component/AdoptionRequest"

function AdoptionRequests() {
    let [pets, setPets] = useState([])
    useEffect(function () {
        getPets()
    }, [])

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";

    async function getPets() {
        let ColRef = query(collection(db, "petinterest"), where("status", "in", ["pending", "Scheduled", "RescheduleRequested"]))
        onSnapshot(ColRef, function (Snapshot) {
            let result = []
            Snapshot.docs.forEach(function (doc) {
                result.push({ ...doc.data(), id: doc.id })
            })
            setPets(result)
        })
    }

    const filteredPets = pets.filter(pet => {
        if (!searchQuery) return true;
        return (
            pet.petName?.toLowerCase().includes(searchQuery) ||
            pet.name?.toLowerCase().includes(searchQuery) ||
            pet.email?.toLowerCase().includes(searchQuery) ||
            pet.phone?.includes(searchQuery) ||
            pet.status?.toLowerCase().includes(searchQuery)
        );
    });
    return (
        <>
            <div id="layout-wrapper">
                <Header />
                <Sidebar />
                
                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box d-flex align-items-center justify-content-between">
                                        <h4 className="mb-0">Adoption Management</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {pets.length === 0 ? (
                                    <div className="col-12 text-center p-5">
                                        <div className="card shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fa-solid fa-folder-open text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                                                <h5 className="text-muted">No pending requests found.</h5>
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
                                        <div className="col-md-6 col-xl-4 mb-4" key={pet.id}>
                                            <AdoptionRequest pet={pet} />
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
    )
}

export default AdoptionRequests