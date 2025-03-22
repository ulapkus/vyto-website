export default function Modal() {
  if (!showModal) return null;
  let pageTitle;
  if (currentPage === 0) {
    pageTitle = "Prologue";
  } else if (currentPage === 1) {
    pageTitle = "Chapter 1";
  } else {
    pageTitle = "Chapter 2";
  }

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
            <div className="prologue-text">{pageTitle}</div>
            {bookPages[currentPage].split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}
