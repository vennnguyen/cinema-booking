import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/client/Home";
import BookTicket from "./pages/client/Show-movie";
import Booking from "./pages/client/Booking";


function App() {
  
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          {/* public route */}
          <Route path="/" element={<Home />} />
          <Route path="/xuat-chieu" element={<BookTicket />} />
          <Route path="/dat-ve" element={<Booking />} />
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
