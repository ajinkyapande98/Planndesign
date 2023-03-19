import { Routes, Route } from "react-router-dom";

import DrawingGrid from "./Components/DrawingGrid";
import HomePage from "./Pages/HomePage";

const AppRoutes = () => {
  //   const { slug } = useParams();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/drawing/:slug" element={<DrawingGrid />} />
    </Routes>
  );
};

export default AppRoutes;
