import { Routes, Route } from "react-router-dom";

// Components
import MyNavbar from "./components/Navbar";

// Pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home";
import BookDetailPage from "./pages/Detail";
import OrdersPage from "./pages/ViewOrder";
import ViewOrderDetails from "./pages/ViewOrderDetail";
import SignOutPage from "./pages/SignOut"
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<SignOutPage />} />
        <Route path="/item/list" element={<ListingPage />} />
        <Route path="/item/view/:itemId" element={<BookDetailPage />} />
        <Route path="/item/orders" element={<OrdersPage />} />
        <Route path="/items/orders/:itemId" element={<ViewOrderDetails />} />
      </Routes>
    </div>
  );
}

export default App;
