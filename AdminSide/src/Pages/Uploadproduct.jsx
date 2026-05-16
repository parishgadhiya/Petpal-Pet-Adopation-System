import React, { useState } from "react";
import axios from "axios";
import { db } from "../Firebaseconfig";
import { setDoc, doc } from "firebase/firestore";

function UploadProducts() {
  const [loading, setLoading] = useState(false);

  const products = [
    {
      id: 1,
      name: "Dog Harness-Neoprene Comfort Liner",
      price: 500,
      oldPrice: 800,
      image: "/petpal/assets/img/products/products_img01.jpg",
    },
    {
      id: 2,
      name: "Arm & Hammer Dog Shampoo",
      price: 350,
      oldPrice: 500,
      image: "/petpal/assets/img/products/products_img02.jpg",
    },
    {
      id: 3,
      name: "Milk-Bone Brushing Chews",
      price: 250,
      oldPrice: 300,
      image: "/petpal/assets/img/products/products_img03.jpg",
    },
    {
      id: 4,
      name: "Two Door Plastic Kennel",
      price: 2000,
      oldPrice: 2500,
      image: "/petpal/assets/img/products/products_img04.jpg",
    },
    {
      id: 5,
      name: "Kitten House Sleeping Bed",
      price: 1900,
      oldPrice: 2300,
      image: "/petpal/assets/img/products/products_img05.jpg",
    },
    {
      id: 6,
      name: "Dog Puzzle Toys",
      price: 350,
      oldPrice: 450,
      image: "/petpal/assets/img/products/products_img06.jpg",
    },
    {
      id: 7,
      name: "Zesty Paws Calming Puppy Bites",
      price: 200,
      oldPrice: 300,
      image: "/petpal/assets/img/products/products_img07.jpg",
    },
    {
      id: 8,
      name: "Hartz Extra Gentle Puppy Shampoo",
      price: 150,
      oldPrice: 300,
      image: "/petpal/assets/img/products/products_img08.jpg",
    },
    {
      id: 9,
      name: "Kitten House Bed",
      price: 800,
      oldPrice: 1000,
      image: "/petpal/assets/img/products/products_img09.jpg",
    },
    {
      id: 10,
      name: "Dog Harness Comfort Orange",
      price: 450,
      oldPrice: 500,
      image: "/petpal/assets/img/products/products_img10.jpg",
    },
    {
      id: 11,
      name: "Dog Puzzle Toy Treat Dispensing",
      price: 300,
      oldPrice: 350,
      image: "/petpal/assets/img/products/products_img11.jpg",
    },
    {
      id: 12,
      name: "Zesty Paws Puppy Bites 60 Count",
      price: 600,
      oldPrice: null,
      image: "/petpal/assets/img/products/products_img12.jpg",
    },
    {
      id: 13,
      name: "Hartz Gentle Puppy Shampoo 18oz",
      price: 300,
      oldPrice: 350,
      image: "/petpal/assets/img/products/products_img13.jpg",
    },
    {
      id: 14,
      name: "Kitten House Sleeping Bed Premium",
      price: 800,
      oldPrice: 1000,
      image: "/petpal/assets/img/products/products_img14.jpg",
    },
    {
      id: 15,
      name: "Dog Harness-Neoprene Comfort",
      price: 450,
      oldPrice: 500,
      image: "/petpal/assets/img/products/products_img15.jpg",
    },
  ];

  async function uploadToCloudinary(imagePath){

    try{
    
    const response = await fetch(imagePath);
    const blob = await response.blob();
    
    const formData = new FormData();
    formData.append("file", blob);
    formData.append("upload_preset", "products");
    
    const res = await axios.post(
    "https://api.cloudinary.com/v1_1/drfhhr4hh/image/upload",
    formData
    );
    
    return res.data.secure_url;
    
    }catch(error){
    
    console.error("Cloudinary Upload Error:", error);
    return null;
    
    }
    
    }

  async function uploadProducts() {
    setLoading(true);

    try {
      for (const product of products) {
        const imageUrl = await uploadToCloudinary(product.image);

        await setDoc(doc(db, "products", product.id.toString()), {
          productId: product.id,
          name: product.name,
          price: product.price,
          oldPrice: product.oldPrice,
          image: imageUrl,
          available: true,
          status: "Active"
        });
      }

      alert("All products uploaded successfully");
    } catch (error) {
      console.log(error);
      alert("Upload error");
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Upload Products To Firebase</h2>

      <button
        onClick={uploadProducts}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          background: "#ff6b00",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Uploading..." : "Upload All Products"}
      </button>
    </div>
  );
}

export default UploadProducts;
