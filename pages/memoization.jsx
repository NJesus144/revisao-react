import { useState, useCallback, memo } from 'react'

const Button = memo(({ handleClick, name }) => {
  console.log(`Renderizado botao ${name}`)
  return <button onClick={handleClick}>{name}</button>
})

Button.displayName = 'Memo Button'

export default function MemoizationPage() {
  console.log('Renderizado contador')
  const [contadorUm, setContadorUm] = useState(0)
  const [contadorDois, setContadorDois] = useState(0)

  const memoizedContadorUm = useCallback(() => {
    setContadorUm(contadorUm + 1)
  }, [contadorUm])

  const memoizedContadorDois = useCallback(() => {
    setContadorDois(contadorDois + 1)
  }, [contadorDois])

  return (
    <div>
      <div>
        {contadorUm} - {contadorDois}
      </div>
      <Button handleClick={memoizedContadorUm} name="Botão UM"></Button>
      <Button handleClick={memoizedContadorDois} name="Botão DOIS"></Button>
    </div>
  )
}
