import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import OrderFormPage from "./Pages/OrderFormPage";
import OrderSuccessPage from "./Pages/OrderSuccessfulPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/order" element={<OrderFormPage />} />
        <Route path="/success" element={<OrderSuccessPage />} />
      </Routes>
    </Router>
  );
}
export default App;
