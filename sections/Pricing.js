import React from "react";

function Pricing() {
  return (
    <div className="m-auto p-10 flex flex-col items-center lg:flex-row bg-darkbackground">
      <div className="lg:w-1/2 lg:p-24 lg:ml-72">
        <h1 className="text-white text-center lg:text-left pb-6 text-6xl">
          Pricing
        </h1>
        <div className="w-80">
          <p className="text-white text-center lg:text-left">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:lg:w-1/2 p-12 lg:p-24 lg:mr-72">
        <p className="text-white mb-4 text-center  lg:text-left">
          30-DAY FREE TRIAL
        </p>

        <div className="m-auto lg:m-0 w-1/2 lg:w-auto flex mb-4">
          <h1 className="text-yellOrange m-auto lg:m-0 text-center lg:text-left text-6xl">
            $5
          </h1>
          <div className="w-24">
            <p className="text-white p-2 ">/month per user</p>
          </div>
        </div>

        <p className="text-white text-center lg:text-left">
          Most calendars are designed for teams.{" "}
        </p>

        <button className="m-auto py-2 px-16 mt-6 bg-primary text-white border border-primary rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Pricing;
