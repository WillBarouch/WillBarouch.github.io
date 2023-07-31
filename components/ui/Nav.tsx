'use client';
import React, { useState } from 'react';

export default function Nav() {

    const links = [ "Landing", "Education", "Skills", "Experience", "Contact" ];

    return (
        <div className={"flex flex-row fixed bg-zinc-950 w-full justify-end"}>
            {links.map((link, i) => (
                <a
                   className={"text-2xl font-extrabold tracking-tight m-5 text-left"}
                   key={i} href={`#${link}`}
                >
                    {link}
                </a>
            ))}
        </div>
    )
}
