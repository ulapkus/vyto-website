import Prologue from "../chapters/prologue";
import Chapterone from "../chapters/chapterone";
import Chaptertwo from "../chapters/chaptertwo";
import Author from "../chapters/author";

export default function Modal({ showModal, setShowModal }) {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-button" onClick={() => setShowModal(false)}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="book-content">
            <div className="chapter-section">
              <Prologue />
            </div>
            <div className="chapter-section">
              <Chapterone />
            </div>
            <div className="chapter-section">
              <Chaptertwo />
            </div>
            <div className="chapter-section">
              <Author />
            </div>
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}
