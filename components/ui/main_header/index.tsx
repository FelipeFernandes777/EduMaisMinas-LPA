"use client";

import Image from "next/image";
import { MainHeaderContainer } from "./main_header_container";
import { MainHeaderNav } from "./main_header_nav";
import headerLogo from "@/public/Educa+LogoHeader.png";
import { useState } from "react";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MainHeaderContainer>
      <div className="flex items-center justify-between w-full shadow-md p-2">
        <Image
          alt="Logo da empresa EducaMaisMinas"
          src={headerLogo}
          className="w-5/12 h-auto min-sm:w-3/12"
        />
        <div
          className="flex items-center justify-center w-1/6 h-auto cursor-pointer transition-all duration-300 ease-in-out"
          onClick={handleMenuButton}
        >
          {isOpen == false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          )}
        </div>
      </div>
      {
        isOpen ? <MainHeaderNav /> : null
      }
    </MainHeaderContainer>
  );
}
