import { useAuth } from "./AuthContext";
import { useTheme } from "./ThemeContext";
export default function MainContent() {
  const products = ["Apple", "Banana", "Carrot", "Donut", "Egg", "Fish"];
  const { theme } = useTheme();
  const { isLoggedIn } = useAuth();
  return (
    <main className={`${theme + "m"}`}>
      {isLoggedIn &&
        products.map((item, index) => (
          <div key={index} className={`${theme + "c"}`}>
            {item}
          </div>
        ))}
      {!isLoggedIn && (
        <h2 style={{ textAlign: "center" }}>Please Login Karlo.....</h2>
      )}
    </main>
  );
}
