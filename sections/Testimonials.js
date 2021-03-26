import Image from "next/image";

function Testimonials() {
  return (
    <div className="mx-auto pb-10 flex flex-col items-center bg-blueBall bg-no-repeat bg-right-bottom">
      <h1 className="text-black text-center p-12 text-4xl">Testimonials</h1>

      <Image src="/ibm.png" width={98} height={75} />
      <div className="bg-stain bg-no-repeat flex flex-col items-center">
        <div className="lg:w-2/4 pb-24">
          <p className="p-12 text-center text-secondText text-2xl">
            Being a freelancer is a rollercoaster of emotions. We built Slate to
            keep your freelance business less stressful. We'd love to show you
            what we're building...
          </p>
        </div>
        <button className="m-auto py-2 px-16 mt-12 bg-primary text-white border border-primary rounded-full">
          All testimonials
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
