import React from "react";
import backgroundImage from "../backgroundImage.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={backgroundImage}
        alt='Background'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name'>
          Hello World
        </h1>
      </section>
    </main>
  );
}
