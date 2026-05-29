"use client";

import Image from "next/image";
import SectionWrapper from "@/components/wrapper/sectionWrapper";
import { FiMapPin, FiChevronDown, FiSearch } from "react-icons/fi";

/* ---------------- TAILWIND STYLES ---------------- */

const styles = {
  tabText:
    "font-lufga font-medium text-[14px] leading-[36px] tracking-[0.2em] uppercase",

  labelText:
    "font-dmsans font-semibold text-[18px] leading-[36px]",

  placeholderText:
    "font-lufga font-normal text-[16px] leading-[36px]",

  activeTab:
    "bg-white text-[#181a20]",

  inactiveTab:
    "text-[#8e95a5] hover:text-[#181a20]",

  searchBox:
    "bg-white/95 backdrop-blur-md rounded-r-2xl rounded-bl-2xl shadow-2xl border border-white/40 p-5 flex flex-col md:flex-row items-center gap-5",
};


const tabs = ["Rent", "Buy", "Sell", "Landlords"];

const searchFields = [
  {
    label: "Location",
    placeholder: "Select Your City",
    icon: FiMapPin,
  },
  {
    label: "Property Type",
    placeholder: "Choose Property Type",
    icon: FiChevronDown,
  },
  {
    label: "Price Range",
    placeholder: "Choose Price Range",
    icon: FiSearch,
    isButton: true,
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Hero() {
  return (
    <SectionWrapper className="bg-white">
      <div className="relative overflow-hidden rounded-[48px] bg-[#ecf1f8] min-h-[680px] lg:h-[90vh]">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero-img1.png"
            alt="House"
            fill
            priority
            className="object-contain object-bottom-right scale-[1.02]"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full px-8 py-14 md:px-14 lg:px-20 lg:pt-24 lg:pb-20 flex flex-col justify-between">

          {/* TEXT */}
          <div className="max-w-[620px]">
            <h1 className="h1 text-[#181a20] leading-[1.05] tracking-tight mb-6">
              Easy way to find a
              <br />
              perfect property
            </h1>

            <p className="sub-desc text-[#5c6470] max-w-[500px] py-8">
              We provide a complete service for the sale,
              purchase or rental of real estate.
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative z-30 w-full max-w-[900px]">

            {/* Tabs */}
            <div className="flex items-center gap-1 mb-[-1px] overflow-x-auto">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`${styles.tabText} px-6 py-3 rounded-t-xl transition ${
                    i === 0 ? styles.activeTab : styles.inactiveTab
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Box */}
         <div className={styles.searchBox}>

  {searchFields.map((field) => {
    const Icon = field.icon;

    return (
      <div
        key={field.label}
        className="flex-1 w-full md:border-r md:border-gray-100 md:pr-5 last:border-none flex items-center justify-between"
      >
        <div>
          <span className={`${styles.labelText} text-[#181a20] mb-1 block`}>
            {field.label}
          </span>

          <span className={`${styles.placeholderText} text-[#8e95a5]`}>
            {field.placeholder}
          </span>
        </div>

        {/* Right side icon or button */}
        {field.isButton ? (
          <button className="bg-[#7d241e] hover:bg-[#631c17] text-white p-3.5 rounded-xl shadow-md flex items-center justify-center">
            <Icon className="text-lg" />
          </button>
        ) : (
          <Icon className="text-[#8e95a5] text-lg" />
        )}
      </div>
    );
  })}

</div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}