import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { referEarn } from "../data/data";

const nav = ["UI/UX", "Refer & Earn"];

const ReferEarn = () => {
  return (
    <div className="pt-20 min-h-screen w-full px-8 max-w-5xl mx-auto ">
      <Breadcrumb data={nav} />
      <div className="w-full flex justify-between mb-10 md:flex-row flex-col gap-8 ">
        <div className="bg-white p-5 rounded-lg shadow-lg flex justify-center items-center flex-col ">
          <div className="grid md:grid-cols-3 grid-cols-2 w-full gap-x-5 gap-y-5 mb-2 ">
            <div>
              <p className="text-purple">Referral Earning</p>
              <h1 className="text-3xl font-medium">₹ 2,500</h1>
            </div>
            <div>
              <p className="text-purple">Total Referrals</p>
              <h1 className="text-3xl font-medium">7</h1>
            </div>
            <div>
              <p className="text-purple">Wallet Balance</p>
              <h1 className="text-3xl font-medium">₹ 500</h1>
            </div>
            <button className="px-4 py-2 w-full  my-3 rounded-full bg-purple col-start-2 text-white text-sm">
              Withdraw Balance
            </button>
          </div>  
        </div>
        <div className="md:w-4/12  text-purple">
          <h1 className=" font-bold text-xl mb-3">Your Referral Code </h1>
          <div className="w-full bg-gradient-to-r from-orange to-purple p-[1.5px] rounded-lg">
            <div className="font-medium bg-white rounded-[6px] text-center tracking-[20px] py-2">
              <p className="relative translate-x-2">EDCH54</p>
            </div>
          </div>
        </div>
      </div>
      <HDIW />
    </div>
  );
};

const HDIW = () => (
  <>
    <h1 className="font-bold text-xl text-purple mb-4">How does it work ?</h1>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
      {referEarn.map((item) => (
        <div className="grid grid-cols-7 grid-flow-col">
          <div className=" bg-gray/10 h-10 w-10 rounded-full flex justify-center items-center">
            <img src={item.image} className="h-6 w-6" alt="" />
          </div>
          <div className="text-sm col-span-6">
            <h1 className="font-medium">{item.heading}</h1>
            <p className="text-gray">{item.para}</p>
          </div>
        </div>
      ))}
    </div>
    <h1 className="text-purple font-medium mt-14 ml-3">Friends Who Enrolled</h1>
    <h1 className="text-purple font-medium my-4 ml-3 mb-20">
      Terms & Conditions
    </h1>
  </>
);

export default ReferEarn;
