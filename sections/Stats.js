import React from "react";
import Clock from "react-live-clock";

function Stats() {
  return (
    <div className="lg:p-24 w-9/12 mx-auto flex flex-col">
      <h1 className="text-black text-center pb-6 text-6xl">
        A rethink of how we work
      </h1>
      <Clock
        className="text-xl text-center pb-4"
        format={"HH:mm:ss"}
        ticking={true}
        timezone={"EU"}
      />
      <p className="text-center text-secondText text-xl pb-6">
        There's even a live clock here. And it's updating continiously!
      </p>

      <div class="relative pt-1 w-2/4 m-auto">
        <div class="overflow-hidden h-6 mb-4 text-xs flex rounded-lg bg-grey">
          <div
            style={{ width: "50%" }}
            class="shadow-none flex flex-col text-center rounded-lg whitespace-nowrap text-white justify-center bg-primary"
          ></div>
        </div>
        <div className="flex">
          <p className="mr-auto">Facebook</p>
          <p className="ml-auto">35,929</p>
        </div>
      </div>

      <button className="m-auto py-2 px-16 mt-12 bg-primary text-white border border-primary rounded-full">
        Get Started
      </button>
    </div>
  );
}

export default Stats;
