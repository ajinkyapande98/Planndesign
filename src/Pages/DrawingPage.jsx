import React from "react";
import { Link } from "react-router-dom";

const DrawingPage = (props) => {
  const { myDrawings } = props;
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {myDrawings.map((drawing, ind) => (
        <div className="border-2 h-108 w-100  " key={drawing.id}>
          {/* <Link to={`/drawings/${drawing.slug}`}> */}
          <Link to={`/drawing/${drawing.slug}`}>
            <div className=" h-96 flex flex-wrap justify-center ">
              <div className="h-60 w-full">
                <img
                  // style={{ height: "250px", width: "400px" }}
                  className="h-full w-full  "
                  src={drawing.image.url}
                  alt={drawing.image.name}
                />
                {/* {console.log(drawing.image.name)} */}
              </div>
              <div className=" p-5 ">
                <h5 className=" text-2xl font-semibold mb-4 ">
                  {drawing.title}
                </h5>
                <p className="card-text text-gray-700 ">{drawing.summary}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DrawingPage;
