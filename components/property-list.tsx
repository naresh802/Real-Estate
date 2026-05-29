"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SectionWrapper from "@/components/wrapper/sectionWrapper";
import PropertyCard from "@/components/common/card";
import { Button } from "@/components/ui/button";
import {
  FiSearch,
  FiKey,
  FiDollarSign,
  FiTag,
} from "react-icons/fi";

/* ---------------- STYLES ---------------- */

const styles = {
  heading:
    "text-3xl md:text-[40px] font-bold text-[#181a20] tracking-tight",

  filterWrapper:
    "flex items-center bg-[#f9eaea] p-4 rounded-xl w-full md:w-[30%]",

  tabButton:
    "flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all",

  activeTab:
    "bg-white text-[#862D27] shadow-sm",

  inactiveTab:
    "text-gray-500 hover:text-gray-700",

  searchInput:
    "w-full py-6 bg-[#fefbfb] border-2 border-[#f9eaea] rounded-xl pl-11 pr-4 text-sm outline-none transition-all",

  emptyState:
    "text-center py-16 bg-white border border-gray-100 rounded-3xl",

  browseButton:
    "rounded-xl px-10 cursor-pointer text-sm font-bold tracking-wider uppercase transition-transform hover:scale-[1.02]",
};

/* ---------------- DATA ---------------- */

const propertyTabs = [
  {
    id: "rent",
    label: "Rent",
    icon: FiKey,
  },
  {
    id: "buy",
    label: "Buy",
    icon: FiDollarSign,
  },
  {
    id: "sell",
    label: "Sell",
    icon: FiTag,
  },
];

const propertiesData = [
  {
    id: 1,
    image: "/house1.jpg",
    price: "$2,095",
    period: "month",
    title: "Palm Harbor",
    address: "2829 Green Valley, Highland Lake, FL",
    beds: 3,
    baths: 2,
    area: "5.4×7 m²",
    isPopular: true,
    type: "rent",
  },

  {
    id: 2,
    image: "/house2.jpg",
    price: "$2,700",
    period: "month",
    title: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    beds: 4,
    baths: 2,
    area: "6×7.5 m²",
    isPopular: true,
    type: "rent",
  },

  {
    id: 3,
    image: "/house3.jpg",
    price: "$4,550",
    period: "month",
    title: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    beds: 4,
    baths: 3,
    area: "8×10 m²",
    isPopular: true,
    type: "rent",
  },

  {
    id: 4,
    image: "/house4.jpg",
    price: "$2,400",
    period: "month",
    title: "St. Crystal",
    address: "210 US Highway, Highland Lake, FL",
    beds: 4,
    baths: 2,
    area: "6×8 m²",
    isPopular: false,
    type: "rent",
  },

  {
    id: 5,
    image: "/house5.jpg",
    price: "$1,500",
    period: "month",
    title: "Cove Red",
    address: "243 Curlew Road, Palm Harbor, TX",
    beds: 2,
    baths: 1,
    area: "5×7.5 m²",
    isPopular: false,
    type: "rent",
  },

  {
    id: 6,
    image: "/house6.jpg",
    price: "$1,600",
    period: "month",
    title: "Tarpon Bay",
    address: "103 Lake Shores, Michigan, IN",
    beds: 3,
    baths: 1.5,
    area: "5×7 m²",
    isPopular: false,
    type: "rent",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function PropertyList() {
  const [activeTab, setActiveTab] = useState("rent");
  const [searchQuery, setSearchQuery] = useState("");

  /* ---------------- FILTERED DATA ---------------- */

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      const matchesTab = property.type === activeTab;

      const matchesSearch =
        property.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        property.address
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <SectionWrapper
      id="property-list"
      className="bg-[#fbfbfb] py-16 lg:py-24"
    >
      <div className="flex flex-col gap-10">

        {/* HEADING */}
        <div className="text-center">
          <h2 className={styles.heading}>
            Recently Added
          </h2>
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* TABS */}
          <div className={styles.filterWrapper}>
            {propertyTabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tabButton} ${
                    activeTab === tab.id
                      ? styles.activeTab
                      : styles.inactiveTab
                  }`}
                >
                  <Icon />

                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* SEARCH */}
          <div className="relative w-full md:w-[30%]">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* PROPERTY GRID */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className="text-gray-400">
              No properties found in this category.
            </p>
          </div>
        )}

        {/* BUTTON */}
        <div className="flex justify-center mt-6">
          <Button
            variant="deal"
            size="xl"
            asChild
            className={styles.browseButton}
          >
            <Link href="/properties">
              Browse More Properties
            </Link>
          </Button>
        </div>

      </div>
    </SectionWrapper>
  );
}