import { useState } from 'react'

import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleLabelClick = () => {
    console.log('Handle label click')
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('Handle submit form')
  }

  const handleChangeInput = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  return (
    <>
      <Title>Formulário de login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Title>Titulo da pagina</Title>
        <Input type="text" placeholder="Digite seu e-mail" onChange={handleChangeInput} />
        <p>{email}</p>
        <Button>Botão dentro do form</Button>
      </form>
      <Button onClick={handleLabelClick}>Botão fora do form</Button>
      <label>LABEL TESTE</label>
      <button>Button</button>
    </>
  )
}
