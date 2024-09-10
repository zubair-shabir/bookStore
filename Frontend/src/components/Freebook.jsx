import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const Freebook = () => {
  const FreeBooks = list.filter((book) => book.category === "free");
  console.log(FreeBooks);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h2 className="font-semibold text-xl pb-2">Free Offered Courses</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            maxime velit enim eos, hic minima quaerat officiis, perspiciatis
            placeat tempora quam corrupti autem! Ab dolorem quia iusto sint
            consequatur quis. Nihil, eaque, cupiditate excepturi libero enim
            inventore vero assumenda eligendi sit veniam, maxime dolorem quos
            tempore eum iste. Minima, voluptatem?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {FreeBooks.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
