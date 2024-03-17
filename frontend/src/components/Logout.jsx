import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const Logout = () => {
    const { authUser, setAuthUser } = useAuthContext();

    const handleLogout = async () => {
		try {
			const res = await fetch("/api/auth/logout", { credentials: "include" });
			const data = await res.json();
			console.log(data);
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		}
	};

   	return (
		<>
			<div onClick={handleLogout}>
				{/* // we'll add a logout icon here, later */}
				Logout
			</div>
		</>
	);
}

export default Logout