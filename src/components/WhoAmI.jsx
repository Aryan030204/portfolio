import React from "react";

const WhoAmI = () => {
  return (
    <section className="flex flex-col gap-6 sm:gap-8 justify-start text-white w-full max-w-[30rem] px-4 sm:px-0">
      <h1 className="text-5xl lg:text-6xl font-bold md:text-4xl">
        <span className="underline underline-offset-4">Wh</span>o am I ?
      </h1>

      <article className="flex flex-col gap-4 sm:gap-6">
        <h2 className="text-xl sm:text-lg md:text-3xl">
          A Web Designer & Developer <br className="lg:hidden" /> from India.
        </h2>
        <p className="text-base sm:text-lg md:text-2xl">
          I'm a passionate MERN stack developer with real-world experience building responsive, user-friendly web apps.
        </p>
      </article>
    </section>
  );
};

export default WhoAmI;
