import styled from 'styled-components'

interface ButtonContainerProps {
  isActive?: boolean
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  color: ${props => (props.isActive ? '#ffffff' : 'rgb(255, 255, 255, .7)')};
  padding: 23px;
  background-color: ${props => (props.isActive ? '#1E88E5' : '#2196F3')};
  cursor: pointer;

  &:hover {
    transition: all 0.3s linear;
    background-color: #1e88e5;
    color: #ffffff;
  }
`
export default ButtonContainer
