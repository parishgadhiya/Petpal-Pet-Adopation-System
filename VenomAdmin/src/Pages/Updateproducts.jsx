import React, { useState, useEffect } from "react";
import { db } from "../Firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
//import Swal from "sweetalert2";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import Footer from "../component/footer";
import axios from "axios";

function UpdateProduct() {

  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [image, setImage] = useState("");
  const [available, setAvailable] = useState(true);
  const [status, setStatus] = useState("Active");
  const navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  // -------- UPDATE PRODUCT --------

  async function updateproduct() {

    try{
  
      let imageUrl = image;
  
      // If user selected new image
      if(typeof image !== "string"){
  
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "petpal");
  
        const cloudRes = await axios.post(
          "https://api.cloudinary.com/v1_1/drfhhr4hh/image/upload",
          formData
        );
  
        imageUrl = cloudRes.data.secure_url;
  
      }
  
      const docRef = doc(db,"products",id);
  
      await updateDoc(docRef,{
        productId:productId,
        name:name,
        price:price,
        oldPrice:oldPrice,
        image:imageUrl,
        available: available,
        status: status
      });
  
      Swal.fire({
        title:"Product Updated Successfully",
        icon:"success"
      });

      navigate("/viewproduct");
  
    }catch(error){
  
      console.log(error);
  
    }
  
  }

  // -------- FETCH PRODUCT --------

  useEffect(function () {
    getProduct();
  }, []);

  async function getProduct() {

    const docRef = doc(db, "products", id);

    const docSnap = await getDoc(docRef);

    const product = docSnap.data();

    const { productId, name, price, oldPrice, image, available, status } = product;

    setProductId(productId);
    setName(name);
    setPrice(price);
    setOldPrice(oldPrice);
    setImage(image);
    setAvailable(available !== false);
    setStatus(status || "Active");

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
                    <h4 className="mb-0">Update Product</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6 text-center mb-4">
                           {image && (
                            <img
                              src={image}
                              alt="product"
                              className="img-thumbnail"
                              style={{ maxHeight: "200px" }}
                            />
                          )}
                        </div>
                        <div className="col-md-6">
                           {/* PRODUCT ID */}
                          <div className="mb-3">
                            <label className="form-label">Product ID</label>
                            <input
                              className="form-control"
                              placeholder="Enter Product ID"
                              value={productId}
                              onChange={(e) => setProductId(e.target.value)}
                            />
                          </div>

                          {/* PRODUCT NAME */}
                          <div className="mb-3">
                            <label className="form-label">Product Name</label>
                            <input
                              className="form-control"
                              placeholder="Enter Product Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                           {/* PRICE */}
                          <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input
                              className="form-control"
                              placeholder="0.00"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                           {/* OLD PRICE */}
                          <div className="mb-3">
                            <label className="form-label">Old Price</label>
                            <input
                              className="form-control"
                              placeholder="0.00"
                              value={oldPrice}
                              onChange={(e) => setOldPrice(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                           {/* AVAILABILITY */}
                          <div className="mb-3">
                            <label className="form-label">Availability</label>
                            <select
                                className="form-select"
                                value={available.toString()}
                                onChange={(e) => setAvailable(e.target.value === "true")}
                                >
                                <option value="true">In Stock</option>
                                <option value="false">Out of Stock</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                           {/* STATUS */}
                          <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select
                                className="form-select"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                          </div>
                        </div>
                      </div>

                       {/* IMAGE UPLOAD */}
                       <div className="mb-3">
                        <label className="form-label">Change Image (Optional)</label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>

                      <div className="mt-4 text-end">
                        <button 
                          className="btn btn-light waves-effect me-2"
                          onClick={() => navigate("/viewproduct")}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary waves-effect waves-light"
                          onClick={updateproduct}
                        >
                          <i className="uil uil-save me-1"></i> Update Product
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
  );
}

export default UpdateProduct;