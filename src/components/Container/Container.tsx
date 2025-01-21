import React from 'react'
import { ContainerBlock } from './Container.styles'

interface ContainerProps {
  children: React.ReactNode
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void
}

const Container: React.FC<ContainerProps> = ({ children, onScroll }) => {
  return <ContainerBlock onScroll={onScroll}>{children}</ContainerBlock>
}
export default Container
