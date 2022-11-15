import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import { enrolled } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const nav = ["UI/UX", "Refer & Earn", "Friends Referred"];

const FriendsRefer = () => {
  
  return (
    <div className="pt-20 md:px-3 px-8 min-h-screen w-full  max-w-5xl mx-auto ">
      <Breadcrumb data={nav} />
      <ReferalCode />
      <div className="mt-14">
        <h1 className="font-bold text-purple text-xl mb-4 ">
          Friends who enrolled
          <span className="text-[#626262] font-normal">(3)</span>
        </h1>
        <div className="hidden md:block">
          <Swiper spaceBetween={2} slidesPerView={2.7} navigation={true}>
            {enrolled.map((item, index) => (
              <SwiperSlide key={index}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:hidden flex flex-col space-y-4 w-full">
          {enrolled.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
      <h1 className="text-purple font-medium my-14 ml-3">Terms & Conditions</h1>
    </div>
  );
};



// skills list
const ReferalCode = () => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-[#800080] mb-2">Your Referral Code </h1>
      <h1 className="flex w-fit tracking-[12px] py-3 pl-3  border-2 border-gray/40 rounded-xl  ">
        EDCH54
      </h1>
    </div>
    <div className="p-3 rounded-xl shadow-lg">
      <h1 className="text-[#800080] mb-2"> Wallet Balance </h1>
      <h1 className="font-medium ">₹ 500</h1>
    </div>
  </div>
);

export default FriendsRefer;
