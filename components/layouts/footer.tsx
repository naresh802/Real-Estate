"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/wrapper/sectionWrapper";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

/* ---------------- DATA (ALL CONTENT HERE) ---------------- */

const footerData = {
  logo: {
    src: "/logo.png",
    alt: "Winners Real Estate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    copyright: "© 2026. All rights reserved.",
  },

  socials: [
    { href: "https://facebook.com", icon: "facebook", color: "#1877F2" },
    { href: "https://twitter.com", icon: "twitter", color: "#1DA1F2" },
    { href: "https://instagram.com", icon: "instagram", color: "#E4405F" },
    { href: "https://linkedin.com", icon: "linkedin", color: "#0A66C2" },
  ],

  columns: [
    {
      title: "Services",
      links: [
        { label: "Rent", href: "/rent" },
        { label: "Buy", href: "/buy" },
        { label: "Sell", href: "/sell" },
        { label: "Landlords", href: "/landlords" },
      ],
    },
    {
      title: "Our Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ],

  subscribe: {
    title: "Subscribe",
    description: "Subscribe to get latest property, blog news from us",
    placeholder: "Email Address",
  },
};

/* ---------------- ICON MAP ---------------- */

const socialIcons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

/* ---------------- COMPONENT ---------------- */

export default function Footer() {
  return (
    <SectionWrapper className="font-inter bg-[#fbf9f9] border-t border-gray-100 pt-16 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* LEFT SECTION */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Logo */}
          <div className="relative w-[180px] h-[50px]">
            <Image
              src={footerData.logo.src}
              alt={footerData.logo.alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-[14px] text-gray-500 max-w-[400px] leading-relaxed">
            {footerData.logo.description}
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {footerData.socials.map((item) => {
              const Icon =
                socialIcons[item.icon as keyof typeof socialIcons];

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: item.color }}
                >
                  <Icon size={24} />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-[14px] text-gray-400 mt-4">
            {footerData.logo.copyright}
          </p>
        </div>

        {/* DYNAMIC COLUMNS */}
        {footerData.columns.map((col) => {
          const isCompany = col.title === "Our Company";
          const isServices = col.title === "Services";
          return (
            <div
              key={col.title}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              <h3 className="font-bold text-[18px] text-[#181a20]">
                {col.title}
              </h3>

              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-black-500 hover:text-[#862D27] transition-colors ${
                        isCompany
                          ? "text-[18px]"
                          : isServices
                          ? "text-[16px] font-normal"
                          : "text-[14px]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* SUBSCRIBE */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <h3 className="font-bold text-[18px] text-[#181a20]">
            {footerData.subscribe.title}
          </h3>

          <p className="text-[14px] text-gray-400">
            {footerData.subscribe.description}
          </p>

          <div className="relative flex items-center w-full max-w-[280px] mt-2">
            <input
              type="email"
              placeholder={footerData.subscribe.placeholder}
              className="w-full px-5 py-3 rounded-full border border-gray-200 bg-white text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#862D27] pr-12 transition-all shadow-sm"
            />

            <button className="absolute right-1.5 w-9 h-9 rounded-full bg-[#862D27] text-white flex items-center justify-center hover:bg-[#6c2420] transition-colors">
              <FiArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}