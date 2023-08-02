'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {

    const links = ["Education", "Skills", "Experience", "Contact", "Portfolio" ];

    return (
        <nav className={"fixed bg-zinc-900 w-full z-50"}>
            <div className={"flex flex-wrap flex-row self-center w-full justify-center bg-zinc-900"}>
                {links.map((link, i) => (
                    <motion.a
                       className={"text-xl font-extrabold tracking-tight m-5 text-left"}
                       key={i} href={(link == "Portfolio" ? "/" : "#" ) + link.toLowerCase()}
                       variants={{
                           initial: {scale: 1},
                           hover: {scale:1.2},
                       }}
                       whileHover="hover"
                       transition={{duration: 0.25, ease: "easeInOut"}}
                    >
                        {link}
                    </motion.a>
                ))}
            </div>
        </nav>
    )
}
