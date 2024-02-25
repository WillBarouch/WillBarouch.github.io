import React from 'react';
import Nav from "@/components/ui/Nav";
import {ParallaxScroll} from "@/components/ui/ParallaxScroll";

const images: string[] = [];
for (let i = 1; i < 23; i++) {
  const image = `/portfolio/renders/${i}.webp`;
  images.push(image);
}


export default function Portfolio() {

  return (
  <main className={"h-full bg-background dark:bg-dark-background w-full"}>
        <Nav/>
        <ParallaxScroll images={images} />
    </main>
  );
}
