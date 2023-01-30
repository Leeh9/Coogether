import React from 'react';
import ReactDOM from 'react-dom';

import { BackdropStyle, ModalOverlayStyle } from './RecipeRegisterModalStyle';

import exampleImg from '../../../assets/img/한번에 넣기 이미지.png';

function Backdrop({ onClick }) {
  return <BackdropStyle onClick={onClick} />;
}

function ModalOveray({ onClick }) {
  return (
    <ModalOverlayStyle>
      <header>
        <h1>한번에 넣기</h1>
        <p>
          요리에 들어갈 재료, 양념을 작성 또는 이미 작성된 것을 복사/붙여넣기
          해주세요.
        </p>
      </header>
      <form>
        <div>
          <img src={exampleImg} alt="example-img" width="80%" />
        </div>
        <p>
          각 식재료는 쉼표(,)로 구분하고 재료 및 양념, 소스 등을 구분할 경우
          대괄호([]) 사용해주세요.
        </p>
        <div>
          <label htmlFor="ingredients-input" />
          <textarea id="ingredients-input" rows="10" cols="80" />
        </div>
        <div>
          <button type="button" id="confirm">
            확인
          </button>
          <button type="button" id="cancel" onClick={onClick}>
            취소
          </button>
        </div>
      </form>
    </ModalOverlayStyle>
  );
}

function RecipeRegisterModal({ onConfirm }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onConfirm} />,
        document.querySelector('#backdrop-root1')
      )}
      {ReactDOM.createPortal(
        <ModalOveray onClick={onConfirm} />,
        document.querySelector('#modal-root1')
      )}
    </>
  );
}

export default RecipeRegisterModal;
