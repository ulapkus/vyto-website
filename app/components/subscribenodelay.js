import { useRef, useState } from "react";

export default function Subscribenodelay() {
  const formRef = useRef(null);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz01wL3Utoy9q86scYMmXCDU8EES-zk9mc2IMslrJBB85S7jxF5Y1dqP-QIy2b3WzOWxw/exec";

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
    <>
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
    </>
  );
}
