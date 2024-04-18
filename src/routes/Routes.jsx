import { Routes, Route } from "react-router-dom";
import { Mainpage } from "../pages/mainpage/mainpage";
import {Gallery} from '../pages/gallery/gallery'
import {GalleryFotoGold} from '../pages/gallery-foto-gold/GalleryFotoGold'
import {NotFound} from '../pages/NotFound/NotFound'

 export const AppRoutes = () => {
   return (
     <Routes>
       <Route path="/" element={<Mainpage />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/gallery-foto-gold" element={<GalleryFotoGold />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
   );
 };