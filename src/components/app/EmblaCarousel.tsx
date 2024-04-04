import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla h-full" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide h-full w-full">
          <img
            src="/ecom-mern.png"
            alt="ecom"
            className="object-contain h-full w-full"
          />
        </div>
        <div className="embla__slide h-full w-full">
          <img
            src="/ecom-mern.png"
            alt="ecom"
            className="object-contain h-full w-full"
          />
        </div>
        <div className="embla__slide h-full w-full">
          <img
            src="/ecom-mern.png"
            alt="ecom"
            className="object-contain h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
