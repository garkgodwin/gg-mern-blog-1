import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import { refreshAccessToken } from "./features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { isAuthenticated, accessToken, loading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const refresh = async () => {
    const result = await dispatch(refreshAccessToken());
  };

  useEffect(() => {
    refresh();
  }, []);
  return (
    <div className={`app ${isAuthenticated ? "app-auth" : ""}`}>
      {isAuthenticated && <Sidebar />}
      <div className="app-right">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
