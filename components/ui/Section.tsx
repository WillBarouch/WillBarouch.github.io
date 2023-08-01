import { motion } from "framer-motion";
import { Children } from "react";

export default function Section({ children, id }) {


    return(
        <motion.section
          className="p-8 text-center w-full"
          id={id.toLowerCase()}
          initial={{ marginRight: "100vw" }}
          whileInView={{ marginRight: 0 }}
          transition={{ duration: 0.7}} // Increase the duration to slow down the animation
        >
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {id}
            </h2>
            <div className="flex flex-auto w-full mx-auto lg:w-[95%] xl:w-[92%] 2xl:w-[60%] flex-wrap justify-center">
                {children}
            </div>
        </motion.section>
    )
}