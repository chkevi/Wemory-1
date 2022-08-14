import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export type ModalBaseProps = {
  /** 모달에 들어갈 컴포넌트 */
  /** 모달 창 생성 여부를 컨트롤할 변수 */
  visible: boolean
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  onClose: () => void
}

const MenuModal = ({ visible, onClose }: ModalBaseProps) => {
  return (
    <>
      <Background visible={visible} onClick={onClose} />
      <ModalSection visible={visible}>
        <Title>
          <CloseButton type="button" onClick={onClose}>
            X
          </CloseButton>
        </Title>
        <Content>안녕하세요</Content>
      </ModalSection>
    </>
  )
}

const fadeIn = keyframes`
	0% {
		transform: scaleX(0) scaleY(0.005);
	}
	50% {
		/* 0.5 초간 세로 크기는 작은상태로 가로 너비만 확대  */
		transform: scaleX(1) scaleY(0.005);
	}
	100% {
		/* 0.5 초간 세로 크기를 확대 */
		transform: scaleY(1) scaleX(1);
	}
`

const fadeOut = keyframes`
0% {
		transform: scale(1)
	}
	50% {
		transform: scaleX(1) scaleY(0.005);
	}
	100% {
		transform: scaleX(0) scaleY(0.005);
	}
`

const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  transition: visibility 0.15s ease-out;
`

const Background = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: #fff ${(props) => modalSettings(props.visible)};
`

const ModalSection = styled.div<{ visible: boolean }>`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
  ${(props) => modalSettings(props.visible)}
`

const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`

const Content = styled.div`
  padding: 16px 0;
`

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`

export default MenuModal
