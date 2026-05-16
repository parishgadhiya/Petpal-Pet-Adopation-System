import React from 'react'
import Nav from '../components/navbar'
import Pet from '../components/Pet'
import Footer from "../components/footer"
import Pagetitle from "../components/pagetitle";
import Subscribe from "../components/subscribe";
import { useEffect, useRef, useState } from 'react';
import { db } from '../firebaseconfig';
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';
function Pets() {
    
    let [pets, setPets] = useState([])
    let [filteredPets, setFilteredPets] = useState([])
    let [categories, setCategories] = useState("")
    let [category, setCategory] = useState("All")
    let [search, setSearch] = useState("")
    let [selectedLocations, setSelectedLocations] = useState([])

    useEffect(function () {
        getPets()
        getCategories()
    }, [category])

    useEffect(() => {
        if (pets.length > 0) {
            filterPetsData()
        }
    }, [pets, search, selectedLocations])

    async function getPets() {
        let q = query(collection(db, "pets"), where("status", "==", "approved"));
        if (category != "All") {
            q = query(collection(db, "pets"), where("status", "==", "approved"), where("type", "==", category));
        }
        onSnapshot(q, function (snapshot) {
            let result = []
            snapshot.docs.forEach(function (doc) {
                result.push({ id: doc.id, ...doc.data() })
            })
            setPets(result)
        })
    }

    function getCategories() {
        let colRef = collection(db, "Categories")
        onSnapshot(colRef, function (snapshot) {
            let result = []
            snapshot.docs.forEach(function (doc) {
                result.push(doc.data())
            })
            setCategories(result)
        })
    }

    function filterPetsData() {
        let result = pets.filter((pet) => {
            const matchesSearch = pet.name.toLowerCase().includes(search.toLowerCase()) || 
                                 (pet.addr && pet.addr.toLowerCase().includes(search.toLowerCase()));
            const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(pet.addr);
            return matchesSearch && matchesLocation;
        })
        setFilteredPets(result)
    }

    const uniqueLocations = [...new Set(pets.map(pet => pet.addr).filter(addr => addr))];

    const handleLocationChange = (loc) => {
        if (selectedLocations.includes(loc)) {
            setSelectedLocations(selectedLocations.filter(l => l !== loc));
        } else {
            setSelectedLocations([...selectedLocations, loc]);
        }
    }

    return (
        <>
            {/* header-area */}
            <Nav />
            {/* header-area-end */}
            {/* main-area */}
            <main>
                {/* breadcrumb-area */}
                <section className="breadcrumb__area fix">
                    <Pagetitle title="Pets" />
                    <div className="breadcrumb__shape-wrap">
                        <img src="petpal/assets/img/images/breadcrumb_shape01.png" alt="img" data-aos="fade-down-right" data-aos-delay={400} />
                        <img src="petpal/assets/img/images/breadcrumb_shape02.png" alt="img" data-aos="fade-up-left" data-aos-delay={400} />
                    </div>
                </section>
                {/* breadcrumb-area-end */}
                {/* animal-area */}
                <section className="animal__area-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
                                <div className="row">
                                    {filteredPets.length > 0 ? (
                                        filteredPets.map((pet) => <Pet key={pet.id} pet={pet} />)
                                    ) : (
                                        <div className="col-12 text-center py-5">
                                            <h4>No pets found matching your filters.</h4>
                                        </div>
                                    )}
                                </div>
                                {filteredPets.length > 0 && (
                                    <nav className="pagination__wrap mt-50">
                                        <ul className="list-wrap">
                                            <li className="link-arrow"><a href="#"><img src="petpal/assets/img/icon/pagination_icon01.svg" alt className="injectable" /></a></li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li className="link-arrow"><a href="#"><img src="petpal/assets/img/icon/pagination_icon02.svg" alt className="injectable" /></a></li>
                                        </ul>
                                    </nav>
                                )}
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <aside className="animal__sidebar">
                                    <div className="animal__widget shadow-sm p-4 mb-4 bg-white rounded">
                                        <h4 className="animal__widget-title mb-3">Search Pets</h4>
                                        <div className="sidebar-search-form">
                                            <form action="#" onSubmit={(e) => e.preventDefault()}>
                                                <input 
                                                    type="text" 
                                                    placeholder="Search by name or city..." 
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                    className="form-control"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="animal__widget shadow-sm p-4 mb-4 bg-white rounded">
                                        <h4 className="animal__widget-title mb-3">Pet Categories</h4>
                                        <div className="courses-cat-list">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="form-check mb-2">
                                                        <input 
                                                            onChange={(e) => setCategory(e.target.value)} 
                                                            checked={category === "All"}
                                                            value="All" 
                                                            type="radio" 
                                                            name="category" 
                                                            id="cat_all" 
                                                            className="form-check-input"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="cat_all">All Pets</label>
                                                    </div>
                                                </li>
                                                {categories && categories.map(function (cat, index) {
                                                    return (
                                                        <li key={index}>
                                                            <div className="form-check mb-2">
                                                                <input 
                                                                    onChange={(e) => setCategory(e.target.value)} 
                                                                    checked={category === cat.name}
                                                                    value={cat.name} 
                                                                    type="radio" 
                                                                    name="category" 
                                                                    id={`cat_${index}`} 
                                                                    className="form-check-input"
                                                                />
                                                                <label className="form-check-label ms-2" htmlFor={`cat_${index}`}>{cat.name}</label>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="animal__widget shadow-sm p-4 mb-4 bg-white rounded">
                                        <h4 className="animal__widget-title mb-3">Location</h4>
                                        <div className="courses-cat-list">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="form-check mb-2">
                                                        <input 
                                                            className="form-check-input" 
                                                            type="checkbox" 
                                                            id="loc_all" 
                                                            checked={selectedLocations.length === 0}
                                                            onChange={() => setSelectedLocations([])}
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="loc_all">All Locations</label>
                                                    </div>
                                                </li>
                                                {uniqueLocations.map((loc, index) => (
                                                    <li key={index}>
                                                        <div className="form-check mb-2">
                                                            <input 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                id={`loc_${index}`} 
                                                                checked={selectedLocations.includes(loc)}
                                                                onChange={() => handleLocationChange(loc)}
                                                            />
                                                            <label className="form-check-label ms-2" htmlFor={`loc_${index}`}>{loc}</label>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <button 
                                                className="btn btn-primary w-100" 
                                                onClick={() => filterPetsData()}
                                                style={{ backgroundColor: '#8a4b8f', borderColor: '#8a4b8f' }}
                                            >
                                                APPLY FILTERS
                                            </button>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Subscribe />
            <Footer />
        </>
    )
}

export default Pets