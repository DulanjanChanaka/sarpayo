

import { useState, useEffect } from "react";
import React from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

import { db } from "../../firebase/firebase";
import snakedata from "../../SnakeData/Data"


function SearchContent() {

  

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedBodyShape, setSelectedBodyShape] = useState("");

  
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    console.log(selectedColor);
  };

  const handleBodyShapeChange = (event) => {
    setSelectedBodyShape(event.target.value);
    console.log(selectedBodyShape)
  };


  

  const filteredSnakes = snakedata.filter((snakedata) => {
    if (selectedColor && snakedata.bodycolor !== selectedColor) {
      console.log("Color filter:", selectedColor, snakedata.bodycolor);
      return false;
    }
    if (selectedBodyShape && snakedata.style !== selectedBodyShape) {
      
      return false;
    }
    return true;
  });

  return (
    <div className="px-2">
      <h1 className="text-center bg-lime-700 py-3 font-bold lg:text-xl text-lg rounded-2xl text-white mb-5">Snakes Search</h1>
      <div className="flex flex-row mb-5">
        <label style={{ backgroundColor: "green", padding: "4px", borderRadius: "10px", marginRight: "10px" }}>
          <h2 className="text-center text-white font-semibold ">Color</h2>
          <select value={selectedColor} onChange={handleColorChange} style={{ cursor: "pointer", borderRadius: "25px" }}>
            <option value="">Any</option>
            <option value="11">brown</option>
            <option value="12">Black</option>
            <option value="13">Green</option>
            <option value="14">Brown / yellow</option>
            <option value="15">Red</option>
            <option value="16">Ash</option>
            <option value="17">Orange</option>
            <option value="18">Light Brown</option>
            {/* add more color options here */}
          </select>
        </label>
        <label style={{ backgroundColor: "green", padding: "4px", borderRadius: "10px", marginRight: "10px" }}>
          <h2 className="text-center text-white font-semibold ">Shape</h2>
          <select value={selectedBodyShape} onChange={handleBodyShapeChange} style={{ cursor: "pointer", borderRadius: "25px" }}>
            <option value="">Any</option>
            <option value="1">වයිරම් </option>
            <option value="2">හරස් ඉරි (වළලු )</option>
            <option value="3">නැත </option>
            <option value="4">පුල්ලි </option>
            <option value="5">පැතිරුණු රටා </option>
            <option value="6">වර්ණවත් හරස් ඉරි (වළලු) </option>
            <option value="7">හරස් ඉරි (මුදු ) </option>
            <option value="8">හරස් ඉරි </option>
            {/* add more body shape options here */}
          </select>
        </label>
      </div>
      <div className="grid lg:grid-cols-4 gap-5  " >
        {filteredSnakes.map((snakedata, index) => (
          <div
            key={index}
            className="bg-lime-700 rounded-2xl"
          >
            <img src={snakedata.photo} alt={snakedata.name} className="w-full h-[300px] rounded-2xl"/>
            <h2 className="text-center text-white py-3">{snakedata.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchContent;

