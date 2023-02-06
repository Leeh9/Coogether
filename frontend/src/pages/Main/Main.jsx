import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// 라이브러리
import axios from 'axios';
import { Stack } from '@mui/material';

import StreamSwiper from '../../components/Wrapper/Box/StreamBox/StreamSwiper';
import * as S from './MainStyle';

function Main() {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [isIn, setIsIn] = useState(false);

  const user = useSelector(state => state.user.user_id);
  console.log(user);

  const getData = async () => {
    try {
      const refrigeratorDAta = await axios({
        // 유저 id 추가해야 함
        url: 'http://i8b206.p.ssafy.io:9000/myIngredient/list/total/1',
      });
      if (refrigeratorDAta.data.length > 0) {
        setIsIn(true);
      }

      const firstData = await axios({
        // 추후 수정
        url: 'http://i8b206.p.ssafy.io:9000/room/list?size=5',
      });
      // console.log(firstData);
      setFirst(firstData.data.content);

      const secondData = await axios({
        // 추후 수정
        url: 'http://i8b206.p.ssafy.io:9000/room/list?size=5',
      });
      // console.log(firstData);
      setSecond(secondData.data.content);

      const thirdData = await axios({
        // 추후 수정
        url: 'http://i8b206.p.ssafy.io:9000/room/list?size=5',
      });
      // console.log(firstData);
      setThird(thirdData.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <S.MainContainer>
      <Stack spacing={5} className="main">
        <h1>배너가 들어갈 위치</h1>
        <br />
        {isIn && (
          <div>
            <h1>재료기반 추천</h1>
            <StreamSwiper cookRoom={first} />
          </div>
        )}
        <div>
          <h1>시간임박 추천</h1>
          <StreamSwiper cookRoom={second} />
        </div>
        <div>
          <h1>선호분야 추천</h1>
          <StreamSwiper cookRoom={third} />
        </div>
      </Stack>
    </S.MainContainer>
  );
}
export default Main;
