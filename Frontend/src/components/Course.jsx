import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

import { Link } from "react-router-dom";

const Course = () => {
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div className="pt-28 items-center justify-center text-center ">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here !:</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat
            beatae minus laudantium mollitia quam odio esse fugit sequi, veniam
            animi at sunt ducimus rem deleniti minima eius vero nam natus
            cupiditate est magnam labore neque quibusdam! Quasi autem possimus
            doloribus. Nisi enim earum, ex officiis hic temporibus esse iusto
            deleniti aut est deserunt eius id ipsum. Inventore, corrupti
            voluptas sed nesciunt distinctio beatae provident aperiam
            repudiandae voluptatem dolores in qui dicta id officia nulla omnis
            delectus aliquam quam accusamus sapiente asperiores possimus libero
            fugiat ratione? Commodi, cum iusto? Et tempora velit, quo error
            quibusdam assumenda laudantium soluta quasi commodi.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
