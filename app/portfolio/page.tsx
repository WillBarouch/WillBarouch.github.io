'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Loading from '@/components/loading';

const images: string[] = [];
for (let i = 1; i < 23; i++) {
  const image = `/portfolio/renders/${i}.png`;
  images.push(image);
}

export default function Portfolio() {
  const breakpointColumnsObj = {
    default: 4,
    1500: 3,
    850: 2,
    450: 1,
  };

  return (
    <div className="p-5 bg-zinc-900 w-full h-full">
      <div className="text-center flex flex-row flex-auto my-5">
        <Link href="/" className="h-10">
          <Button variant={"outline"}>Home</Button>
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white text-center basis-full">
          My portfolio:
        </h1>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={`img-${index}`} className={""}>
            <Loading src={image} alt={`art ${index}`} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
