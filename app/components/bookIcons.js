"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Vytas from "../../public/bookimages/vytas.jpeg";
import subscribe from "../../public/booktitles/subscribe.png";
import formicon from "../../public/bookimages/form.png";
import subscribeicon from "../../public/bookimages/subscription.png";
import abouttheauthor from "../../public/booktitles/abouttheauthor.png";
import amberqueen from "../../public/booktitles/amberqueen.png";
import prologue from "../../public/bookimages/prologue3.png";
import icon from "../../public/bookimages/human-icon-png-1901.png";
import Subscribenodelay from "../components/subscribenodelay";
import contactform from "../../public/booktitles/contactform.png";
import Author from "../chapters/author";
import Modal from "./modal";
import Form from "../chapters/form";

export default function BookIcons() {
  const [showModal, setShowModal] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      showModal || showAuthor || showForm || showSubscribe ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal, showAuthor, showForm, showSubscribe]);

  return (
    <div className="bookicons-container">
      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* Author Modal */}
      {showAuthor && (
        <div className="modal-overlay" onClick={() => setShowAuthor(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button
                className="close-button"
                onClick={() => setShowAuthor(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="book-content">
                <Author />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
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

      <div className="bookicons-image-container">
        {/* Contact Form Container */}
        <div
          className="bookicons-image-container-two"
          style={{ transition: "transform 0.6s ease", transform: "scale(1)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={() => setShowForm(true)}
        >
          <div className="bookicons-image-container-three temp">
            <Image
              alt=""
              src={contactform}
              className="chapteronetextimg temptwo"
            />
            <Image
              className="bookicons-image tempthree"
              alt=""
              src={formicon}
            />
          </div>
        </div>

        {/* About the Author Container */}
        <div
          className="bookicons-image-container-two"
          style={{ transition: "transform 0.6s ease", transform: "scale(1)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={() => setShowAuthor(true)}
        >
          <div className="bookicons-image-container-three">
            <Image alt="" src={abouttheauthor} className="chapteronetextimg" />
            <Image className="bookicons-image" alt="" src={icon} />
          </div>
        </div>

        {/* Amber Queen Container */}
        <div
          className="bookicons-image-container-two"
          style={{ transition: "transform 0.6s ease", transform: "scale(1)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={() => setShowModal(true)}
        >
          <div className="bookicons-image-container-three">
            <Image alt="" src={amberqueen} className="amberqueentextimg" />
            <div className="amberqueen-bookicons-image-container">
              <Image
                className="amberqueen-bookicons-image"
                alt=""
                src={prologue}
              />
            </div>
          </div>
        </div>

        {/* Subscribe Container */}
        <div
          className="bookicons-image-container-two"
          style={{ transition: "transform 0.6s ease", transform: "scale(1)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={() => setShowSubscribe(true)}
        >
          <div className="bookicons-image-container-three">
            <Image alt="" src={subscribe} className="subscribe-text-img" />
            <Image className="bookicons-image" alt="" src={subscribeicon} />
          </div>
        </div>

        <div
          className="bookicons-image-container-two"
          style={{ transition: "transform 0.6s ease", transform: "scale(1)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={() => setShowSubscribe(true)}
        >
          <div className="bookicons-image-container-three temp">
            <Image
              alt=""
              src={subscribe}
              className="subscribe-text-img tempfour"
            />
            <Image
              className="bookicons-image tempthree"
              alt=""
              src={subscribeicon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
