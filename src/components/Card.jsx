import React from "react";

const Card = ({ item }) => {
  return (
    <div className="sm:w-[358px] w-full h-[228px] bg-gradient-to-r from-orange to-purple rounded-xl p-5 text-white flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center     ">
          <h1 className="font-extrabold mb-1">{item.name}</h1>
          <p className="text-sm">{item.date}</p>
        </div>
        <p className="mb-2">
          Courses enrolled <span>({item.no_course})</span>
        </p>
        <div className="flex flex-wrap gap-2 ">
          {item.skills.map((skill) => (
            <Pill key={skill} item={skill} />
          ))}
        </div>
      </div>
      <div className="flex justify-start items-center">
        <h1 className="mr-3">Referral Amount</h1>
        <p className="font-bold text-xl">₹{item.referral_amount}</p>
      </div>
    </div>
    
  );
};

const Pill = ({ item }) => (
  <div className="px-2 border border-white/70 text-white w-fit rounded-full ">
    <p>{item}</p>
  </div>
);

export default Card;
