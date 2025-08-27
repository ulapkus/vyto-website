import { useRef, useState } from "react";

export default function Subscribenodelay() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz01wL3Utoy9q86scYMmXCDU8EES-zk9mc2IMslrJBB85S7jxF5Y1dqP-QIy2b3WzOWxw/exec";

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
    </>
  );
}
