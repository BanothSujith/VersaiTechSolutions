import React, { useState } from "react";

const Filters = [
  {
    id: 1,
    name: "Popularity",
  },
  {
    id: 2,
    name: "Price Low To High",
  },
  {
    id: 3,
    name: "Price High To Low",
  },
  {
    id: 4,
    name: "What’s New?",
  },
  {
    id: 5,
    name: "Rating",
  },
  {
    id: 6,
    name: "Discount High To Low",
  },
  {
    id: 7,
    name: "Fastest Delivery Time",
  },
];

function Filter() {
    const [filters,setFilters] = useState([]);
console.log(filters)
  return (
    <div className="fixed bottom-0 w-full p-6 bg-[#fff] rounded-t-[1.25rem] flex flex-col justify-center items-center">
      <span className="text-center  text-xl font-bold leading-7">Filter</span>
      <div className="w-full flex flex-col gap-4">
        {Filters.map((filter) => (
          <div key={filter.id} className="flex items-center justify-between w-full gap-12"  onClick={() =>
            setFilters((prev) =>
              prev.includes(filter.name)
                ? prev.filter((item) => item !== filter.name)
                : [...prev, filter.name]
            )
          }>
            <span className="font-medium leading-6">{filter.name}</span>
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                filters.includes(filter.name) ? "border-[#820F11]" : ""
              }`}
            >
              {filters.includes(filter.name) ? (
                <span className="text-xs text-[#820f11]">✓</span>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
