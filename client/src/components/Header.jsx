import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="./">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-lime-700">Sahand</span>
            <span className="text-lime-600">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent foucs:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="font-bold hidden sm:inline text-lime-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="font-bold hidden sm:inline text-lime-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 
          object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-lime-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
