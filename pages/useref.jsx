import { useRef } from 'react'

import Input from '../src/components/input/input'

export default function UseRefPage() {
  const numero = useRef(10)
  const inputRef = useRef(null)
  const componentInputRef = useRef(null)

  const handleButtonFocus = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <div>
        <h4>UseRef exemplo</h4>
        <p>Numero: {numero.current}</p>
      </div>
      <div>
        <h4>Exemplo com referência no input do HTML</h4>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonFocus}>Foco no input</button>
      </div>
      <div>
        <h4>Exemplo com referência no input componente:</h4>
        <Input type="text" ref={componentInputRef} />
        <button onClick={() => componentInputRef.current.focus()}>Foco no input</button>
      </div>
    </>
  )
}
