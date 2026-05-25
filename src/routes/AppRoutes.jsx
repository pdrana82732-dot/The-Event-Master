import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import ArtistBookingPage from "../pages/ArtistBooking";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="artist-booking" element={<ArtistBookingPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </>
  );
}