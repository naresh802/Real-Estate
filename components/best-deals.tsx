"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/wrapper/sectionWrapper";
import { FiHome, FiChevronRight } from "react-icons/fi";

/* ---------------- DATA ---------------- */

const dealsData = [
  {
    id: "tenants",
    label: "For tenants",
    title: "We make it easy for tenants, landlords & Vendors",
    description:
      "Whether it’s selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you’ll save a bunch of money and time with our services.",
    image: "/details-img.png",
    link: "/services",
  },
  {
    id: "landlords",
    label: "For Landlords",
    title: "",
    description:
      "",
    image: "/details-img.png",
    link: "/landlords",
  },
  {
    id: "vendors",
    label: "For Vendors",
    title: "",
    description:
      "",
    image: "/details-img.png",
    link: "/vendors",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function BestDeals() {
  const [activeTab, setActiveTab] = useState(dealsData[0].id);

  const activeData = dealsData.find((item) => item.id === activeTab)!;

  return (
    <SectionWrapper className="bg-[#fbf9f9]">
      <div className=" flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT SIDE IMAGE */}
        <div className="flex-1 w-full relative">

          <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] w-full shadow-lg">
            <Image
              src={activeData.image}
              alt={activeData.label}
              fill
              className="object-cover bg-[#d3d3e3] transition-all duration-500"
              priority
            />
          </div>

          {/* Floating Card */}
          <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex items-center justify-between gap-6 border border-gray-100 max-w-[440px] md:min-w-[380px] z-20">

            <div>
              <h3 className="font-bold text-[#181a20] text-[16px] md:text-[18px] leading-tight mb-1">
                Find the best deal
              </h3>

              <p className="text-gray-500 text-xs md:text-sm">
                Browse thousands of properties
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-[#862D27] flex items-center justify-center text-white shadow-md">
              <FiHome className="text-xl" />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1 w-full flex flex-col justify-center mt-6 lg:mt-0">

          {/* TABS */}
          <div className="inline-flex self-start bg-[#f9eaea] p-1.5 rounded-2xl mb-8">
            {dealsData.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3.5 rounded-xl transition-all duration-300 font-bold ${
                    isActive
                      ? "bg-white text-[#862D27] shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TITLE */}
          <h2 className="text-[#181a20] mb-6 tracking-tight text-3xl md:text-4xl font-semibold leading-tight transition-all duration-300">
            {activeData.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] leading-[160%] text-gray-500 mb-10 max-w-[520px] transition-all duration-300">
            {activeData.description}
          </p>

          {/* BUTTON */}
          <div className="self-start">
            <Button
              variant="deal"
              size="xl"
              asChild
              className=" flex items-center gap-2 group cursor-pointer"
            >
              <Link href={activeData.link}>
                <span>See more</span>
                <FiChevronRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}