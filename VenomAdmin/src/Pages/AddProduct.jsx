import React, { useState, useEffect } from "react";
import { db } from "../Firebaseconfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import Footer from "../component/footer";
import axios from "axios";

function AddProduct() {

  const [productId,setProductId] = useState("");
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [oldPrice,setOldPrice] = useState("");
  const [image,setImage] = useState(null);

  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    getCategories();
  },[]);

  // -------- GET CATEGORIES --------

  async function getCategories(){

    const colRef = collection(db,"Categories");

    onSnapshot(colRef,(snapshot)=>{

      const result = [];

      snapshot.docs.forEach((doc)=>{
        result.push({id:doc.id,...doc.data()});
      });

      setCategories(result);

    });

  }

  // -------- ADD PRODUCT --------

  const addProduct = async () => {

    if(!image){
      Swal.fire({
        title:"Please upload image",
        icon:"warning"
      });
      return;
    }

    try{

      const formData = new FormData();
      formData.append("file",image);
      formData.append("upload_preset","petpal");

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/drfhhr4hh/image/upload",
        formData
      );

      const imageUrl = cloudRes.data.secure_url;

      await addDoc(collection(db,"products"),{
        productId:productId,
        name:name,
        price:Number(price),
        oldPrice:Number(oldPrice),
        image:imageUrl,
        available: true,
        status: "Active"
      });

      Swal.fire({
        title:"Product Added Successfully",
        icon:"success"
      });

      setProductId("");
      setName("");
      setPrice("");
      setOldPrice("");
      setImage(null);

    }catch(error){

      console.error(error);

      Swal.fire({
        title:"Something went wrong",
        icon:"error"
      });

    }

  };

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
                    <h4 className="mb-0">Add Product</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card shadow-sm">
                    <div className="card-body">
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

                      {/* IMAGE */}
                      <div className="mb-3">
                        <label className="form-label">Product Image</label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>

                      <div className="mt-4 text-end">
                        <button
                          className="btn btn-primary waves-effect waves-light"
                          onClick={addProduct}
                        >
                          <i className="uil uil-file-alt me-1"></i> Add Product
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

export default AddProduct;