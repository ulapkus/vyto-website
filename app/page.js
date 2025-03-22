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
import { prologue } from "./chapters/prologue";
import Chapterone from "./chapters/chapterone";
import { chaptertwo } from "./chapters/chaptertwo";

export default function Landscape() {
  const [imageSrcOne, setImageSrcOne] = useState(one);
  const [imageSrcTwo, setImageSrcTwo] = useState(twoagain);
  const [imageSrcThree, setImageSrcThree] = useState(threeagain);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

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
    let pageTitle;
    if (currentPage === 0) {
      pageTitle = "Prologue";
    } else if (currentPage === 1) {
      pageTitle = "Chapter 1";
    } else {
      pageTitle = "Chapter 2";
    }

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
              {/* <div className="prologue-text">{pageTitle}</div> */}
              <Chapterone />
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    );
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
      </div>
    </div>
  );
}
