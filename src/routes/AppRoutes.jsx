import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop"; // ← ADD THIS
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import ArtistBookingPage from "../pages/ArtistBooking";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />  {/* ← ADD THIS */}
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />

          {/* Artist Booking Page */}
          <Route path="artist-booking" element={<ArtistBookingPage />} />

        </Route>
      </Routes>
    </>
  );
}