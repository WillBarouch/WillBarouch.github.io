'use client';
import {motion, useAnimation, useInView} from "framer-motion";
import {useEffect, useRef} from "react";

interface props  {
    children:any,
    id:string,
}

export default function Section({ children, id }:props) {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "0px 0px 50px 0px"});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect((() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }), [isInView, mainControls, slideControls]);

    return(
        <motion.section
          className="p-8 text-center w-full 2xl:w-4/5 3xl:w-2/3 relative overflow-hidden"
          id={id.toLowerCase()}
          variants={{
              visible: {opacity: 1, y: 0},
              hidden: {opacity: 0, y: 75},
          }}
          initial="hidden"
          animate={mainControls}
          ref={ref}
          transition={{duration:1, delay: 0.5}}
        >
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {id}
            </h2>

            <div className="flex flex-auto w-full mx-auto lg:w-[95%] xl:w-[92%] 2xl:w-[80%] flex-wrap justify-center text-center">
                {children}
            </div>
            <motion.div
                variants={{
                    visible: {left: "100%"},
                    hidden: {left: 0},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 0.5, ease: "easeIn"}}
                className="absolute top-4 bottom-4 left-0 right-0 bg-white z-[20]"
            >

            </motion.div>
        </motion.section>
    )
}