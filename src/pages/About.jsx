import React from 'react';

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A minus nemo
        eius. Magni nemo eveniet eum quod explicabo harum odit atque omnis,
        quasi porro? Voluptate, ipsam. Praesentium nam, minus labore nostrum
        officia est eius neque alias exercitationem sapiente earum debitis
        incidunt eaque quibusdam a veniam, cumque quo, illum animi maiores?
        Officiis officia quam nobis quia numquam soluta repudiandae quisquam
        reprehenderit!
      </p>
    </>
  );
};

export default About;
