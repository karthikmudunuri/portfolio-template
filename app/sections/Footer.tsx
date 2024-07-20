import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import React from "react";

const Footer = () => {
    return (
        <motion.section
            className=" h-[15vh] w-full  items-center justify-center bg-[#0E1016] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
            initial="initial"
            animate="animate"
        >
            <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
                <AnimatedBody
                    text={"© ELODRA UI 2024"}
                    className={"m-0 p-0"}
                />
                <div className="flex flex-col sm:flex-row  sm:gap-1 md:gap-2">
                    <AnimatedBody text={"Design & Deployed by"} className={"m-0 p-0"} />
                    <Link
                        href="https://github.com/karthikmudunuri/eldoraui"
                        target="_blank"
                        aria-label="Eldora UI Github"
                    >
                        <span className="underline underline-offset-2 hover:no-underline">
                            <AnimatedBody text={"karthikmudunuri"} className={"m-0 p-0"} />
                        </span>{" "}
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Footer;
