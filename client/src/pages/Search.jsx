import React from "react";

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:{" "}
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5"></input>
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5"></input>
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5"></input>
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type:Amenities</label>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5"></input>
              <span>parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5"></input>
              <span>Furnished</span>
            </div>
          </div>
          <div>
            <div className="flex gap-2 flex-wrap items-center">
              <label className="font-semibold">Sort:</label>
              <select id="sort_order" className="border rounded-lg p-3">
                <option>Price high to low</option>
                <option>Price low to high</option>
                <option>Lastest</option>
                <option>Oldest</option>
              </select>
            </div>
            <button
              className="bg-slate-700 text-white p-3
            rounded-lg uppercase hover:opacity-95"
            ></button>
          </div>
        </form>
      </div>
      <div className="">
        <h1
          className="text-3xl font-semibold border-b
      text-slate-700 mt-5"
        >
          Listing results:
        </h1>
      </div>
    </div>
  );
}
