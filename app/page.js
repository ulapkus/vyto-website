"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import prologue from "../public/prologue.png";
import chapterone from "../public/chapter1.png";
import chaptertwo from "../public/chapter2.png";
import Parralax from "./components/parralax";
import Prologue from "./chapters/prologue";
import Chapterone from "./chapters/chapterone";
import Chaptertwo from "./chapters/chaptertwo";
import Vytas from "../public/vytas.jpeg";
import Author from "./chapters/author";
export default function Landscape() {
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
              {currentPage === 0 && <Author />}
              {currentPage === 1 && <Prologue />}
              {currentPage === 2 && <Chapterone />}
              {currentPage === 3 && <Chaptertwo />}
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
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(0);
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={Vytas} />
            <p className="text-one">About the Author</p>
          </div>
          <div
            className="container-two"
            style={{
              transition: "transform 0.6s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(1);
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={prologue} />
            <p className="text-one">Prologue</p>
          </div>

          <div
            className="container-two"
            style={{
              transition: "transform 0.6s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(2);
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={chapterone} />
            <p className="text-one">Chapter 1</p>
          </div>

          <div
            className="container-two"
            style={{
              transition: "transform 0.6s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(3);
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={chaptertwo} />
            <p className="text-one">Chapter 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
