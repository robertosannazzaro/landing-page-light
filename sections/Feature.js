import Image from "next/image";

function Feature() {
  return (
    <div className="w-full flex flex-col bg-featureBlue bg-right bg-no-repeat">
      <div className="sm:flex flex-row-reverse sm:flex-row">
        <div className="p-12 sm:p-24 flex flex-col place-items-start sm:w-2/4">
          <h1 className="text-black text-left pb-6 text-4xl sm:text-6xl">
            OpenType features{" "}
          </h1>
          <p className="text-secondText text-center sm:text-left text-xl sm:text-2xl sm:pb-6">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
          <button className="text-primary m-auto sm:m-0 text-center sm:text-left">
            Learn More
          </button>
        </div>
        <Image src="/laptop.png" width={516} height={351} />
      </div>

      <div className="sm:flex sm:flex-row p-12 sm:p-24 bg-left bg-featureYellow bg-no-repeat">
        <Image src="/code.png" width={516} height={351} />
        <div className="p-12 sm:p-24 flex flex-col place-items-start sm:w-2/4">
          <h1 className="text-black text-center sm:text-left pb-6 text-6xl">
            OpenType features{" "}
          </h1>
          <p className="text-secondText text-xl text-center sm:text-left sm:text-2xl sm:pb-6">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
          <button className="text-primary m-auto sm:m-0 text-center sm:text-left text-xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
