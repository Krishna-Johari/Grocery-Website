// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

// Context & Notifications
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import SignIn from "./pages/Signin.jsx";
import Signup from "./pages/SignUp.jsx";
// ... (other imports)

function ProtectedAdminDashboard() {
  const { auth, loading } = useAuth();

  if (loading) return <div className="p-4 text-center">Checking authentication...</div>;

  if (!auth || auth.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <AdminDashboard />;
}

function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/signup", "/admin-dashboard"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Protected admin dashboard */}
        <Route path="/admin-dashboard" element={<ProtectedAdminDashboard />} />

        {/* Catch-all */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <AppContent />
            <ToastContainer position="top-right" autoClose={2000} />
          </Router>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}




// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// // Context & Notifications
// import { WishlistProvider } from "./context/WishlistContext";
// import { CartProvider } from "./context/CartContext";
// import { AuthProvider } from "./context/AuthContext"; // ✅ Import AuthProvider
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Components
// import Header from "./components/Header";

// // Pages
// import Home from "./pages/Home.jsx";
// import DalAndPulses from "./pages/DalAndPulses.jsx";
// import AttaAndFlour from "./pages/AttaAndFlour.jsx";
// import Snacks from "./pages/Snacks.jsx";
// import OilAndGhee from "./pages/OilAndGhee.jsx";
// import Beverages from "./pages/Beverages.jsx";
// import Dairy from "./pages/Dairy.jsx";
// import Spices from "./pages/Spices.jsx";
// import Rice from "./pages/Rice.jsx";
// import Fruits from "./pages/Fruits.jsx";
// import Vegetables from "./pages/Vegetables.jsx";
// import Bakery from "./pages/Bakery.jsx";
// import FrozenFoods from "./pages/FrozenFoods.jsx";
// import SignIn from "./pages/Signin.jsx";
// import Signup from "./pages/SignUp.jsx";
// import CartPage from "./pages/CartPage.jsx";
// import Checkout from "./pages/Checkout.jsx";
// import PlaceOrder from "./pages/PlaceOrder.jsx";
// import ShopByCategory from "./pages/ShopByCategory.jsx";
// import SearchResults from "./pages/SearchResults.jsx";
// import OrderSuccess from "./pages/OrderSuccess.jsx";
// import OrderTracking from "./pages/OrderTracking.jsx";
// import Wishlist from "./pages/Wishlist.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";

// function AppContent() {
//   const location = useLocation();
//   const hideHeaderRoutes = ["/login", "/signup", "/admin-dashboard"];
//   const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

//   return (
//     <>
//       {!shouldHideHeader && <Header />}
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/dal-pulses" element={<DalAndPulses />} />
//         <Route path="/atta-flour" element={<AttaAndFlour />} />
//         <Route path="/snacks" element={<Snacks />} />
//         <Route path="/oil-ghee" element={<OilAndGhee />} />
//         <Route path="/beverages" element={<Beverages />} />
//         <Route path="/dairy" element={<Dairy />} />
//         <Route path="/spices" element={<Spices />} />
//         <Route path="/rice" element={<Rice />} />
//         <Route path="/fruits" element={<Fruits />} />
//         <Route path="/vegetables" element={<Vegetables />} />
//         <Route path="/bakery" element={<Bakery />} />
//         <Route path="/frozen-foods" element={<FrozenFoods />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/place-order" element={<PlaceOrder />} />
//         <Route path="/order-success" element={<OrderSuccess />} />
//         <Route path="/shop-by-category" element={<ShopByCategory />} />
//         <Route path="/order-tracking" element={<OrderTracking />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="/wishlist" element={<Wishlist />} />
        
//         {/* Auth Routes */}
//         <Route path="/login" element={<SignIn />} />
//         <Route path="/signup" element={<Signup />} />
        
//         {/* Admin Route */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
        
//         {/* Catch-all route for 404 pages */}
//         <Route path="*" element={<div>Page Not Found</div>} />
//       </Routes>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider> {/* ✅ Wrap entire app with AuthProvider */}
//       <WishlistProvider>
//         <CartProvider>
//           <Router>
//             <AppContent />
//             <ToastContainer position="top-right" autoClose={2000} />
//           </Router>
//         </CartProvider>
//       </WishlistProvider>
//     </AuthProvider>
//   );
// }










// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// // Context & Notifications
// import { WishlistProvider } from "./context/WishlistContext";
// import { CartProvider } from "./context/CartContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AdminDashboard from "./pages/AdminDashboard";

// // Components
// import Header from "./components/Header";

// // Pages
// // import Home from "./pages/Home";
// // import DalAndPulses from "./pages/DalAndPulses";
// // import AttaAndFlour from "./pages/AttaAndFlour";
// // import Snacks from "./pages/Snacks";
// // import OilAndGhee from "./pages/OilAndGhee";
// // import Beverages from "./pages/Beverages";
// // import Dairy from "./pages/Dairy";
// // import Spices from "./pages/Spices";
// // import Rice from "./pages/Rice";
// // import Fruits from "./pages/Fruits";
// // import Vegetables from "./pages/Vegetables";
// // import Bakery from "./pages/Bakery";
// // import FrozenFoods from "./pages/FrozenFoods";
// // import SignIn from "./pages/SignIn.js";
// // import Signup from "./pages/Signup";
// // import CartPage from "./pages/CartPage";
// // import Checkout from "./pages/Checkout";
// // import PlaceOrder from "./pages/PlaceOrder";
// // import ShopByCategory from "./pages/ShopByCategory";
// // import SearchResults from "./pages/SearchResults";
// // import OrderSuccess from "./pages/OrderSuccess";
// // import OrderTracking from "./pages/OrderTracking";
// // import Wishlist from "./pages/Wishlist";
// // import AdminSignin from "./pages/AdminSignin";

// // Pages
// import Home from "./pages/Home.jsx";
// import DalAndPulses from "./pages/DalAndPulses.jsx";
// import AttaAndFlour from "./pages/AttaAndFlour.jsx";
// import Snacks from "./pages/Snacks.jsx";
// import OilAndGhee from "./pages/OilAndGhee.jsx";
// import Beverages from "./pages/Beverages.jsx";
// import Dairy from "./pages/Dairy.jsx";
// import Spices from "./pages/Spices.jsx";
// import Rice from "./pages/Rice.jsx";
// import Fruits from "./pages/Fruits.jsx";
// import Vegetables from "./pages/Vegetables.jsx";
// import Bakery from "./pages/Bakery.jsx";
// import FrozenFoods from "./pages/FrozenFoods.jsx";
// import SignIn from "./pages/Signin.jsx";
// import Signup from "./pages/SignUp.jsx";
// import CartPage from "./pages/CartPage.jsx";
// import Checkout from "./pages/Checkout.jsx";
// import PlaceOrder from "./pages/PlaceOrder.jsx";
// import ShopByCategory from "./pages/ShopByCategory.jsx";
// import SearchResults from "./pages/SearchResults.jsx";
// import OrderSuccess from "./pages/OrderSuccess.jsx";
// import OrderTracking from "./pages/OrderTracking.jsx";
// import Wishlist from "./pages/Wishlist.jsx";
// import AdminSignin from "./pages/AdminSignin.jsx";

// function AppContent() {
//   const location = useLocation();
//   const hideHeaderRoutes = [
//     "/login", 
//     "/signup", 
//     "/adminsignin", 
//     "/admin", 
//     "/admin/login",
//     "/admin-dashboard"
//   ];
//   const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

//   return (
//     <>
//       {!shouldHideHeader && <Header />}
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/adminsignin" element={<AdminSignin />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />
//         <Route path="/dal-pulses" element={<DalAndPulses />} />
//         <Route path="/atta-flour" element={<AttaAndFlour />} />
//         <Route path="/snacks" element={<Snacks />} />
//         <Route path="/oil-ghee" element={<OilAndGhee />} />
//         <Route path="/beverages" element={<Beverages />} />
//         <Route path="/dairy" element={<Dairy />} />
//         <Route path="/spices" element={<Spices />} />
//         <Route path="/rice" element={<Rice />} />
//         <Route path="/fruits" element={<Fruits />} />
//         <Route path="/vegetables" element={<Vegetables />} />
//         <Route path="/bakery" element={<Bakery />} />
//         <Route path="/frozen-foods" element={<FrozenFoods />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/place-order" element={<PlaceOrder />} />
//         <Route path="/order-success" element={<OrderSuccess />} />
//         <Route path="/shop-by-category" element={<ShopByCategory />} />
//         <Route path="/order-tracking" element={<OrderTracking />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="/wishlist" element={<Wishlist />} />
        
//         {/* Auth Routes */}
//         <Route path="/login" element={<SignIn />} />
//         <Route path="/signup" element={<Signup />} />
        
//         {/* Admin Routes - Multiple paths for flexibility */}
//         <Route path="/adminsignin" element={<AdminSignin />} />
      
        
//         {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        
//         {/* Catch-all route for 404 pages */}
//         <Route path="*" element={<div>Page Not Found</div>} />
//       </Routes>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <WishlistProvider>
//       <CartProvider>
//         <Router>
//           <AppContent />
//           <ToastContainer position="top-right" autoClose={2000} />
//         </Router>
//       </CartProvider>
//     </WishlistProvider>
//   );
// }




// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// // Context & Notifications
// import { WishlistProvider } from "./context/WishlistContext";
// import { CartProvider } from "./context/CartContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AdminDashboard from "./pages/AdminDashboard";

// // Components
// import Header from "./components/Header";

// // Pages
// import Home from "./pages/Home.jsx";
// import DalAndPulses from "./pages/DalAndPulses.jsx";
// import AttaAndFlour from "./pages/AttaAndFlour.jsx";
// import Snacks from "./pages/Snacks.jsx";
// import OilAndGhee from "./pages/OilAndGhee.jsx";
// import Beverages from "./pages/Beverages.jsx";
// import Dairy from "./pages/Dairy.jsx";
// import Spices from "./pages/Spices.jsx";
// import Rice from "./pages/Rice.jsx";
// import Fruits from "./pages/Fruits.jsx";
// import Vegetables from "./pages/Vegetables.jsx";
// import Bakery from "./pages/Bakery.jsx";
// import FrozenFoods from "./pages/FrozenFoods.jsx";
// import SignIn from "./pages/SignIn.jsx";
// import Signup from "./pages/Signup.jsx";
// import CartPage from "./pages/CartPage.jsx";
// import Checkout from "./pages/Checkout.jsx";
// import PlaceOrder from "./pages/PlaceOrder.jsx";
// import ShopByCategory from "./pages/ShopByCategory.jsx";
// import SearchResults from "./pages/SearchResults.jsx";
// import OrderSuccess from "./pages/OrderSuccess.jsx";
// import OrderTracking from "./pages/OrderTracking.jsx";
// import Wishlist from "./pages/Wishlist.jsx";

// function AppContent() {
//   const location = useLocation();
//   const hideHeaderRoutes = [
//     "/login", 
//     "/signup", 
//     "/admin-dashboard"
//   ];
//   const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

//   return (
//     <>
//       {!shouldHideHeader && <Header />}
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/dal-pulses" element={<DalAndPulses />} />
//         <Route path="/atta-flour" element={<AttaAndFlour />} />
//         <Route path="/snacks" element={<Snacks />} />
//         <Route path="/oil-ghee" element={<OilAndGhee />} />
//         <Route path="/beverages" element={<Beverages />} />
//         <Route path="/dairy" element={<Dairy />} />
//         <Route path="/spices" element={<Spices />} />
//         <Route path="/rice" element={<Rice />} />
//         <Route path="/fruits" element={<Fruits />} />
//         <Route path="/vegetables" element={<Vegetables />} />
//         <Route path="/bakery" element={<Bakery />} />
//         <Route path="/frozen-foods" element={<FrozenFoods />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/place-order" element={<PlaceOrder />} />
//         <Route path="/order-success" element={<OrderSuccess />} />
//         <Route path="/shop-by-category" element={<ShopByCategory />} />
//         <Route path="/order-tracking" element={<OrderTracking />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="/wishlist" element={<Wishlist />} />
        
//         {/* Auth Routes */}
//         <Route path="/login" element={<SignIn />} />
//         <Route path="/signup" element={<Signup />} />
        
//         {/* Admin Route */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
        
//         {/* Catch-all route for 404 pages */}
//         <Route path="*" element={<div>Page Not Found</div>} />
//       </Routes>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <WishlistProvider>
//       <CartProvider>
//         <Router>
//           <AppContent />
//           <ToastContainer position="top-right" autoClose={2000} />
//         </Router>
//       </CartProvider>
//     </WishlistProvider>
//   );
// }
