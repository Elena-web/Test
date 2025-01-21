import HeaderContainer from './Header.styles'
import Container from '../Container/Container'
import Button from '../Button/Button'

interface HeaderProps {
  onShowLiked: (showLiked: boolean) => void
  showLiked: boolean
}

const Header: React.FC<HeaderProps> = ({ onShowLiked, showLiked }) => {
  return (
    <HeaderContainer>
      <Container>
        <Button
          title={'Все котики'}
          onClick={() => onShowLiked(false)}
          isActive={!showLiked}
        />
        <Button
          title={'Любимые котики'}
          onClick={() => onShowLiked(true)}
          isActive={showLiked}
        />
      </Container>
    </HeaderContainer>
  )
}

export default Header
