import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { refreshAccessToken } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const refresh = async () => {
      const result = await dispatch(refreshAccessToken());
      console.log(result);
    };

    refresh();
  }, []);
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
