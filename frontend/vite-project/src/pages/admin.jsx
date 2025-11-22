import React from "react";

import Navbar from '../components/navbar';
import Search from "../components/search";
import Calendary from '../components/calendary'


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F1F5FB] text-gray-800">
       <Navbar/> 
      {/* Body */}
      <div className="p-6 max-w-[1500px] mx-auto">
        <Search/>
        <Calendary/>
      </div>
    </div>
  );
}
