import React from 'react'
import HeartIconBlock from './HeartIcon.styles'

interface HeartIconProps {
  onClick: () => void
  isLiked: boolean
}

const HeartIcon: React.FC<HeartIconProps> = ({ onClick, isLiked }) => {
  return (
    <HeartIconBlock
      onClick={onClick}
      isLiked={isLiked}
    />
  )
}

export default HeartIcon
