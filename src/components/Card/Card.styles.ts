import styled from 'styled-components'

export const CardBlock = styled.div`
  flex-shrink: 0;
  width: 225px;
  height: 225px;
  transition:
    transform 0.5s linear,
    box-shadow 0.5s linear;
  position: relative;

  & img {
    width: 225px;
    height: 225px;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.14);
    box-shadow:
      0px 9px 18px 0px rgba(0, 0, 0, 0.18),
      0px 6px 5px 0px rgba(0, 0, 0, 0.24);
  }
`

export const LikeBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: -16px;
  width: 257px;
  height: 60px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 58.85%);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;
  pointer-events: none;

  ${CardBlock}:hover & {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`
