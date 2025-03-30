"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import prologue from "../../public/prologue.png";
// import chapterone from "../../public/chapter1.png";
import chaptertwo from "../../public/chapter2.png";
import Vytas from "../../public/vytas.jpeg";
import Prologue from "../chapters/prologue";
import Chapterone from "../chapters/chapterone";
import Chaptertwo from "../chapters/chaptertwo";
import Author from "../chapters/author";
import chapteronetext from "../../public/chapteronetext.png";
import chapterone from "../../public/chapter1nobackground.png";

const PAGES = [
  { component: Author, image: Vytas, title: "About the Author" },
  { component: Prologue, image: prologue, title: "Prologue" },
  { component: Chapterone, image: chapterone, title: "Chapter 1" },
  { component: Chaptertwo, image: chaptertwo, title: "Chapter 2" },
];

export default function BookIcons() {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const BookPreviewModal = () => {
    if (!showModal) return null;
    const PageComponent = PAGES[currentPage].component;

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
              <PageComponent />
            </div>
          </div>
          <div className="modal-footer" />
        </div>
      </div>
    );
  };

  const ImageContainer = ({ index, image, title }) => (
    <div
      className="bookicons-image-container-two"
      style={{ transition: "transform 0.6s ease", transform: "scale(1)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      onClick={() => {
        setCurrentPage(index);
        setShowModal(true);
      }}
    >
      <div className="bookicons-image-container-three">
        {/* <p className="bookicons-title">{title}</p> */}
        <Image alt="" src={chapteronetext} className="chapteronetextimg" />
        <Image className="bookicons-image" alt="" src={image} />
        {/* <p className="bookicons-author">By Vytas Aukstuolis</p> */}
      </div>
    </div>
  );

  return (
    <div className="bookicons-container">
      <BookPreviewModal />
      <div className="bookicons-image-container">
        {PAGES.map((page, index) => (
          <ImageContainer
            key={page.title}
            index={index}
            image={page.image}
            title={page.title}
          />
        ))}
      </div>
    </div>
  );
}
