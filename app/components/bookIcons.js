"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import email from "../../public/bookimages/email.png";
import pen from "../../public/bookimages/pen.png";
import scroll from "../../public/bookimages/scroll.png";
import notifications from "../../public/bookimages/notifications.png";
import Subscribenodelay from "../components/subscribenodelay";
import Credits from "../components/credits";
import About from "../chapters/about";
import Modal from "./modal";
import Form from "../chapters/form";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function BookIcons() {
  const [showModal, setShowModal] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    document.body.style.overflow =
      showModal || showAbout || showForm || showSubscribe || showCredits
        ? "hidden"
        : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal, showAbout, showForm, showSubscribe, showCredits]);

  if (typeof width === "undefined") {
    return null;
  }
  return (
    <>
      {width <= 480 ? (
        <div className="bookicons-container-outer">
          <div className="bookicons-container">
            <Modal showModal={showModal} setShowModal={setShowModal} />

            {showAbout && (
              <div
                className="modal-overlay"
                onClick={() => setShowAbout(false)}
              >
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <button
                      className="close-button"
                      onClick={() => setShowAbout(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="book-content">
                      <About />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showForm && (
              <div className="modal-overlay" onClick={() => setShowForm(false)}>
                <div
                  className="modal-content-form"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <button
                      className="close-button"
                      onClick={() => setShowForm(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body-form">
                    <div className="book-content">
                      <Form />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Subscribe Modal */}
            {showSubscribe && (
              <div
                className="modal-overlay-subscribe"
                onClick={() => setShowSubscribe(false)}
              >
                <div
                  className="modal-content-subscribe"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header-subscribe">
                    <button
                      className="close-button-subscribe"
                      onClick={() => setShowSubscribe(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body-subscribe">
                    <Subscribenodelay />
                  </div>
                  <div className="modal-footer-subscribe"></div>
                </div>
              </div>
            )}

            {showCredits && (
              <div
                className="modal-overlay-credits"
                onClick={() => setShowCredits(false)}
              >
                <div
                  className="modal-content-credits"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header-credits">
                    <button
                      className="close-button-credits"
                      onClick={() => setShowCredits(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body-credits">
                    <Credits />
                  </div>
                  <div className="modal-footer-credits"></div>
                </div>
              </div>
            )}

            <div
              className="book-container-top"
              onClick={() => setShowModal(true)}
            >
              <div className="left-text-one">READ THE</div>
              <div className="left-text-one">AMBER QUEEN</div>
            </div>

            <div className="bookicons-image-container-right-inner">
              <div
                className="book-container"
                onClick={() => setShowAbout(true)}
              >
                <Image className="bookicons-image" alt="" src={pen} />
                <div className="bookicons-title">
                  AB<span className="calibri-o">O</span>UT
                </div>
              </div>

              <div
                className="book-container"
                onClick={() => setShowSubscribe(true)}
              >
                <Image className="bookicons-image" alt="" src={notifications} />
                <div className="bookicons-title">
                  SIGN UP F<span className="calibri-o">O</span>R UPDATES
                </div>
              </div>

              <div className="book-container" onClick={() => setShowForm(true)}>
                <Image className="bookicons-image" alt="" src={email} />
                <div className="bookicons-title">
                  C <span className="calibri-o">O</span>NTACT
                </div>
              </div>

              <div
                className="book-container"
                onClick={() => setShowCredits(true)}
              >
                <Image
                  className="bookicons-image tempthree"
                  alt=""
                  src={scroll}
                />
                <div className="bookicons-title">CREDITS</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bookicons-container-outer">
          <div className="bookicons-container">
            <Modal showModal={showModal} setShowModal={setShowModal} />

            {showAbout && (
              <div
                className="modal-overlay"
                onClick={() => setShowAbout(false)}
              >
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <button
                      className="close-button"
                      onClick={() => setShowAbout(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="book-content">
                      <About />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showForm && (
              <div className="modal-overlay" onClick={() => setShowForm(false)}>
                <div
                  className="modal-content-form"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <button
                      className="close-button"
                      onClick={() => setShowForm(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body-form">
                    <div className="book-content">
                      <Form />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Subscribe Modal */}
            {showSubscribe && (
              <div
                className="modal-overlay-subscribe"
                onClick={() => setShowSubscribe(false)}
              >
                <div
                  className="modal-content-subscribe"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header-subscribe">
                    <button
                      className="close-button-subscribe"
                      onClick={() => setShowSubscribe(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body-subscribe">
                    <Subscribenodelay />
                  </div>
                  <div className="modal-footer-subscribe"></div>
                </div>
              </div>
            )}

            {showCredits && (
              <div
                className="modal-overlay-credits"
                onClick={() => setShowCredits(false)}
              >
                <div
                  className="modal-content-credits"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header-credits">
                    <button
                      className="close-button-credits"
                      onClick={() => setShowCredits(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body-credits">
                    <Credits />
                  </div>
                  <div className="modal-footer-credits"></div>
                </div>
              </div>
            )}

            <div className="bookicons-image-container-left">
              <div className="left-text-container">
                <div className="left-text-one">READ THE</div>
                <div className="left-text-one">AMBER QUEEN</div>
              </div>

              <div className="left-text-two" onClick={() => setShowModal(true)}>
                <span className="calibri-o">O</span>PEN B
                <span className="calibri-o">OO</span>K
              </div>
            </div>

            <div className="bookicons-image-container-right">
              <div className="bookicons-image-container-right-inner">
                <div
                  className="book-container"
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
                  onClick={() => setShowAbout(true)}
                >
                  <Image className="bookicons-image" alt="" src={pen} />
                  <div className="bookicons-title">
                    AB<span className="calibri-o">O</span>UT
                  </div>
                </div>

                <div
                  className="book-container"
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
                  onClick={() => setShowSubscribe(true)}
                >
                  <Image
                    className="bookicons-image"
                    alt=""
                    src={notifications}
                  />
                  <div className="bookicons-title">
                    SIGN UP F<span className="calibri-o">O</span>R UPDATES
                  </div>
                </div>

                <div
                  className="book-container"
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
                  onClick={() => setShowForm(true)}
                >
                  <Image className="bookicons-image" alt="" src={email} />
                  <div className="bookicons-title">
                    C <span className="calibri-o">O</span>NTACT
                  </div>
                </div>

                <div
                  className="book-container"
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
                  onClick={() => setShowCredits(true)}
                >
                  <Image
                    className="bookicons-image tempthree"
                    alt=""
                    src={scroll}
                  />
                  <div className="bookicons-title">CREDITS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
