"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow top-12 bg-white right-0 flex flex-col gap-6 z-20 ">
      {!cartItems ? (
        <div className="">Cart Is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shoping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/8018588/pexels-photo-8018588.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$21</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty: 1</span>
                  <span className="text-blue-500 cursor-pointer hover:underline">
                    Remove
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/8018588/pexels-photo-8018588.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$21</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty: 1</span>
                  <span className="text-blue-500 cursor-pointer hover:underline">
                    Remove
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$42</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur
            </p>

            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default CartModal;
