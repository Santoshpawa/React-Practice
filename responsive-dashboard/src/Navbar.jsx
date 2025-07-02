import { useAuth } from "./AuthContext";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { isLoggedIn, toggleAuth } = useAuth();
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="navbar">
      <span>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</span>

      <div onClick={toggleTheme}>Toggle Theme</div>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Logout mat karna Bhai 🥺" : "Login kr Bhai !!!"}
      </button>
    </nav>
  );
}
