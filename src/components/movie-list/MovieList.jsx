import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from '../movie-card/MovieCard';

import tmdbApi, { category } from '../../api/tmdbApi';

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params: {} });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, [props.category, props.type, props.id]);

  return (
    <div className='movie-list'>
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <MovieCard item={item} category={props.category}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
