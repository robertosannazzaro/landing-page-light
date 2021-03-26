import Image from "next/image";

function SplashScreen() {
  return (
    <section className="pb-12 bg-circleBlue bg-no-repeat">
      <div className="mx-auto p-12 sm:mt-24 ">
        <h1 className="text-center text-4xl sm:text-8xl text-secondary font-bold">
          Lightning fast prototyping
        </h1>
        <p className="text-center text-2xl pt-12 text-secondText">
          Most calendars are designed for teams. Slate is designed for
          freelancers.
        </p>

        <div className="flex sm:w-2/4 mx-auto mt-12 sm:mt-24 items-center">
          <button className="ml-auto py-4 px-6 sm:px-12 mx-6 text-sm sm:text-xl bg-primary text-white border border-primary rounded-full">
            Get Started
          </button>
          <button className="mr-auto bg-white py-4 px-6 sm:px-12 mx-6 text-sm sm:text-xl text-black border border-white rounded-full">
            Try For Free
          </button>
        </div>
      </div>
      <div className="w-full mx-auto p-12 bg-right flex justify-center bg-circleYellow bg-no-repeat">
        <Image src={"/screen.svg"} height={770} width={1119} />
      </div>
    </section>
  );
}

export default SplashScreen;
