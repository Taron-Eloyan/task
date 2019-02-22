import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';


const Pagination = (props) => {
  const {page, totalPages, handlePageinationClick} = props;
  return (
    <div className="Pagination">
      <button className="Pagination-button" onClick={ () => handlePageinationClick("prev")} disabled={page === 1}> &larr; </button>
      {page} of {totalPages}
      <button className="Pagination-button" onClick={ () => handlePageinationClick("next")} disabled={page === totalPages}> &rarr; </button>
    </div>
  )
}


Pagination.PropTypes = {
  page : PropTypes.number.isRequired,
  totalpage : PropTypes.number.isRequired,
  handlePageinationClick : PropTypes.func.isRequired,
}


export default Pagination;
