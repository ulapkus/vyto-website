import { useRef, useState, useEffect } from "react";

export default function Subscribe() {
  const formRef = useRef(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz01wL3Utoy9q86scYMmXCDU8EES-zk9mc2IMslrJBB85S7jxF5Y1dqP-QIy2b3WzOWxw/exec";

  useEffect(() => {
    // Handle scroll lock when modal is shown
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  useEffect(() => {
    // Function to check if element is in viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }; // Function to handle scroll
    const handleScroll = () => {
      const element = document.getElementById("subscribe-trigger");
      if (element && isElementInViewport(element)) {
        // Set timeout for 3 seconds
        setTimeout(() => {
          setShowModal(true);
        }, 100);
        // Remove scroll listener after triggering
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showModal) return <div id="subscribe-trigger"></div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowBanner(true);

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
    <div className="modal-overlay-subscribe">
      <div className="modal-content-subscribe">
        {/* {showBanner && <div className="banner">Email sent!</div>} */}
        <div className="modal-header-subscribe">
          <button
            className="close-button-subscribe"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>
        </div>
        <div className="modal-body-subscribe">
          <div className="subscribe-text">
            Stay posted on the book&apos;s release
          </div>
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
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div className="modal-footer-subscribe"></div>
      </div>
    </div>
  );
}
