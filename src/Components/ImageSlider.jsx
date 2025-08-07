import React, { useEffect, useState } from 'react'
import { assets, imageSliderDetails } from '../assets/assets';

const ImageSlider = ({ ImageSliderDetails, delay = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const length = imageSliderDetails.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev == length - 1 ? 0 : prev + 1));
    }, delay)
    return () => clearInterval(interval);
  }, [length, delay])
  return (
    <div className="container max-w-full  h-[500px] relative  flex items-center justify-center mt-2  overflow-hidden">
      {
        imageSliderDetails.map((product, index) => (
          <div
            key={index}
            className={`absolute    md:h-[400px] h-[500px] m-7 rounded-4xl flex items-center md:flex-row gap-10 flex-col-reverse md:justify-between px-52 py-8 transition-opacity duration-700 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              } bg-gray-200`}
          >
            {/* Left content */}
            <div className="flex flex-col max-w-md space-y-4 items-start">
              <p className="text-orange-500 font-semibold">{product.offer}</p>
              <h1 className="text-3xl font-bold">{product.tagline}</h1>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full">
                  {product.btntxt1}
                </button>
                <button className="text-orange-500 font-semibold flex items-center gap-1">
                  {product.btntxt2} <span>→</span>
                </button>
              </div>
            </div>

            {/* Right image */}
            <div>
              <img
                src={product.image}
                alt=""
                className="md:w-80 drop-shadow-2xl md:h-80 h-50 w-50 object-contain"
              />
            </div>
          </div>
        ))
      }
    </div>


  )
}

export default ImageSlider
