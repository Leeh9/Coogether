import React, { useEffect, useState } from 'react';

// MUI
import { Stack } from '@mui/material';

// Swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/navigation';
// eslint-disable-next-line
import 'swiper/css/pagination';

// Component
import MyRecipe from './MyRecipe';

// Style
import { HistoryStyle, MyRecipeStyle } from './ProfileSwiperStyle';

// Image
import StepCountImage from '../../../../assets/img/list.png';
import IngredientCountImage from '../../../../assets/img/handbag.png';
import CookCategoryImage from '../../../../assets/img/cake-dome.svg';

export default function ProfileSwiper(props) {
  const { histories, recipes } = props;
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={48}
      breakpoints={{
        1536: {
          slidesPerView: 4,
        },
      }}
      slidesPerView={3}
      navigation
      // onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {histories &&
        histories.map(history => {
          return (
            <SwiperSlide key={history.id}>
              <HistoryStyle>
                <div className="history__image">
                  <img src={history.image} alt="요리 사진" />
                </div>
                <div className="history__text">
                  <div>
                    <h4 className="history__title">{history.title}</h4>
                    <div className="history__content">
                      <p className="cook">
                        {history.cooks.map(cook => {
                          return <span key={cook}>{cook}</span>;
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="date">{history.date}</p>
                </div>
              </HistoryStyle>
            </SwiperSlide>
          );
        })}
      {recipes &&
        recipes.map(recipe => {
          return (
            <SwiperSlide key={recipe.recipeId}>
              <MyRecipe recipe={recipe} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
