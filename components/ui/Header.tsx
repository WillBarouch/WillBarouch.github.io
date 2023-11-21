'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const name = 'Will Barouch';
  const letters = [...name];

  const letterVariants = {
    hidden: { opacity: 0},
    visible: (i:any) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <h1 className="scroll-m-20 text-7xl md:text-8xl font-extrabold tracking-tight mt-5 text-left block" >
      Hi I&apos;m&nbsp;
      <span className="bg-gradient-to-r from-primary to-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-purple">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              style={{ color: 'rgba(0,0,0,0)' }}
            >
              {letter}
            </motion.span>
          ))}
      </span>
    </h1>
  );
};

export default Header;