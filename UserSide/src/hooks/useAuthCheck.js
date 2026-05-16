import { auth } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";

const useAuthCheck = () => {
    const navigate = useNavigate();

    const checkAuth = (action) => {
        const user = auth.currentUser;
        if (!user) {
            // Check if Swal is available globally
            if (window.Swal) {
                window.Swal.fire({
                    title: "Access Denied",
                    text: `Please login first to ${action || 'proceed'}.`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Login Now",
                    cancelButtonText: "Later",
                    confirmButtonColor: "#f39c12",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login");
                    }
                });
            } else {
                alert(`Please login first to ${action || 'proceed'}.`);
                navigate("/login");
            }
            return false;
        }
        return true;
    };

    return { checkAuth, user: auth.currentUser };
};

export default useAuthCheck;
