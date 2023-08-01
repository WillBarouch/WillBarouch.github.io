import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import {motion} from "framer-motion";

// @ts-ignore
const IconTooltip = ({ icon: IconComponent, tooltipText }) => (
    <motion.div className="m-2 w-12" initial={{marginBottom: "0px"}} whileHover={{marginBottom: "2rem"}}>
      <IconComponent className="w-full h-full" />
      <p>{tooltipText}</p>
    </motion.div>
);

export default IconTooltip;
