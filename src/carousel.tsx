import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export interface CarouselProps {
  children: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (scrollContainerRef.current) {
        setContainerWidth(scrollContainerRef.current.offsetWidth);
        const screenWidth = window.innerWidth;
        if (screenWidth >= 768) {
          setItemsPerView(3);
        } else if (screenWidth >= 640 && screenWidth < 768) {
          setItemsPerView(2);
        } else {
          setItemsPerView(1);
        }
      }
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        direction === "left" ? -containerWidth : containerWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth -mx-2 leading-none"
        >
          {children.map((item, index) => (
            <div
              key={index}
              className="inline-block leading-normal align-middle px-2"
              style={{ width: containerWidth / itemsPerView }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {children.length > itemsPerView && (
        <>
          <button
            className="absolute h-full top-0 -left-7 bg-line px-[2px] rounded-lg hidden sm:block opacity-0 disabled:opacity-0 group-hover:opacity-100 hover:bg-line/20 cursor-pointer transition-all duration-300"
            onClick={() => scroll("left")}
          >
            <HiChevronLeft className="text-xl" />
          </button>
          <button
            className="absolute h-full top-0 -right-7 bg-line px-[2px] rounded-lg hidden sm:block opacity-0 disabled:opacity-0 group-hover:opacity-100 hover:bg-line/20 cursor-pointer transition-all duration-300"
            onClick={() => scroll("right")}
          >
            <HiChevronRight className="text-xl" />
          </button>
        </>
      )}
    </div>
  );
};
