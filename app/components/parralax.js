"use client";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import sky from "../../public/parralax/skyv3.png";
import castle from "../../public/parralax/Castleandlake.png";
import lake from "../../public/parralax/waterv3.png";
import amber from "../../public/parralax/amberv3.png";
import queen from "../../public/parralax/queenv3.png";
import fogOne from "../../public/parralax/fogUpdated.png";
import underwater from "../../public/parralax/underwater.png";
import BookIcons from "./bookIcons";
import Subscribe from "./subscribe";

export default function Parralax() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -500]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -300]);

  const scale = useTransform(scrollY, [0, 1000], [1.2, 1]);
  const scaleCastle = useTransform(scrollY, [0, 800], [1.3, 1.1]);
  const scaleY = useTransform(scrollY, [0, 1000], [1, 0.5]);

  return (
    <div className="container-ya">
      <motion.div
        className="amberqueencontainer"
        style={{ y: y1, x: 0, scale }}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
      >
        <Image src={amber} alt="" className="text" priority="true" />
        <Image src={queen} alt="" className="text text-queen" priority="true" />
        <div className="novel-by">A NOVEL BY VYTAS</div>
        {/* <div className="novel-by">a novel by Vytas</div> */}
      </motion.div>
      <motion.div
        className="sky"
        style={{ y: y1, x: 0, scale }}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        priority="true"
      >
        <Image src={sky} alt="" className="sky-inner" />
      </motion.div>
      <motion.div
        className="castle"
        style={{ y: y2, x: 0, scale: scaleCastle }}
        dragConstraints={{ left: 0, right: 0 }}
        priority="true"
      >
        <Image src={castle} alt="" className="castle-inner" />
      </motion.div>
      <Subscribe />
      <motion.div
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        className="mist"
        style={{ y: y2, x: 0, scale: scaleCastle }}
      >
        <Image src={fogOne} alt="" className="mist-inner" />
      </motion.div>
      <motion.div
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        className="fogOne"
        style={{ y: y4, x: 0, scaleCastle }}
      >
        <Image src={fogOne} alt="" className="fogone-inner" />
      </motion.div>

      <motion.div
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        className="lake"
        priority="true"
        style={{
          y: y3,
          x: 0,
          // scaleX: scale.get(),
          scaleY: scaleY,
        }}
      >
        <Image src={lake} alt="lake" className="lake-inner" />
      </motion.div>
      <motion.div
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        className="underwater"
        style={{
          y: y3,
          x: 0,
        }}
      >
        <Image src={underwater} alt="underwater" className="underwater-inner" />
        <BookIcons />
        {/* <div className="black-bottom"></div> */}
      </motion.div>
    </div>
  );
}
