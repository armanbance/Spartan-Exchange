import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center">
      {/* Main container */}
      <div className="w-full h-full  p-8">
        {/* Heading */}
        <h2 className="text-6xl font-extrabold text-white mb-6 text-center">
          Spartan Fitness 
        </h2>
        <p className="text-3xl text-gray-300 mb-8 text-center">
          Your all-in-one fitness platform for San Jose State students and local residents.
        </p>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg h-96 flex flex-col justify-between">
            <h3 className="text-3xl font-bold text-black mb-4">Real-Time Gym Crowdedness</h3>
            <p className="text-gray-700 text-xl">
              Know how busy the gym is before you head over. Get live updates on crowdedness and plan your workouts with ease.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg h-96 flex flex-col justify-between">
            <h3 className="text-3xl font-bold text-black mb-4">Personalized Fitness Plans</h3>
            <p className="text-gray-700 text-xl">
              Create your own fitness plan tailored to your goals. Track progress, add workouts, and hit every muscle group.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg h-96 flex flex-col justify-between">
            <h3 className="text-3xl font-bold text-black mb-4">Track Your Workouts</h3>
            <p className="text-gray-700 text-xl">
              Log your workouts and monitor your fitness journey. Whether it's leg day or cardio, keep yourself on track.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <Link 
            to="/training" 
            className="text-lg font-semibold text-white bg-green-500 hover:bg-green-600 py-3 px-6 rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
