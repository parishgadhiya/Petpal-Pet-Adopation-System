import { useEffect, useRef, useState } from "react";
import { db } from "../Firebaseconfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import Header from "../component/Header";
import Footer from "../component/footer";
import Sidebare from "../component/Sidebare";
import axios from "axios";
 
function AddPet() {
  let [name, setName] = useState("");

  let [age, setAge] = useState("");
  let [addr, setAddr] = useState("");

  let [color, setColor] = useState("");

  let [type, setType] = useState("");

  let fileref = useRef();
  let [image, setImage] = useState();

  let [categories, SetCategories] = useState();

  useEffect(function () {
    getCategories();
  }, []);

  async function getCategories() {
    let colRef = collection(db, "Categories");
    onSnapshot(colRef, function (snapshot) {
      let result = [];
      snapshot.docs.forEach(function (doc) {
        result.push({ id: doc.id, ...doc.data() });
      });
      SetCategories(result);
    });
  }

  async function addpet() {
    if (!image) {
      Swal.fire({
        title: "Please upload image",
        icon: "warning",
      });
      return;
    }
    let imageUrl = "";
    try {
      // 1️⃣ Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "petpal"); // 🔁 replace
      // optional: formData.append("folder", "pets")

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/drfhhr4hh/image/upload",
        formData
      );

      const imageUrl = cloudRes.data.secure_url;

      // 2️⃣ Save data to Firestore
      let colRef = collection(db, "pets");
      await addDoc(colRef, {
        name: name,

        url: imageUrl,
        age: age,
        addr: addr,
        color: color,

        type: type,

        status: "approved",
        createdAt: new Date(),
      });

      Swal.fire({
        title: "Pet Added SuccessFully",
        icon: "success",
      });

      // optional reset
      setName("");

      setAge("");
      setAddr("");
      setColor("");


      setType("");
      setImage(null);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Something went wrong",
        icon: "error",
      });
    }
    console.log(name);

    console.log(imageUrl);
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
                    <h4 className="mb-0">Add Pet</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      {/* PET NAME */}
                      <div className="mb-3">
                        <label className="form-label">Pet Name</label>
                        <input
                          className="form-control"
                          placeholder="Enter Pet Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      {/* AGE */}
                      <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 2 years"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>

                      {/* ADDRESS */}
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea
                          className="form-control"
                          placeholder="Enter Address"
                          value={addr}
                          onChange={(e) => setAddr(e.target.value)}
                        />
                      </div>


                      {/* COLOR */}
                      <div className="mb-3">
                        <label className="form-label">Color</label>
                        <input
                          className="form-control"
                          placeholder="e.g. Golden, White"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                        />
                      </div>

                      {/* PET TYPE */}
                      <div className="mb-3">
                        <label className="form-label">Pet Type</label>
                        <select
                          className="form-select"
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option value="">Select Type</option>
                          {categories?.map((c) => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                          ))}
                        </select>
                      </div>

                      {/* IMAGE */}
                      <div className="mb-3">
                        <label className="form-label">Pet Image</label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          className="btn btn-primary waves-effect waves-light me-2"
                          onClick={addpet}
                        >
                          <i className="uil uil-plus me-1"></i> Add Pet
                        </button>
                        <button 
                          className="btn btn-light waves-effect"
                          onClick={() => setName("")} 
                        >
                          Cancel
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
export default AddPet;
