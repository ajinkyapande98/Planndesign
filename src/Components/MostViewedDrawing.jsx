import React, { useEffect } from "react";
import { getAllDrawings } from "../utils/api";
import { Link } from "react-router-dom";

const MostViewedDrawing = () => {
  const [drawings, setDrawings] = React.useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const data = await getAllDrawings();
      setDrawings(data);
    };
    fetchingData();
  }, []);
  return (
    <>
      {drawings.map((drawings, index) => {
        return (
          <div key={index} className=" bg-white shadow-lg m-1 h-24 w-76">
            <Link to={`/drawing/${drawings.slug}`}>
              <div className="flex h-24">
                <div>
                  <img
                    className="h-24 w-24"
                    src={drawings.image.url}
                    alt={drawings.title}
                  />
                </div>
                <div className=" relative ">
                  <h3 className="absolute w-48 ml-2">{drawings.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default MostViewedDrawing;
