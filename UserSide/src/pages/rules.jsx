import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Pagetitle from "../components/pagetitle";

function Rules() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [agreed, setAgreed] = useState({
    rule1: false,
    rule2: false,
    rule3: false,
    rule4: false,
    rule5: false,
    rule6: false,
    rule7: false,
  });

  useEffect(() => {
    if (id) {
      getPetDetails();
    }
  }, [id]);

  async function getPetDetails() {
    try {
      const docRef = doc(db, "pets", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPet({ id: docSnap.id, ...docSnap.data() });
      }
    } catch (error) {
      console.error("Error fetching pet detail:", error);
    }
  }

  const handleCheckboxChange = (e) => {
    setAgreed({ ...agreed, [e.target.name]: e.target.checked });
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setAgreed({
      rule1: isChecked,
      rule2: isChecked,
      rule3: isChecked,
      rule4: isChecked,
      rule5: isChecked,
      rule6: isChecked,
      rule7: isChecked,
    });
  };

  const isAllAgreed = Object.values(agreed).every((val) => val === true);

  const handleProceed = () => {
    if (isAllAgreed) {
      navigate(`/showinterest/${id}`);
    }
  };

  return (
    <>
      <Nav />
      <Pagetitle title="Adoption Rules & Regulations" />
      
      <section className="product__details-area pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="product__details-content p-5 shadow-lg border-0 rounded-4" style={{ backgroundColor: "#f9f6f9" }}>
                <div className="text-center mb-5">
                  <div className="display-6 fw-bold mb-2" style={{ color: "#8a4b8f" }}>Before You Adopt</div>
                  <p className="text-muted">Please read and agree to our adoption guidelines for <strong>{pet?.name || "this pet"}</strong></p>
                </div>



                <div className="rules-list mb-5">
                  {[
                    { id: "rule1", text: "I understand that pet ownership is a lifetime commitment (often 10-15+ years)." },
                    { id: "rule2", text: "I agree to provide a safe, healthy environment, with adequate food, fresh water, and shelter." },
                    { id: "rule3", text: "I will provide regular veterinary care, including vaccinations and heartworm/flea prevention." },
                    { id: "rule4", text: "I agree to never abandon the pet and will contact PetPal if I am ever unable to care for it." },
                    { id: "rule5", text: "I confirm that all members of my household agree to this adoption and have no known pet allergies." },
                    { id: "rule6", text: "I agree to comply with all local animal control laws and ordinances regarding pet ownership." },
                    { id: "rule7", text: "I confirm that I am at least 18 years of age and have the legal authority to adopt this pet." }
                  ].map((rule) => (
                    <div className="form-check mb-4 p-3 border rounded bg-white shadow-sm d-flex align-items-center" key={rule.id}>
                      <input
                        className="form-check-input ms-0 me-3"
                        type="checkbox"
                        name={rule.id}
                        id={rule.id}
                        checked={agreed[rule.id]}
                        onChange={handleCheckboxChange}
                        style={{ width: "22px", height: "22px", accentColor: "#4a1d4e", cursor: "pointer", border: "2px solid #4a1d4e" }}
                      />
                      <label 
                        className="form-check-label flex-grow-1" 
                        htmlFor={rule.id} 
                        style={{ cursor: "pointer", fontSize: "16px", color: "#333", fontWeight: "500" }}
                      >
                        {rule.text}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="form-check mb-5 p-3 border rounded bg-white shadow-sm d-flex align-items-center" style={{ borderLeft: "5px solid #4a1d4e" }}>
                  <input
                    className="form-check-input ms-0 me-3"
                    type="checkbox"
                    id="selectAll"
                    checked={isAllAgreed}
                    onChange={handleSelectAll}
                    style={{ width: "24px", height: "24px", accentColor: "#4a1d4e", cursor: "pointer", border: "2px solid #4a1d4e" }}
                  />
                  <label 
                    className="form-check-label flex-grow-1 fw-bold" 
                    htmlFor="selectAll" 
                    style={{ cursor: "pointer", fontSize: "16px", color: "#4a1d4e" }}
                  >
                    I agree to all rules and regulations listed above
                  </label>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleProceed}
                    disabled={!isAllAgreed}
                    className="btn btn-primary px-5 py-3 rounded-pill shadow-sm"
                    style={{ 
                      fontSize: "18px", 
                      fontWeight: "700", 
                      backgroundColor: isAllAgreed ? "#8a4b8f" : "#ccc", 
                      borderColor: isAllAgreed ? "#8a4b8f" : "#ccc",
                      transition: "all 0.3s ease",
                      cursor: isAllAgreed ? "pointer" : "not-allowed",
                      opacity: isAllAgreed ? 1 : 0.7
                    }}
                  >
                    Agree and Proceed to Adoption
                  </button>
                  <div className="mt-3">
                    <Link to={`/petdetails/${id}`} className="text-muted text-decoration-none">
                      <i className="fas fa-arrow-left me-2"></i> Back to Pet Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Rules;
