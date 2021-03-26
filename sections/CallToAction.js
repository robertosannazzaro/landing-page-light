import React from "react";

function CallToAction() {
  return (
    <div className="sm:p-24 w-9/12 mx-auto flex flex-col content-between">
      <h1 className="text-center p-4 text-yellOrange text-2xl">Just type</h1>
      <h1 className="text-black text-center pb-6 text-6xl">
        Fastest way to navigate
      </h1>
      <p className="text-center text-secondText text-2xl">
        Most calendars are designed for teams. Slate is designed for
        freelancers.
      </p>
      <div className="flex mx-auto mt-12 items-center">
        <button className="ml-auto py-4 px-6 sm:px-12 mx-6 text-sm sm:text-xl bg-primary text-white border border-primary rounded-full">
          Get Started
        </button>
        <button className="mr-auto bg-white py-4 px-6 sm:px-12 mx-6 text-sm sm:text-xl text-black border border-primary rounded-full">
          Try For Free
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
