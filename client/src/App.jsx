import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
