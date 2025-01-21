import './App.css'
import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Container from '../Container/Container'
import { CardsWrapper, LoadWrap } from '../Container/Container.styles'
import Card from '../Card/Card'

interface CatImage {
  id: string
  url: string
}

function App() {
  const [cats, setCats] = useState<CatImage[]>([])
  const [likedCats, setLikedCats] = useState<CatImage[]>([])
  const [showLiked, setShowLiked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const savedLikedCats = localStorage.getItem('likedCats')

    if (savedLikedCats) {
      setLikedCats(JSON.parse(savedLikedCats))
    }

    const fetchCats = async (pageNumber: number) => {
      setLoading(true)

      const headers = new Headers({
        'Content-Type': 'application/json',
        'x-api-key': 'DEMO-API-KEY',
      })

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: headers,
        redirect: 'follow',
      }

      try {
        const responses = await Promise.all(
          Array.from({ length: 30 }).map(() =>
            fetch(
              `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${pageNumber}&limit=1`,
              requestOptions
            ).then(response => response.json())
          )
        )

        if (responses.length === 0) {
          return
        }

        setCats(prevCats => prevCats.concat(responses.map((data: any) => data[0] as CatImage)))
      } catch (error) {
        console.log('Error fetching cats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCats(page)
  }, [page])

  useEffect(() => {
    localStorage.setItem('likedCats', JSON.stringify(likedCats))
  }, [likedCats])

  const toggleLike = (cat: CatImage) => {
    if (likedCats.includes(cat)) {
      setLikedCats(likedCats.filter(likedCat => likedCat.id !== cat.id))
    } else {
      setLikedCats([...likedCats, cat])
    }
  }

  const handleShowLiked = (showLiked: boolean) => {
    setShowLiked(showLiked)
  }

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget

    if (scrollHeight - scrollTop <= clientHeight + 50 && !loading) {
      setPage(prevPage => prevPage + 1)
    }
  }

  return (
    <>
      <Header
        onShowLiked={handleShowLiked}
        showLiked={showLiked}
      />
      <Container onScroll={handleScroll}>
        <CardsWrapper>
          {(showLiked ? likedCats : cats).map(cat => (
            <Card
              key={cat.id}
              cat={cat}
              onToggleLike={toggleLike}
              likedCats={likedCats}
            />
          ))}
          {loading && <LoadWrap>... загружаем еще котиков ...</LoadWrap>}
        </CardsWrapper>
      </Container>
    </>
  )
}

export default App
