import React from 'react';
import "./Pager.css";

function Pager(pages, setPages) {
   
    const goToPreviousPage = () => {
        setPages(pages - 1);
      };
      const goToNextPage = () => {
        setPages(pages + 1);
      };
    return (
        <div className="pagination">
            <button
            onClick={goToPreviousPage}
            className={`prev ${pages === 1 ? "disabled" : ""}`}
            >
                prev
            </button>
            <button onClick={goToNextPage} className="next">
             Next
            </button>
        </div>
    )
}

export default Pager;
