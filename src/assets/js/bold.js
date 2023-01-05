import styled from 'styled-components'

const BoldText = styled.b`
  color: ${(props) => props.color || '#000'};
  text-decoration: ${(props) => props.decoration || 'none'};
  ${(props) => props.size && `font-size: ${props.size}px;`}
`

export default BoldText
