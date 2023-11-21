'use client';
import { motion } from 'framer-motion';
// import {isMobile} from "react-device-detect";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import {BiMenu} from "react-icons/bi";

export default function Nav() {

    const links = ["Education", "Skills", "Experience", "Contact", "Portfolio", "Resume" ];

    // if (isMobile) return (
    //     <Dialog>
    //       <DialogTrigger>
    //             <div className={"mt-[2vh] flex flex-col justify-start w-screen align-middle px-5"}>
    //                 <BiMenu className={"text-3xl text-white font-extrabold justify-self-start"}></BiMenu>
    //             </div>
    //       </DialogTrigger>
    //       <DialogContent>
    //         <DialogHeader>
    //           <DialogDescription>
    //               <div className={"flex flex-wrap flex-col self-center w-full justify-center bg-zinc-900"}>
    //             {links.map((link, i) => (
    //                 <a
    //                    className={"text-xl text-white font-extrabold tracking-tight m-5 text-left"}
    //                    key={i} href={((link == "Portfolio" || link == "Resume") ? "/" : "#" ) + link.toLowerCase()}
    //                 >
    //                     {link}
    //                 </a>
    //             ))}
    //               </div>
    //           </DialogDescription>
    //         </DialogHeader>
    //       </DialogContent>
    //     </Dialog>
    // );
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
                       key={i} href={((link == "Portfolio" || link == "Resume") ? "/" : "/#" ) + link.toLowerCase()}
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
        </motion.nav>
    )
}