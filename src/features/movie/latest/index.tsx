import styled from '@emotion/styled';
import React from 'react';
import useLatestMovie from './useLatestMovie';
import Card from '../../../components/Card';
const Base = styled.div``;

const Title = styled.h4``;
const getYear = (data: string) => data.split('-')[0];

const LatestMovieSection: React.FC = () => {
  const { data, isLoading } = useLatestMovie();
  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Card
          linkUrl={`/movie/${data.data.id}`}
          title={data.data.title}
          posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`}
          voteAverage={data.data.vote_average}
          year={getYear(data.data.release_date)}
        ></Card>
      )}
    </Base>
  );
};

export default LatestMovieSection;
