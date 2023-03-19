import React, { useEffect, useState } from "react";

import { getDrawingBySlug } from "../utils/api";
import { useParams } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MostViewedDrawing from "./MostViewedDrawing";

function DrawingGrid() {
  const { slug } = useParams();
  const [drawing, setDrawing] = useState(null);
  useEffect(() => {
    const fetchDataBySlug = async () => {
      const drawingData = await getDrawingBySlug(slug);
      setDrawing(drawingData);
    };
    fetchDataBySlug();
  }, [slug]);
  if (!drawing) {
    return <div>Loading...</div>;
  }
  // console.log(drawing.drawing_categories[0].description);
  return (
    <div className=" h-full w-full">
      <div className="container mx-auto mt-8 ">
        <div className="flex">
          <div className="lg:w-3/4 lg:pr-8">
            <h1 className="text-4xl font-bold">{drawing.title}</h1>
            <div className="mt-4 mb-8 ">
              <img
                src={drawing.image.url}
                alt={drawing.image.name}
                className="h-132 w-full object-cover"
              />
            </div>
            <div>
              <p className=" z-20">
                {drawing.drawing_categories[0].description}
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 relative top-12  hidden lg:block">
            <p className=" z-20">{drawing.drawing_categories[0].description}</p>
            <div className=" hidden lg:block">
              <h1 className=" text-3xl font-bold my-5">Most viewed drawings</h1>
              <div className="h-96 overflow-scroll w-88 scroll-smooth scrollbar-hidden">
                <MostViewedDrawing />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 mt-5 mx-12"></div>
      <h1 className="ml-8 text-3xl font-medium my-8">Relevant Drawings</h1>
      <HomePage />
    </div>
  );
}

export default DrawingGrid;
