"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  paragraph1: string;
  subtitle1: string;
  subtitle2?: string;
  paragraph2: string;
  paragraph3: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
};

export default function PhotoDescriptionSection({
  title,
  paragraph1,
  subtitle1,
  subtitle2,
  paragraph2,
  paragraph3,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt = "Image",
  reverse = false,
}: Props) {
  return (
    <>
      {/* 📱 Mobile layout */}
      <div className="bg-transparent px-4 py-6 md:py-10 flex flex-col gap-4 lg:hidden">
        <h2 className="font-poppins font-semibold text-[28px] text-[#162F65] mb-2">
          {title}
        </h2>

        <div className="w-full flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={620}
            height={460}
            className="rounded-[10px] w-full h-auto object-cover"
          />
        </div>

        {subtitle1 && (
          <p className="font-poppins font-medium text-[22px] text-[#162F65] mb-1">
            {subtitle1}
          </p>
        )}

        <p className="font-poppins text-[16px] text-[#676767] mb-2 leading-relaxed text-justify whitespace-pre-line">
          {paragraph1}
        </p>

        {paragraph3 && (
          <p className="font-poppins text-[16px] text-[#676767] mb-4 leading-relaxed text-justify">
            {paragraph3}
          </p>
        )}

        {subtitle2 && (
          <p className="font-poppins font-medium text-[22px] text-[#162F65] mb-1 whitespace-pre-line">
            {subtitle2}
          </p>
        )}

        <p className="font-poppins text-[16px] text-[#676767] mb-2 leading-relaxed text-justify">
          {paragraph2}
        </p>

        <Link href={buttonLink}>
          <button className="bg-[#162F65] text-white rounded-[10px] px-6 py-2 font-poppins text-[14px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
            {buttonText}
          </button>
        </Link>
      </div>

      {/* 💻 Desktop & Tablet layout */}
      <div
        className={`bg-transparent px-0 py-6 md:py-10 gap-10 hidden lg:flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={620}
            height={460}
            className="rounded-[10px] sm:w-full md:w-full lg:max-w-[620px] h-auto lg:max-h-[660px] min-h-auto lg:min-h-[460px] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-poppins font-semibold text-[35px] text-[#162F65] mb-4">
            {title}
          </h2>

          {subtitle1 && (
            <p className="font-poppins font-medium text-[25px] text-[#162F65] mb-2">
              {subtitle1}
            </p>
          )}

          <p className="font-poppins font-medium text-[18px] text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
            {paragraph1}
          </p>
          {paragraph3 && (
            <p className="font-poppins font-medium text-[18px] text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
              {paragraph3}
            </p>
          )}
          {subtitle2 && (
            <p className="font-poppins font-medium text-[25px] text-[#162F65] mb-2">
              {subtitle2}
            </p>
          )}

          <p className="font-poppins font-medium text-[18px] text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
            {paragraph2}
          </p>

          <Link href={buttonLink}>
            <button className="bg-[#162F65] text-white rounded-[10px] px-[25.86px] py-[7.89px] font-poppins text-[14px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
