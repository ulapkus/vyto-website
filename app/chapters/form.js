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
      const response = await fetch("https://formspree.io/f/meoalkzl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (response.ok) {
        setStatus({ submitted: true, submitting: false, error: null });
        setInputs({ email: "", message: "" });
        setTimeout(() => {
          setStatus({ submitted: false, submitting: false, error: null });
        }, 2000);
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
      {status.submitted && <div className="banner">Message sent!</div>}
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
          />
        </label>
        <div className="contact-form-button-container">
          <button
            type="submit"
            className="contact-form-button"
            disabled={status.submitting}
          >
            {status.submitting ? "Sending..." : "SUBMIT"}
          </button>
        </div>
        {status.error && <p className="error-message">{status.error}</p>}
      </form>
    </div>
  );
}
