"use client";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import sky from "../../public/skyv3.png";
import castle from "../../public/Castleandlake.png";
import lake from "../../public/waterv3.png";
import amber from "../../public/amberv3.png";
import queen from "../../public/queenv3.png";
import fogOne from "../../public/fogUpdated.png";
import underwater from "../../public/underwater.png";
import { useRef, useState } from "react";

export default function Parralax() {
  const { scrollY } = useScroll();
  const formRef = useRef(null);
  const [showBanner, setShowBanner] = useState(false);

  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -500]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -300]);

  const scale = useTransform(scrollY, [0, 1000], [1.2, 1]);
  const scaleCastle = useTransform(scrollY, [0, 800], [1.3, 1.1]);
  const scaleY = useTransform(scrollY, [0, 1000], [1, 0.5]);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz01wL3Utoy9q86scYMmXCDU8EES-zk9mc2IMslrJBB85S7jxF5Y1dqP-QIy2b3WzOWxw/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowBanner(true); // Show banner immediately

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(formRef.current),
      });
      console.log("Success!", response);
      setTimeout(() => setShowBanner(false), 2000);
    } catch (error) {
      console.error("Error!", error.message);
      setShowBanner(false);
    }
  };

  return (
    <>
      {showBanner && <div className="banner">Email sent!</div>}
      <motion.div
        className="amberqueencontainer"
        style={{ y: y1, x: 0, scale }}
      >
        <Image src={amber} alt="" className="text" />
        <Image src={queen} alt="" className="text text-queen" />
      </motion.div>
      <motion.div className="sky" style={{ y: y1, x: 0, scale }}>
        <Image src={sky} alt="" className="sky-inner" />
      </motion.div>
      <motion.div
        className="castle"
        style={{ y: y2, x: 0, scale: scaleCastle }}
      >
        <Image src={castle} alt="" className="castle-inner" />
      </motion.div>
      <motion.div className="mist" style={{ y: y2, x: 0, scale: scaleCastle }}>
        <Image src={fogOne} alt="" className="mist-inner" />
      </motion.div>
      <motion.div className="fogOne" style={{ y: y4, x: 0, scaleCastle }}>
        <Image src={fogOne} alt="" className="fogone-inner" />
      </motion.div>
      <motion.div
        className="lake"
        style={{
          y: y3,
          x: 0,
          scaleX: scale.get(),
          scaleY: scaleY,
        }}
      >
        <Image src={lake} alt="lake" className="lake-inner" />
      </motion.div>
      <motion.div
        className="underwater"
        style={{
          y: y3,
          x: 0,
        }}
      >
        <Image src={underwater} alt="underwater" className="underwater-inner" />
        <div className="underwater-text-container">
          <div className="underwater-text">Keep me posted</div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            name="submit-to-google-sheet"
            className="email-input"
          >
            <input
              className="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <button className="sign-up-button" type="submit">
              SEND
            </button>
          </form>
          <div className="arrow-container">
            <div className="arrow"></div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
