import React from 'react';
import { useLocation } from 'react-router-dom';

import { DEFAULT_IMG } from 'constants/DEFAULT_IMG';

import { MovieLink, MoviesList, Title } from './MuviesList.styled';

const MuviesList = ({ muviesList, title }) => {
  const location = useLocation();

  return (
    <>
      <Title>{title}</Title>
      <MoviesList>
        {muviesList.map(({ id, original_title, poster_path, title }) => {
          return (
            <li key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : DEFAULT_IMG
                  }
                  alt={title}
                  width={266}
                  height={398}
                />
                <h2>{original_title}</h2>
              </MovieLink>
            </li>
          );
        })}
      </MoviesList>
    </>
  );
};

export default MuviesList;