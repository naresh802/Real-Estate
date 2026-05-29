"use client";

import Image from "next/image";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export interface PropertyCardProps {
  image: string;
  price: string;
  period: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  area: string;
  isPopular?: boolean;
}

export default function PropertyCard({
  image,
  price,
  period,
  title,
  address,
  beds,
  baths,
  area,
  isPopular = false,
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
      {/* Image Section */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Popular Tag */}
        {isPopular && (
          <div className="absolute left-0 bottom-4 bg-[#7a5af8] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-r-lg flex items-center gap-1.5 shadow-md">
            <FaStar className="w-3.5 h-3.5" />
            Popular
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Price & Favorite Button */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline">
              <span className="text-[24px] font-bold text-[#862D27]">
                {price}
              </span>
              <span className="text-gray-400 text-sm ml-1">/{period}</span>
            </div>

            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all ${
                isLiked
                  ? "bg-[#e8fbf9] border-[#c1f5f0] text-[#13b1a2]"
                  : "bg-white text-gray-400 hover:text-red-500 hover:border-red-100"
              }`}
              aria-label="Add to favorites"
            >
              <FiHeart
                className={`text-lg transition-transform active:scale-95 ${
                  isLiked ? "fill-[#13b1a2] text-[#13b1a2]" : ""
                }`}
              />
            </button>
          </div>

          {/* Title */}
          <h3 className="card-title text-[#181a20] mb-2 hover:text-[#862D27] transition-colors cursor-pointer">
            {title}
          </h3>

          {/* Address */}
          <p className="card-desc text-gray-400 mb-6 line-clamp-1">{address}</p>
        </div>

        {/* Specs Footer */}
        <div className="border-t border-gray-100 pt-4 flex items-center justify-between gap-2 text-xs md:text-sm text-gray-500">
          {/* Beds */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#8e95a5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
            <span>{beds} Beds</span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#8e95a5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3.545V2.25h-6.75v1.295M9 7.364V21M3.75 12h3.75" />
            </svg>
            <span>{baths} Bathrooms</span>
          </div>

          {/* Area */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#8e95a5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75zM9 9h6v6H9V9z" />
            </svg>
            <span>{area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
