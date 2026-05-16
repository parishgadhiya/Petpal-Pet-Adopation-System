import { useState } from "react"
import {addDoc, collection} from 'firebase/firestore'
import { db } from "../Firebaseconfig";
import Footer from "../component/footer";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";


function AddCatagory(){
    
    let [name,setName]= useState("");
    let [desc,setDesc]= useState("");

    async function onSubmit(){
        let colRef= collection(db,"Categories")
        await addDoc(colRef,{name:name, desc:desc})
        Swal.fire({
            title: "Category saved!",
            icon: "success"
          });

          setName("")
          setDesc("")
    }
    return(
        <>
          <div id="layout-wrapper">
            <Header/>
            <Sidebare/>

            <div className="main-content">
              <div className="page-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0">Add Category</h4>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="card shadow-sm border-0" style={{ borderRadius: "15px" }}>
                        <div className="card-header bg-transparent border-bottom p-4">
                          <h5 className="mb-0" style={{ fontWeight: "700", color: "#001d3d" }}>
                            <i className="fa-solid fa-folder-plus me-2" style={{ color: "#f87d47" }}></i>
                            Category Information
                          </h5>
                        </div>
                        <div className="card-body p-4">
                          <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", fontSize: "14px", color: "#555" }}>Category Name</label>
                            <input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              className="form-control"
                              placeholder="e.g. Pet Care, Food, Toys"
                              style={{ height: "45px", borderRadius: "10px", border: "1px solid #e1e5eb" }}
                            />
                          </div>
                          <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", fontSize: "14px", color: "#555" }}>Description</label>
                            <textarea
                              value={desc}
                              onChange={(e) => setDesc(e.target.value)}
                              className="form-control"
                              rows={5}
                              placeholder="Describe what this category includes..."
                              style={{ borderRadius: "10px", border: "1px solid #e1e5eb" }}
                            />
                          </div>

                          <div className="mt-4">
                            <button
                              className="btn btn-primary w-100 py-3"
                              onClick={onSubmit}
                              style={{ 
                                borderRadius: "12px", 
                                fontWeight: "700", 
                                background: "linear-gradient(90deg, #001d3d 0%, #003566 100%)",
                                border: "none",
                                boxShadow: "0 4px 15px rgba(0, 29, 61, 0.2)"
                              }}
                            >
                              <i className="fa-solid fa-save me-2"></i> Save Category
                            </button>
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
        </>
    )
}
export default AddCatagory