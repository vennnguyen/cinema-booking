import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/client/Home";
import BookTicket from "./pages/client/BookTicket";
import Booking from "./pages/client/Booking";
import IsShowing from "./pages/client/IsShowing";


function App() {
  
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          {/* public route */}
          <Route path="/" element={<Home />} />
          <Route path="/xuat-chieu/:slug" element={<BookTicket />} />
          <Route path="/dat-ve/:slug" element={<Booking />} />
          <Route path="/phim-dang-chieu" element={<IsShowing />} />
          {/* protected route */}
          {/* <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/admin" element={<Dashboard />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
