import styled from 'styled-components'
import heartImage from '../../assets/img/favorite_border.svg'
import heartFilledImage from '../../assets/img/favorite-hover.svg'
import heartFavorite from '../../assets/img/favorite.svg'

interface HeartIconProps {
  isLiked: boolean
}

const HeartIconBlock = styled.button<HeartIconProps>`
  display: block;
  background-image: url(${props => (props.isLiked ? heartFavorite : heartImage)});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  padding: 5px 4px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  &:hover {
    background-image: url(${props => (props.isLiked ? heartFavorite : heartFilledImage)});
    background-size: contain;
  }
`

export default HeartIconBlock
