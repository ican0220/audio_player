"use client";
import React from "react";

interface FilterListProps {
  filterList: any
}

const FilterList: React.FC<FilterListProps> = ({ filterList }) => {
  
  return (
    <div>
        <div className="flex flex-wrap gap-10">
          {filterList?.map((_: any, index: any) => (
            <div key={index} className="bg-blue-800 px-[20px] rounded-[10px]">{_}</div>
          ))}
        </div>
    </div>
  );
};

export default FilterList;
