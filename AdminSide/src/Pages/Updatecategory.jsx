import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import Footer from "../component/footer";
import { useNavigate } from "react-router-dom";
function UpdateCategory() {
  let [name, SetName] = useState("");
  let [desc, SetDesc] = useState("");

  let { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  async function Updatecategory() {
    let docRef = doc(db, "Categories", id);
    await updateDoc(docRef, {
      name: name,
      desc: desc,
    });

    Swal.fire({
      title: "Category Updated Successfully",
      icon: "success",
    });

    navigate("/viewcategory");
  }
  useEffect(function () {
    getPetCategory();
  }, []);

  async function getPetCategory() {
    let docRef = doc(db, "Categories", id);
    let docSnap = await getDoc(docRef);
    let category = docSnap.data();
    let { name, desc } = category;
    SetName(name);
    SetDesc(desc);
  }
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
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Update Category</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                           <div className="mb-3">
                              <label className="form-label">Category Name</label>
                              <input
                                value={name}
                                onChange={(e) => SetName(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Enter Category Name"
                              />
                            </div>
                            <div className="mb-0">
                              <label className="form-label">Category Description</label>
                              <textarea
                                value={desc}
                                onChange={(e) => SetDesc(e.target.value)}
                                className="form-control"
                                rows={4}
                                placeholder="Enter Category Description"
                              />
                            </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <button
                          className="btn btn-primary waves-effect waves-light me-2"
                          onClick={Updatecategory}
                        >
                          <i className="uil uil-save me-1"></i> Update Category
                        </button>
                        <Link 
                          to="/viewcategory"
                          className="btn btn-light waves-effect"
                        >
                          Cancel
                        </Link>
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
  );
}

export default UpdateCategory;
