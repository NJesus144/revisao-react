import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 10px 20px;
`

export default function Input(props) {
  return <StyledInput {...props} />
}
