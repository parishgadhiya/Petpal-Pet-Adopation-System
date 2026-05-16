import Nav from "../components/navbar";
import Footer from "../components/footer";
import Pagetitle from "../components/pagetitle";
import Subscribe from "../components/subscribe";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebaseconfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import axios from "axios";
import useAuthCheck from "../hooks/useAuthCheck";

function AddPet() {
  const { checkAuth, user } = useAuthCheck();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [age, setAge] = useState("");
  let [phone, setPhone] = useState("");
  let [color, setColor] = useState("");
  let [addr, setAddr] = useState("");
  let [justification, setJustification] = useState("");
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
    if (!checkAuth("post a pet request")) return;

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
        userId: user.uid,
        name: name,
        email: email,
        url: imageUrl,
        age: age,
        phone: phone,
        color: color,
        type: type,
        justification: justification,
        addr: addr,
        status: "pending",
        createdAt: new Date(),
      });

      Swal.fire({
        title: "Thank you for Posting pet Request",
        icon: "success",
      });

      // optional reset
      setName("");
      setEmail("");
      setAge("");
      setPhone("");
      setColor("");
      setAddr("");
      setJustification("");
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
    console.log(email);
    console.log(imageUrl);
  }

  return (
    <>
      {/* header-area */}
      <Nav />
      {/* header-area-end */}
      {/* main-area */}
      <main className="fix">
        {/* breadcrumb-area */}
        <Pagetitle title="Add Your Pet" />
        {/* breadcrumb-area-end */}
        {/* registration-area */}
        <section className="registration__area-two">
          <div className="container">
            <div className="registration__inner-wrap-two">
              <div className="row">
                <div className="col-lg-8">
                  <div className="registration__form-wrap">
                    <form className="registration__form">
                      <h3 className="title">Add Pet</h3>
                      {/* <span>Your email address will not be published. Required fields are marked *</span> */}
                      <div className="row gutter-20">
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                              type="text"
                              placeholder="Age"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              placeholder="User Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              type="phone"
                              placeholder="User phone"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <textarea
                              value={addr}
                              onChange={(e) => setAddr(e.target.value)}
                              name="address"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input
                              ref={fileref}
                              type="file"
                              style={{ display: "none" }}
                              onChange={(e) => setImage(e.target.files[0])}
                            ></input>
                            <button
                              type="button"
                              onClick={() => fileref.current.click()}
                              className="btn n-100"
                            >
                              Upload Pet Picture
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input
                              value={color}
                              onChange={(e) => setColor(e.target.value)}
                              type="text"
                              placeholder="Color"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-grp select-grp">
                            <select
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                              name="Reason"
                              className="orderby"
                            >
                              {categories &&
                                categories.map((categories) => (
                                  <option value={categories.name}>
                                    {categories.name}
                                  </option>
                                ))}
                              {/* <option value="cat">Cat</option> */}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <textarea
                              value={justification}
                              onChange={(e) => setJustification(e.target.value)}
                              name="comment"
                              placeholder="Justification for Giving Pet"
                            />
                          </div>
                        </div>
                      </div>
                      <button onClick={addpet} type="button" className="btn">
                        Add Pet
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="registration__img">
                    <img
                      src="petpal/assets/img/images/registration_img.png"
                      alt=""
                      data-aos="fade-right"
                      data-aos-delay={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* registration-area-end */}
      </main>
      {/* main-area-end */}
      {/* footer-area */}
      <Subscribe />
      <Footer />
    </>
  );
}
export default AddPet;
