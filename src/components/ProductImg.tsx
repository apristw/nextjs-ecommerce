"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 0,
    url: "https://images.pexels.com/photos/11273449/pexels-photo-11273449.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 1,
    url: "https://images.pexels.com/photos/28885888/pexels-photo-28885888/free-photo-of-buah-ara-segar-yang-dibelah-dua-di-piring-putih-berbaring-datar.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/28239950/pexels-photo-28239950/free-photo-of-gletser-salju-pemandangan-lanskap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/14663259/pexels-photo-14663259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProductImg = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        {images.map((img, i) => {
          return (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={img.id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={img.url}
                alt=""
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImg;
