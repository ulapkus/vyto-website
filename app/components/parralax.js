import Image from "next/image";
import { useTransform, useMotionValue, useScroll, motion } from "framer-motion";
import sky from "../../public/skyv3.png";
import castle from "../../public/castlev3.png";
import lake from "../../public/waterv3.png";
import amber from "../../public/amberv3.png";
import queen from "../../public/queenv3.png";
import fogOne from "../../public/fogUpdated.png";
import underwater from "../../public/underwaterv3.png";

export default function Parralax() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -500]);

  const scale = useTransform(scrollY, [0, 1000], [1.2, 1]);
  const scaleCastle = useTransform(scrollY, [0, 800], [1.3, 1]);
  const scaleY = useTransform(scrollY, [0, 1000], [1, 0.5]);

  return (
    <>
      <div className="amberqueencontainer">
        <Image src={amber} alt="" className="text" />
        <Image src={queen} alt="" className="text text-queen" />
      </div>
      <motion.div className="sky" style={{ y: y1, x: 0, scale }}>
        <Image src={sky} alt="sky" className="sky-inner" />
      </motion.div>
      <motion.div
        className="castle"
        style={{ y: y2, x: 0, scale: scaleCastle }}
      >
        <Image src={castle} alt="castle" className="castle-inner" />
        <Image src={lake} alt="lake" className="lake-stationary-inner" />
      </motion.div>
      <motion.div className="fogOne" style={{ y: y1, x: 0, scale }}>
        <Image src={fogOne} alt="fogOne" className="fogone-inner" />
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
          <div className="email-input">
            <input className="email" type="email" placeholder="Email" />
            <button className="sign-up-button">
              {/* <button className="sign-up-button" onClick={sendEmail}> */}
              <p className="sign-up">SIGN UP</p>
            </button>
          </div>
          <div className="arrow-container">
            <div className="arrow"></div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
