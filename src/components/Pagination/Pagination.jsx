import React from 'react'
import './Pagination.css'
const Pagination = ({ totalPages, currentPage, onPageChange }) => {

    const pages = [...Array(totalPages).keys()];

    return (
        <div className="pagination">
            <button
                disabled={currentPage === 0}
                onClick={() => onPageChange(currentPage - 1)}
            >
                &laquo;
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={currentPage === page ? 'active' : ''}
                    onClick={() => onPageChange(page)}
                >
                    {page + 1}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages-1}
                onClick={() => onPageChange(currentPage + 1)}
            >
                &raquo;
            </button>
            
        </div>
    )
}

export default Pagination