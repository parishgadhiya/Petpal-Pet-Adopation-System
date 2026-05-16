import React from "react";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import useAuthCheck from "../hooks/useAuthCheck";
//import { useEffect } from "react-router";
//import { async } from "@firebase/util";
import { getDoc, doc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseconfig";

function PetInterest() {
  const { checkAuth, user } = useAuthCheck();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [Phone, setPhone] = useState("");
  let [Conditions, setConditions] = useState("");
  let [PetCategary, setPetCategary] = useState("");
  let [Experience, setExperience] = useState("");
  let [addr, setAddr] = useState("");

  let [pet,setpet] = useState()
  let {id} = useParams()

  useEffect(function (){
    getPet()
  },[])

  async function getPet(){
    let docRef = doc(db,"pets",id)
    let docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    setpet(docSnap.data())
  }

  async function btnSubmit() {
    if (!checkAuth("submit an interest request")) return;
    try {
      await addDoc(collection(db, "petinterest"), {
        userId: user.uid,
        name: name,
        email: email,
        phone: Phone,
        conditions: Conditions,
        petCategory: PetCategary,
        experience: Experience,
        petId: id,
        petName: pet.name,
        petImage: pet.url,
        addr: addr,
        status:"pending",
        createdAt: new Date()
      });
  
      // Create notification for admin
      await addDoc(collection(db, "notifications"), {
        userId: "admin",
        message: `${name} has shown interest in adopting ${pet.name}.`,
        type: "request",
        referenceId: id,
        isRead: false,
        createdAt: serverTimestamp()
      });

      alert("Request Submitted Successfully!");
  
      // clear form
      setName("");
      setEmail("");
      setPhone("");
      setConditions("");
      setPetCategary("");
      setExperience("");
      setAddr("");
  
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
  return (
    <>
      <Nav />
      <main className="fix">
        {/* breadcrumb-area */}
        <section className="breadcrumb__area fix">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="breadcrumb__content">
                  <h3 className="title">Pet Interset</h3>
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Home</a>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="flaticon-right-arrow-angle" />
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      Pet Interset
                    </span>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="breadcrumb__img">
                  <img
                    src="/petpal/assets/img/images/breadcrumb_img.png"
                    alt="img"
                    data-aos="fade-left"
                    data-aos-delay={800}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="breadcrumb__shape-wrap">
            <img
              src="/petpal/assets/img/images/breadcrumb_shape01.png"
              alt="img"
              data-aos="fade-down-right"
              data-aos-delay={400}
            />
            <img
              src="/petpal/assets/img/images/breadcrumb_shape02.png"
              alt="img"
              data-aos="fade-up-left"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* team-details-area */}
        <section className="team__details-area">
          <div className="container">
            <div className="row justify-content-center">
              
              <div className="col-lg-7">
                <div className="team__details-content"> 
                  <div className="contact__form-wrap team__details-form">
                    <form
                      action="https://themedox.com/demo/petpal/assets/mail.php"
                      method="POST"
                      id="contact-form"
                      className="contact__form"
                    >
                      <h2 className="title">Pet Adoptiopn Details</h2>
                      {/* <span>
                        Your email address will not be published. Required
                        fields are marked *
                      </span> */}
                      <div className="row gutter-20">
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input name="name" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input
                              name="email"
                              value={email} onChange={(e)=>setEmail(e.target.value)}
                              type="email"
                              placeholder="E-mail"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <input name="Phone" value={Phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              name="Conditions"
                              value={Conditions} onChange={(e)=>setConditions(e.target.value)}
                              type="text"
                              placeholder="Conditions"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <input name="Pet Categary" value={PetCategary} onChange={(e)=>setPetCategary(e.target.value)} type="text" placeholder="Pet Categary" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <input name="Address" value={addr} onChange={(e)=>setAddr(e.target.value)} type="text" placeholder="Your Address" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <textarea
                              name="Expreience"
                              value={Experience} onChange={(e)=>setExperience(e.target.value)}
                              placeholder="Expreience"
                              
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button"  onClick={btnSubmit}  className="btn">
                        Submit Request{" "}
                        <img
                          src="/petpal/assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </button>
                    </form>
                    <p className="ajax-response mb-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-details-area-end */}
      </main>
      <Footer />
    </>
  );
}
export default PetInterest;
