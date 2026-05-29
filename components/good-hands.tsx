"use client";

import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/wrapper/sectionWrapper";
import { Button } from "@/components/ui/button";


const goodHandsData = {
  title: "You're in good hands",

  description:
    "We provide a complete service for the sale, purchase or rental of real estate. Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne forae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.",

  image: "/groups.png",

  button: {
    label: "Learn More",
    link: "/about",
  },
};

const styles = {
  wrapper:
    "flex flex-col lg:flex-row items-center gap-10 lg:gap-16",

  imageWrapper:
    "relative w-full aspect-[5/4] rounded-[32px] overflow-hidden shadow-md",

  heading:
    "text-[#181a20] text-3xl md:text-4xl font-semibold leading-tight",

  description:
    "font-['Plus_Jakarta_Sans'] font-normal text-[18px] leading-[160%] text-gray-500 ",

  button:
    "tracking-widest uppercase text-sm font-bold cursor-pointer",
};



export default function GoodHands() {
  return (
    <SectionWrapper id="good-hands" className="bg-[#f8f8f8]">

      <div className={styles.wrapper}>

        {/* LEFT IMAGE */}
        <div className="flex-1 w-full">
          <div className={styles.imageWrapper}>
            <Image
              src={goodHandsData.image}
              alt={goodHandsData.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full flex flex-col justify-center gap-6">

          {/* TITLE */}
          <h2 className={styles.heading}>
            {goodHandsData.title}
          </h2>

          {/* DESCRIPTION */}
          <p className={styles.description}>
            {goodHandsData.description}
          </p>

          {/* BUTTON */}
          <div className="mt-2">
            <Button
              variant="deal"
              size="xl"
              asChild
              className={styles.button}
            >
              <Link href={goodHandsData.button.link}>
                {goodHandsData.button.label}
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}