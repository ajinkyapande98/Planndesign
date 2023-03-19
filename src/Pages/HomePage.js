import React, { useEffect, useState } from "react";
import { getAllDrawings } from "../utils/api";
import DrawingPage from "./DrawingPage";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  const [myDrawings, setMyDrawing] = useState([]);
  useEffect(() => {
    const fetchAllDrawing = async () => {
      const drawings = await getAllDrawings();
      setMyDrawing(drawings);
    };
    fetchAllDrawing();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-14">
        <DrawingPage myDrawings={myDrawings} />
      </div>
    </>
  );
};

export default HomePage;
