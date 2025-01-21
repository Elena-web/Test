import { useState } from 'react'
import { CardBlock, LikeBlock } from './Card.styles'
import HeartIcon from '../HeartIcon/HeartIcon'

interface CatImage {
  id: string
  url: string
}

interface CardProps {
  cat: CatImage
  onToggleLike: (cat: CatImage) => void
  likedCats: CatImage[]
}

const Card: React.FC<CardProps> = ({ cat, onToggleLike, likedCats }) => {
  const [showLike, setShowLike] = useState(false)
  const isLiked = likedCats.some(likedCat => likedCat.id === cat.id)

  return (
    <CardBlock
      onMouseEnter={() => setShowLike(true)}
      onMouseLeave={() => setShowLike(false)}
    >
      {cat && (
        <>
          <img
            src={cat.url}
            alt='Cat'
          />
          {showLike && (
            <LikeBlock>
              <HeartIcon
                onClick={() => onToggleLike(cat)}
                isLiked={isLiked}
              />
            </LikeBlock>
          )}
        </>
      )}
    </CardBlock>
  )
}

export default Card
