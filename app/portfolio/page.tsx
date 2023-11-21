'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Loading from '@/components/loading';
import Nav from "@/components/ui/Nav";

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

    let [isDarkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const handleColorSchemeChange = (event:any) => {
            setDarkMode(event.matches);
        };

        const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');
        setDarkMode(darkModeMatcher.matches); // Set initial value

        darkModeMatcher.addEventListener('change', handleColorSchemeChange);

        return () => {
            darkModeMatcher.removeEventListener('change', handleColorSchemeChange);
        };
    }, []);

  return (
      <main className={isDarkMode ? "dark" : ""}>
    <div className="p-5 bg-background dark:bg-dark-background w-full h-full">
        <Nav/>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={`img-${index}`}>
            <Loading src={image} alt={`art ${index}`} />
          </div>
        ))}
      </Masonry>
    </div>
    </main>
  );
}
