"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: "/testimonials/dep1.png",
      text: "Este curso mudou minha vida!",
    },
    {
      id: 2,
      image: "/depoimento2.jpg",
      text: "Conteúdo excelente e professores incríveis.",
    },
    {
      id: 3,
      image: "/depoimento3.jpg",
      text: "A plataforma é super fácil de usar!",
    },
    {
      id: 4,
      image: "/depoimento4.jpg",
      text: "Aprendi muito em pouco tempo.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    pauseAutoplay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    pauseAutoplay();
  };

  const pauseAutoplay = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="flex flex-col w-full h-[600px] p-4 min-sm:h-[750px]" id="depoimentos">
      <h1 className="text-3xl text-[var(--primary-text-color)] tracking-tight text-center font-medium">
        Depoimentos que Inspiram
      </h1>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-4/6 h-5/6 border-3 rounded-4xl border-[var(--primary-color)] bg-white flex flex-col items-center justify-evenly p-2 min-sm:w-3/6">
          <div className="w-1/6 border-3 border-gray-600/50 rounded-4xl"></div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-10/12 flex items-center justify-center relative">
              <Image
                src={testimonials[currentIndex].image}
                alt="Depoimento"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full h-1/6 flex items-center justify-center gap-3 mt-6">
              <button
                onClick={handlePrev}
                className="flex-1 flex justify-center border border-gray-100/50  shadow-md rounded-full p-2 text-[var(--primary-pink)] text-xl"
              >
                {"←"}
              </button>

              <div className="flex-1 flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full shadow-2xl ${
                      currentIndex === index
                        ? "bg-[var(--primary-pink)]"
                        : "bg-[var(--primary-text-color)]/40"
                    } transition-all duration-300`}
                  ></div>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex-1 flex justify-center border border-gray-100/50 shadow-md rounded-full p-2 text-[var(--primary-pink)] text-xl"
              >
                {"→"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
