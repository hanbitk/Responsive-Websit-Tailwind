import React from 'react';
import Laptop from '../assests/laptop.jpg';

function Analytics() {
  return (
    <div className="w-full bg-white px-4 py-16">
      {/* Container */}
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
        {/* md: Left Side of the Grid */}
        <img
          className="mx-auto my-4 w-[500px]"
          src={Laptop}
          alt="Laptop image with data analytics"
        />

        {/* md: Right Side of the Grid */}
        <div className="flex flex-col justify-center">
          <p className="font-bold uppercase text-[#00df9a]">Data Analytics Dashboard</p>
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, vero deserunt?
            Soluta libero ad temporibus velit quas. Nostrum distinctio nemo debitis quis
            quia amet sapiente deleniti? Itaque officia omnis repellat.
          </p>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-black py-3 font-medium text-[#00df9a] md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
