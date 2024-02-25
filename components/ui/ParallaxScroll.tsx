"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
  });

  function shuffleArray(array: any[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -800]);

  const shuffledImages = shuffleArray(images);

  const third = Math.ceil(images.length / 4);

  const firstPart = shuffledImages.slice(0, third);
  const secondPart = shuffledImages.slice(third, 2 * third);
  const thirdPart = shuffledImages.slice(2 * third,);

  return (
    <div
      className={cn("h-full items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-8xl mx-auto gap-10 py-40 px-10"
          ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
              <motion.div
                  style={{y: translateFirst}} // Apply the translateY motion value here
                  key={"grid-1" + idx}
              >
                <Image
                    src={el}
                    className="h-full w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                    loading={"lazy"}

                />
              </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
              <motion.div style={{y: translateSecond}} key={"grid-2" + idx}>
                <Image
                    src={el}
                    className="h-full w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    loading={"lazy"}
                    alt="thumbnail"

                />
              </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
              <motion.div style={{y: translateThird}} key={"grid-3" + idx}>
                <Image
                    src={el}
                    className="h-full w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    loading={"lazy"}
                    alt="thumbnail"

                />
              </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
