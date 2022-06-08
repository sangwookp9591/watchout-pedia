import React from 'react';
import ReactSlider, { Settings } from 'react-slick';
import styled from '@emotion/styled';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { css } from '@emotion/react';
//npm i react-slick

//npm i @types/react-slick -D

interface Props {
  settings?: Settings;
  children: React.ReactNode;
}

const ArrowButton = styled.button<{ position?: 'left' | 'right' }>`
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: #fff;
  ${({ position }) =>
    position === 'left'
      ? css`
          left: 0;
          transform: translate(-50%, -50%);
        `
      : css`
          right: 0;
          transform: translate(50%, -50%);
        `}
  $:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;

const DEFAULT_SETTINGS: Settings = {
  dots: false, //하단 인디케이터 노출 막기 슬라이드 밑에 점으로 나타내는 것을 보여주냐 여부 설정
  arrows: true, // 좌우 이동할수있는 화살표 표시여부
  infinite: false, // 마지막 슬라이더로 갔을때 처음으로 이동할것인지 여부
  speed: 500,
  slidesToShow: 5, //슬라이더당 표시될 화면의 갯수
  slidesToScroll: 5, //scroll 할때마다 표시되는 슬라이더 수
  swipe: true,
  draggable: true,
  //custom 화살표 버튼을 사용하기 위해
  prevArrow: (
    <ArrowButton position="left">
      <MdArrowBackIos />
    </ArrowButton>
  ),
  //custom 화살표 버튼을 사용하기 위해
  nextArrow: (
    <ArrowButton position="right">
      <MdArrowForwardIos />
    </ArrowButton>
  ),
};

//settings는 기본값으로 DEFAULT_SETTINGS는 가진다.

const Silder: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => {
  return <ReactSlider {...settings}>{children}</ReactSlider>;
};

export default Silder;
