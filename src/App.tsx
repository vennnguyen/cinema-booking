import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/client/Home";
import BookTicket from "./pages/client/Book-ticket";


function App() {
  
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          {/* public route */}
          <Route path="/" element={<Home />} />
          <Route path="/dat-ve" element={<BookTicket />} />
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
