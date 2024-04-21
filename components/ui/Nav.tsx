'use client';
import { motion } from 'framer-motion';
import {useEffect, useState} from "react";
import {FaMoon} from "react-icons/fa";
import {isMobile} from "react-device-detect";
import {IoSunny} from "react-icons/io5";

export default function Nav() {

    let [isDarkMode, setDarkMode] = useState(true);
    let [links, setLinks] = useState(["Home", "Portfolio", "Resume" ]);

    const handleModeChange = () => {
        if (isDarkMode) {
            document.body.classList.remove("dark");
            setDarkMode(false)
        } else {
            document.body.classList.add("dark");
            setDarkMode(true)
        }
    }

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add("dark");
            setDarkMode(true)
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.body.classList.remove("dark");
            setDarkMode(false)
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
                document.body.classList.add("dark");
                setDarkMode(true)
            } else {
                document.body.classList.remove("dark");
                setDarkMode(false)
            }
        });

        if (!isMobile) {
            setLinks(["Education", "Skills", "Debating", "Experience", "Contact", "Portfolio", "Resume" ]);
        }

    }, [])

    return (
        <motion.nav className={"fixed w-full z-50  bg-background dark:bg-dark-background"}
            transition={{duration: 0.7, ease: "easeOut"}}
            initial="initial"
            animate="animate"
            variants={{
                initial: {y: -50},
                animate: {y: 0},
            }}
        >
            <div className={"flex flex-wrap flex-row self-center justify-center w-full"}>
                {links.map((link, i) => (
                    <motion.a
                       className={"text-xl font-extrabold tracking-tight m-5 text-left text-text dark:text-dark-text"}
                       key={i} href={((link == "Portfolio" || link == "Resume" || link == "Home") ? "/" : "/#" ) + link.toLowerCase()}
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
                {!isMobile && <motion.button onClick={handleModeChange}
                                variants={{
                                    initial: {scale: 1},
                                    hover: {scale: 1.2},
                                }}
                                whileHover="hover"
                                transition={{duration: 0.25, ease: "easeInOut"}}
                >
                    {!isDarkMode && <FaMoon size={20} className={"m-5 text-text dark:text-dark-text"}/>}
                  {isDarkMode && <IoSunny size={20} className={"m-5 text-text dark:text-dark-text"}/>}
                </motion.button>}

            </div>
        </motion.nav>
    )
}