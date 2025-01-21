import ButtonContainer from './Button.styles'

export interface IButtonProps {
  title: string
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ title, isActive = false, onClick }: IButtonProps) => {
  return (
    <ButtonContainer
      isActive={isActive}
      onClick={onClick}
    >
      {title}
    </ButtonContainer>
  )
}

export default Button
