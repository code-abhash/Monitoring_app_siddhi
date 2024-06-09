// src/App.jsx
import React from 'react';
import Header from './Header';
import PatientInfo from './PatientInfo';
import Sidebar from './Sidebar';
import Navbar from '../Home/Navbar';

const Patients = () => {
  return (
    <div>
        <Navbar/>
        <Header />
      <div className="flex flex-row justify-between h-screen w-full bg-gradient-to-r from-green-400 to-slate-100">
        <PatientInfo />
        <Sidebar />
      </div>
      {/* Add other components as needed */}
    </div>
  );
};

export default Patients;
