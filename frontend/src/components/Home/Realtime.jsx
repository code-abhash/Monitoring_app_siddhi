import React from "react";
import Heart from "./Heart";
import Blood from "./Blood";
import Spo2 from "./Spo2";
import Temp from "./Temp";

const Realtime = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8 lg:grid grid-cols-2 grid-rows-2 h-auto p-5">
        <div className="m-3 w-full lg:w-4/5 h-auto bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-4">Heart Beat (bpm)</h2>
          <Heart />
        </div>
        <div className="m-3 w-full lg:w-4/5 h-auto bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-4">Blood Pressure (mm Hg)</h2>
          <Blood />
        </div>
        <div className="m-3 w-full lg:w-4/5 h-auto bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-4">Spo2 (%)</h2>
          <Spo2 />
        </div>
        <div className="m-3 w-full lg:w-4/5 h-auto bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-4">Temperature (°F)</h2>
          <Temp />
        </div>
      </div>
    </>
  );
};

export default Realtime;
