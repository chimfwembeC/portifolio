import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-gray-800 p-6 w-64 text-center fixed w-64 h-full bg-gray-800 overflow-y-auto">
      {/* Profile Section */}
      <div className="mb-6">
        <img
          src="/profile-pic.png" // replace with your profile picture path
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto"
        />
        <h2 className="mt-4 text-xl font-semibold">Rayan Adrilard</h2>
        <p className="text-yellow-500 font-bold">Front-end Developer</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 my-4">
        <button className="p-2 rounded-full bg-yellow-500 text-white">
          {/* Add FontAwesome or other icons */}
          <i className="fab fa-facebook"></i>
        </button>
        <button className="p-2 rounded-full bg-yellow-500 text-white">
          <i className="fab fa-twitter"></i>
        </button>
        <button className="p-2 rounded-full bg-yellow-500 text-white">
          <i className="fab fa-github"></i>
        </button>
        <button className="p-2 rounded-full bg-yellow-500 text-white">
          <i className="fab fa-linkedin"></i>
        </button>
      </div>

      {/* Personal Info */}
      <div className="text-left mt-4">
        <div className="mb-2">
          <span className="font-semibold">Age:</span> 24
        </div>
        <div className="mb-2">
          <span className="font-semibold">Phone:</span> +123456789
        </div>
        <div className="mb-2">
          <span className="font-semibold">Freelance:</span> <span className="text-green-500">Available</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Location:</span> Dhaka, Bangladesh
        </div>
      </div>

      {/* Languages */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Languages</h3>
        <div className="mb-2">
          <div className="flex justify-between">
            <span>Bengali</span>
            <span>100%</span>
          </div>
          <div className="bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-full"></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between">
            <span>English</span>
            <span>90%</span>
          </div>
          <div className="bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-9/10"></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between">
            <span>Spanish</span>
            <span>60%</span>
          </div>
          <div className="bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-3/5"></div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Skills</h3>
        <div className="mb-2">
          <div className="flex justify-between">
            <span>HTML</span>
            <span>95%</span>
          </div>
          <div className="bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-11/12"></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between">
            <span>CSS</span>
            <span>85%</span>
          </div>
          <div className="bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-4/5"></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between">
            <span>JavaScript</span>
            <span>80%</span>
          </div>
          <div className="bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-4/5"></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between">
            <span>React</span>
            <span>90%</span>
          </div>
          <div className="bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-9/10"></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between">
            <span>WordPress</span>
            <span>65%</span>
          </div>
          <div className="bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Extra Skills */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Extra Skills</h3>
        <ul className="list-disc list-inside text-left">
          <li>Bootstrap, Materialize</li>
          <li>Git, Github, GitLab</li>
          <li>Gulp, Webpack, Grunt</li>
          <li>SEO Knowledge</li>
        </ul>
      </div>

      {/* Button */}
      <div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
          Download CV
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
