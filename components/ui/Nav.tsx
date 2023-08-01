'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {

    const links = ["Education", "Skills", "Experience", "Contact", "Portfolio" ];

    return (
        <nav className={"flex flex-row fixed bg-zinc-950 w-full justify-center"}>
            {links.map((link, i) => (
                <a
                   className={"text-2xl font-extrabold tracking-tight m-5 text-left"}
                   key={i} href={(link == "Portfolio" ? "/" : "#" ) + link.toLowerCase()}
                >
                    {link}
                </a>
            ))}
        </nav>
    )
}
