import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "./GetStarted";

export const Hero = () => {
  return (
    <div>
      <section id="home" className={`flex md:flex-row flex-row ${styles.paddingY}`}>
        <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <div>
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <span className="text-white">20%</span>
            <span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
