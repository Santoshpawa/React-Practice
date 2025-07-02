import { useAuth } from "./AuthContext";
import { useTheme } from "./ThemeContext";
let style = {
  width: "200px",
  padding: "10px",
};

export default function Sidebar() {
  const { isLoggedIn } = useAuth();
  const { theme } = useTheme();

  return (
    <div className={`${theme + "s"}`}>
      {isLoggedIn && <p style={style}>Welcome, User!</p>}
    </div>
  );
}
