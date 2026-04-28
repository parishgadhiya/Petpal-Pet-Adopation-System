import React, { useState, useEffect } from "react";
import { db, auth } from "../firebaseconfig";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const ReviewSection = ({ itemId, type }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);
  const [hasReviewed, setHasReviewed] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!itemId) return;

    const q = query(
      collection(db, "reviews"),
      where("itemId", "==", itemId)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Sort in memory to avoid index requirement
      fetchedReviews.sort((a, b) => {
        const timeA = a.createdAt?.seconds ? a.createdAt.seconds : (a.createdAt ? new Date(a.createdAt).getTime() : 0);
        const timeB = b.createdAt?.seconds ? b.createdAt.seconds : (b.createdAt ? new Date(b.createdAt).getTime() : 0);
        return timeB - timeA;
      });

      setReviews(fetchedReviews);

      // Calculate average rating
      if (fetchedReviews.length > 0) {
        const total = fetchedReviews.reduce((acc, rev) => acc + rev.rating, 0);
        setAverageRating((total / fetchedReviews.length).toFixed(1));
      } else {
        setAverageRating(0);
      }

      // Check if current user has already reviewed
      if (user) {
        const userReview = fetchedReviews.find((rev) => rev.userId === user.uid);
        setHasReviewed(!!userReview);
      }
    });

    return () => unsubscribe();
  }, [itemId, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to write a review.");
      return;
    }

    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    if (!reviewText.trim()) {
      alert("Please write a review.");
      return;
    }

    try {
      await addDoc(collection(db, "reviews"), {
        itemId,
        userId: user.uid,
        userName: user.displayName || user.email.split("@")[0],
        rating,
        reviewText,
        type,
        createdAt: serverTimestamp(),
      });

      setRating(0);
      setReviewText("");
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error adding review: ", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="review-section mt-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="product__reviews-top mb-4 p-4 border rounded bg-white shadow-sm">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h4 className="title mb-1">Customer Reviews</h4>
                <div className="d-flex align-items-center">
                  <div className="rating text-warning me-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={
                          star <= Math.round(averageRating)
                            ? "fas fa-star"
                            : "far fa-star"
                        }
                      />
                    ))}
                  </div>
                  <span className="fw-bold fs-5">{averageRating} out of 5</span>
                </div>
                <p className="text-muted small mt-1">Based on {reviews.length} reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* REVIEW FORM */}
        <div className="col-lg-12 mb-5">
          {!hasReviewed ? (
            <div className="card border-0 shadow-sm p-4">
              <h5 className="mb-3">Write a Review</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="d-block mb-2">Your Rating *</label>
                  <div className="star-rating fs-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        style={{ cursor: "pointer", color: (hover || rating) >= star ? "#ffc107" : "#e4e5e9" }}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="mb-2">Your Review *</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your experience here..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#8a4b8f", borderColor: "#8a4b8f" }}>
                  Submit Review
                </button>
              </form>
            </div>
          ) : (
            <div className="alert alert-info border-0 shadow-sm">
              <i className="fas fa-check-circle me-2"></i>
              You have already reviewed this {type}.
            </div>
          )}
        </div>

        {/* REVIEWS LIST */}
        <div className="col-lg-12">
          <h5 className="mb-4">Recent Reviews</h5>
          {reviews.length > 0 ? (
            <div className="reviews-list">
              {reviews.map((rev) => (
                <div key={rev.id} className="card border-0 shadow-sm mb-3 p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="mb-0 fw-bold">{rev.userName}</h6>
                      <div className="rating text-warning small">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i
                            key={star}
                            className={star <= rev.rating ? "fas fa-star" : "far fa-star"}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-muted small">
                      {rev.createdAt?.toDate().toLocaleDateString() || "Just now"}
                    </span>
                  </div>
                  <p className="mb-0 text-secondary">{rev.reviewText}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4 bg-light rounded">
              <i className="far fa-comment-alt text-muted mb-2 fs-2"></i>
              <p className="text-muted">No reviews yet. Be the first to review!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
