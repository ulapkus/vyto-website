"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import oneagain from "../public/image1.png";
import one from "../public/image1again.png";
import two from "../public/image2.png";
import three from "../public/image3.png";
import twoagain from "../public/image2again.png";
import threeagain from "../public/image3again.png";
import Parralax from "./components/parralax";
import Prologue from "./chapters/prologue";
import Chapterone from "./chapters/chapterone";
import Chaptertwo from "./chapters/chaptertwo";

export default function Landscape() {
  const [imageSrcOne, setImageSrcOne] = useState(one);
  const [imageSrcTwo, setImageSrcTwo] = useState(twoagain);
  const [imageSrcThree, setImageSrcThree] = useState(threeagain);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const BookPreviewModal = () => {
    if (!showModal) return null;

    return (
      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <div className="book-content">
              {currentPage === 0 && <Prologue />}
              {currentPage === 1 && <Chapterone />}
              {currentPage === 2 && <Chaptertwo />}
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    );
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText("vytauk@gmail.com");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); // Hide after 2 seconds
  };

  return (
    <div className="container">
      <BookPreviewModal />
      <Parralax />
      <div className="black-screen">
        <div className="underwater-image-container">
          <div
            className="container-two"
            style={{
              transition: "transform 0.6s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              setImageSrcTwo(two);
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              setImageSrcTwo(twoagain);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(0);
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={imageSrcTwo} />
            <p className="text-one">Prologue</p>
          </div>

          <div
            className="container-two"
            style={{
              transition: "transform 0.6s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              setImageSrcThree(three);
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              setImageSrcThree(threeagain);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(1);
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={imageSrcThree} />
            <p className="text-one">Chapter 1</p>
          </div>

          <div
            className="container-two"
            style={{
              transition: "transform 0.6s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              setImageSrcOne(oneagain);
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              setImageSrcOne(one);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(2);
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={imageSrcOne} />
            <p className="text-one">Chapter 2</p>
          </div>
        </div>
        <div className="text-two-container">
          <p className="text-two">
            Get in touch with the novel&apos;s author, Vytas Aukstuolis.
          </p>
          <p
            className="text-two"
            onClick={copyToClipboard}
            style={{ cursor: "pointer", position: "relative" }}
          >
            vytauk@gmail.com
            {showTooltip && (
              <span className="tooltip">Copied to clipboard!</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
