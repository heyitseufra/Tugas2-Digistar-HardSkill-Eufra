import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-pink-900 bg-pink-100 p-4">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <div className="rounded-full overflow-hidden mb-4 border-4 border-pink-900 w-40 h-40">
            <img
              src="/images/eufra photo.jpeg"
              alt="Brigitta Mery Rosarie Eufra Nilapaksi"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold">Brigitta Mery Rosarie Eufra Nilapaksi</h1>
        <p className="my-4 text-lg text-pink-700">
          Dive into my world. Discover my journey and let’s connect!
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl text-center mb-6">
  <p className="text-sm font-medium text-pink-400">
    Committed Informatics Engineering Student at University of Brawijaya with a solid background in data analysis 
    and problem-solving. Skilled in Python, SQL, and Power BI, with a keen interest in statistical analysis and data 
    science. Eager to contribute enthusiasm, adaptability, and a fresh perspective to a dynamic team. Actively involved 
    in diverse academic and extracurricular activities, dedicated to personal growth, integrity, and expanding 
    professional connections.
  </p>
</div>


      <div className="mt-6 space-y-2 text-pink-600 flex flex-col items-center">
        <Link to="mailto:brigittaeufra66@gmail.com" target="_blank" className="hover:underline">
          Email: brigittaeufra66@gmail.com
        </Link>
        <Link
          to="https://www.linkedin.com/in/brigitta-eufra/"
          target="_blank"
          className="hover:underline"
        >
          Linkedin: linkedin.com/in/brigitta-eufra
        </Link>
      </div>
    </div>
  );
};

export default Home;
