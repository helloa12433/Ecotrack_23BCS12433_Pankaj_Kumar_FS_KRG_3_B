import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-emerald-600 to-green-500 text-white py-4 shadow-md">
      <h1 className="text-center text-2xl md:text-3xl font-bold tracking-wide">
        {title}
      </h1>
      <Link
        to="/dashboard"
        className="absolute left-4 top-4 text-white hover:underline text-sm md:text-base"
      >
        Home
      </Link>
      
      <button
        onClick={handleLogOut}
        className="absolute right-4 top-4 bg-white text-emerald-600 font-semibold px-3 py-1 rounded-full hover:bg-gray-100 text-sm md:text-base"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
