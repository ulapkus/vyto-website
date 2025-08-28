import { useRef, useState, useEffect } from "react";

export default function Subscribe() {
  const formRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz01wL3Utoy9q86scYMmXCDU8EES-zk9mc2IMslrJBB85S7jxF5Y1dqP-QIy2b3WzOWxw/exec";

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  useEffect(() => {
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
    };

    const handleScroll = () => {
      const element = document.getElementById("subscribe-trigger");
      if (element && isElementInViewport(element)) {
        setTimeout(() => setShowModal(true), 100);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showModal) return <div id="subscribe-trigger" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(formRef.current),
      });
      console.log("Success!");
      setSubmitted(true);
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal-overlay-subscribe"
      onClick={() => setShowModal(false)}
    >
      <div
        className="modal-content-subscribe"
        onClick={(e) => e.stopPropagation()}
      >
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
              disabled={submitted || loading}
            />
            <button
              className="sign-up-button"
              type="submit"
              disabled={submitted || loading}
            >
              {loading ? (
                <span className="loader"></span>
              ) : submitted ? (
                "SUBMITTED!"
              ) : (
                "SUBSCRIBE"
              )}
            </button>
          </form>
        </div>
        <div className="modal-footer-subscribe"></div>
      </div>
    </div>
  );
}
