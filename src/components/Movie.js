import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, coverImg, title, summary }) {
  const summaryLimit = 300;
  return (
    <div className="movie">
      <img src={coverImg} alt={title} className="movie__img" />
      <div>
        <h2 className="movie__title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className="movie__summary">
        {summary.length > summaryLimit ? `${summary.slice(0, summaryLimit)}...` : summary}
      </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
