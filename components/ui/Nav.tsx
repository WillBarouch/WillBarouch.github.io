'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {

    const links = ["Education", "Skills", "Experience", "Contact", "Portfolio" ];

    return (
        <nav className={"fixed bg-zinc-900 w-full"}>
            <div className={"flex flex-row self-center w-full justify-center"}>
                {links.map((link, i) => (
                    <motion.a
                       className={"text-2xl font-extrabold tracking-tight m-5 text-left"}
                       key={i} href={(link == "Portfolio" ? "/" : "#" ) + link.toLowerCase()}
                       variants={{
                           initial: {marginBottom: "0rem"},
                           hover: {marginBottom: "1rem"},
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
