import { useState } from "react";

export default function Form() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    try {
      const response = await fetch("https://formspree.io/f/mgvlvvvr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (response.ok) {
        setStatus({ submitted: true, submitting: false, error: null });
        // ❌ removed setInputs(...) so values remain in fields
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: error.message,
      });
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Your email:
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
            required
            disabled={status.submitting || status.submitted}
          />
        </label>
        <label>
          Your message:
          <textarea
            name="message"
            placeholder="Message"
            value={inputs.message}
            onChange={handleChange}
            required
            disabled={status.submitting || status.submitted}
          />
        </label>
        <div className="contact-form-button-container">
          <button
            type="submit"
            className="contact-form-button"
            disabled={status.submitting || status.submitted}
          >
            {status.submitting ? (
              <span className="loader"></span>
            ) : status.submitted ? (
              "Submitted!"
            ) : (
              "Submit"
            )}
          </button>
        </div>
        {status.error && <p className="error-message">{status.error}</p>}
      </form>
    </div>
  );
}
