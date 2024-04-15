import React from "react";

const GalleryComponent = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-evenly items-center">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-3 h-[500px] w-[380px] mb-8">
          <img src={item.picture} alt={`Contestant ${index + 1}`} className="w-full h-full  border-white border rounded-xl" />
          <a href={item.button} target="_blank" rel="noopener noreferrer">
            <button className="text-white border-white border rounded-xl px-6 py-3">Vote</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default GalleryComponent;
