import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { collection, deleteDoc, onSnapshot, doc } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import Footer from "../component/footer";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";

function ViewCategory() {
  let [Category, setCategory] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  useEffect(function () {
    getCategories();
  }, []);

  async function getCategories() {
    let ColRef = collection(db, "Categories");
    onSnapshot(ColRef, function (Snapshot) {
      let result = [];
      Snapshot.docs.forEach(function (doc) {
        result.push({ ...doc.data(), id: doc.id });
      });
      setCategory(result);
    });
  }

  const filteredCategories = Category.filter(cat => {
    if (!searchQuery) return true;
    return (
      cat.name?.toLowerCase().includes(searchQuery) ||
      cat.desc?.toLowerCase().includes(searchQuery)
    );
  });

  async function del(id) {
    if (window.Swal) {
        const result = await window.Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });
        if (!result.isConfirmed) return;
    }

    try {
        await deleteDoc(doc(db, "Categories", id));
        if (window.Swal) {
            window.Swal.fire({
                title: "Deleted!",
                text: "Category has been deleted.",
                icon: "success"
            });
        }
    } catch (error) {
        console.error("Error deleting category:", error);
    }
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
                    <h4 className="mb-0">Categories</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row mb-4">
                        <div className="col-md-6">
                            <Link to="/addcatagory" className="btn btn-success waves-effect waves-light">
                              <i className="mdi mdi-plus me-2" /> Add New Category
                            </Link>
                        </div>
                      </div>

                      <div className="table-responsive">
                        <table className="table table-centered table-nowrap table-hover mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col" style={{ width: 50 }}>Id</th>
                              <th scope="col">Category Name</th>
                              <th scope="col">Description</th>
                              <th scope="col" style={{ width: 120 }} className="text-center">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Category.length === 0 ? (
                               <tr>
                                 <td colSpan="4" className="text-center p-5">
                                   <div className="text-muted">
                                     <i className="fa-solid fa-folder-open mb-3" style={{ fontSize: '2rem' }}></i>
                                     <p>No categories found.</p>
                                   </div>
                                 </td>
                                </tr>
                             ) : filteredCategories.length === 0 ? (
                                <tr>
                                  <td colSpan="4" className="text-center p-5">
                                    <div className="text-muted">
                                      <i className="fa-solid fa-magnifying-glass mb-3 text-warning" style={{ fontSize: '2rem' }}></i>
                                      <h5>No results found for "{searchQuery}"</h5>
                                      <p className="small">Try checking your spelling or using a different search term.</p>
                                    </div>
                                  </td>
                                </tr>
                             ) : (
                               filteredCategories.map(function (cat, index) {
                                return (
                                  <tr key={cat.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                      <span className="fw-medium text-dark">{cat.name}</span>
                                    </td>
                                    <td className="text-muted text-truncate" style={{ maxWidth: '300px' }}>
                                      {cat.desc}
                                    </td>
                                    <td className="text-center">
                                      <div className="d-flex justify-content-center gap-2">
                                          <Link
                                            to={`/updatecategory/${cat.id}`}
                                            className="btn btn-soft-primary btn-sm waves-effect waves-light"
                                            title="Edit"
                                          >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                          </Link>
                                          <button
                                            onClick={() => del(cat.id)}
                                            className="btn btn-soft-danger btn-sm waves-effect waves-light"
                                            title="Delete"
                                          >
                                            <i className="fa-solid fa-trash"></i>
                                          </button>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })
                             )}
                          </tbody>
                        </table>
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

export default ViewCategory;
