import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import Footer from "../component/footer";


function ViewReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(fetchedReviews);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const deleteReview = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, "reviews", id));
        Swal.fire("Deleted!", "The review has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting review:", error);
        Swal.fire("Error!", "Failed to delete the review.", "error");
      }
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
                  <div className="page-title-box d-flex align-items-center justify-content-between mb-4">
                    <h4 className="mb-0" style={{ fontWeight: "800", color: "#001d3d" }}>Customer Reviews</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card shadow-sm border-0">
                    <div className="card-body p-4">
                      {loading ? (
                        <div className="text-center p-5">
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      ) : reviews.length === 0 ? (
                        <div className="text-center p-5">
                          <i className="fa-solid fa-comment-slash text-muted mb-3" style={{ fontSize: "3rem" }}></i>
                          <h5 className="text-muted">No reviews found yet.</h5>
                        </div>
                      ) : (
                        <div className="table-responsive">
                          <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                              <tr>
                                <th>User</th>
                                <th>Item ID</th>
                                <th>Type</th>
                                <th>Rating</th>
                                <th>Review</th>
                                <th>Date</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {reviews.map((rev) => (
                                <tr key={rev.id}>
                                  <td>
                                    <div className="fw-bold">{rev.userName}</div>
                                    <small className="text-muted">{rev.userId?.substring(0, 8)}...</small>
                                  </td>
                                  <td><small className="text-muted">{rev.itemId}</small></td>
                                  <td>
                                    <span className={`badge bg-${rev.type === 'pet' ? 'info' : 'primary'}`}>
                                      {rev.type}
                                    </span>
                                  </td>
                                  <td>
                                    <div className="text-warning">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <i
                                          key={star}
                                          className={star <= rev.rating ? "fas fa-star" : "far fa-star"}
                                        />
                                      ))}
                                    </div>
                                    <small className="fw-bold">{rev.rating}/5</small>
                                  </td>
                                  <td>
                                    <p className="mb-0 text-wrap" style={{ maxWidth: "300px" }}>
                                      {rev.reviewText}
                                    </p>
                                  </td>
                                  <td>
                                    {rev.createdAt?.toDate().toLocaleDateString() || "N/A"}
                                  </td>
                                  <td>
                                    <button
                                      className="btn btn-soft-danger btn-sm"
                                      onClick={() => deleteReview(rev.id)}
                                      title="Delete Review"
                                    >
                                      <i className="fa-solid fa-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
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

export default ViewReviews;
