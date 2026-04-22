import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/client/Home";
import BookTicket from "./pages/client/BookTicket";
import Booking from "./pages/client/Booking";
import IsShowing from "./pages/client/IsShowing";
import { Toaster } from "sonner";

import AuthInitializer from "./layouts/AuthInitializer";
import Dashboard from "./pages/admin/dashboard";
import MainlayoutAdmin from "./layouts/admin/MainlayoutAdmin";
import Movie from "./pages/admin/movie";
import Payment from "./pages/admin/payment";
import User from "./pages/admin/user";
import Seat from "./pages/admin/seat";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <AuthInitializer> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/xuat-chieu/:slug" element={<BookTicket />} />
            {/* <Route element={<ProtectedRoute />}>
              <Route path="/dat-ve/:slug" element={<Booking />} />
            </Route> */}
            <Route path="/dat-ve/:slug" element={<Booking />} />
            <Route path="/phim-dang-chieu" element={<IsShowing />} />
            {/* admin */}
            <Route element={<MainlayoutAdmin/>}>
              <Route path="/admin" element={<Dashboard />} />
               <Route path="/admin/movies" element={<Movie />} />
                <Route path="/admin/payments" element={<Payment />} />
                 <Route path="/admin/users" element={<User />} />
                  <Route path="/admin/seats" element={<Seat />} />
            </Route>
          </Routes>
        </AuthInitializer>
      </BrowserRouter>
    </>
  );
}

export default App;
