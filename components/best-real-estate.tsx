"use client";

import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/wrapper/sectionWrapper";
import { Button } from "@/components/ui/button";

/* ---------------- DATA ---------------- */

const bestRealEstateData = {
  titleLine1: "Find your best",
  titleLine2: "Real Estate",

  description:
    "We provide a complete service for the sale, purchase or rental of real estate.",

  image: "/tall_buldings1.png",

  button: {
    label: "Contact Us",
    link: "/contact",
  },
};

/* ---------------- STYLES ---------------- */

const styles = {
  /* CARD */
  card:
    "relative overflow-hidden rounded-[40px] bg-[#d6eaf8] flex flex-col lg:flex-row min-h-[320px] lg:min-h-[520px]",

  /* LEFT SIDE */
  content:
    "w-full lg:w-[60%] flex flex-col justify-center space-y-6 gap-6 px-10 py-14 lg:px-16 lg:py-16 z-10",

  heading:
    "goodhands-heading text-[#181a20]",

  description: 
    "goodhands-desc text-gray-500 max-w-[400px]",

  button:
    "tracking-widest uppercase text-sm font-bold cursor-pointer",

  /* RIGHT SIDE */
  imagePane:
    "relative w-full lg:w-[50%] min-h-[320px] lg:min-h-full self-stretch",

  /* IMAGE */
  image:
    "object-cover object-bottom",
};

/* ---------------- COMPONENT ---------------- */

export default function BestRealEstate() {
  return (
    <SectionWrapper
      className="bg-white"
    >
      <div className={styles.card}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>

          <h1 className={styles.heading}>
            <span className="block">{bestRealEstateData.titleLine1}</span>
            <span className="block mt-3">{bestRealEstateData.titleLine2}</span>
          </h1>

          <p className={styles.description}>
            {bestRealEstateData.description}
          </p>

          <div>
            <Button
              variant="deal"
              size="xl"
              asChild
              className={styles.button}
            >
              <Link href={bestRealEstateData.button.link}>
                {bestRealEstateData.button.label}
              </Link>
            </Button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imagePane}>
          <Image
            src={bestRealEstateData.image}
            alt="Tall real estate building"
            fill
            priority
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

      </div>
    </SectionWrapper>
  );
}