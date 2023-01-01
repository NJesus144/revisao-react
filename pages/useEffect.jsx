import { useEffect, useState } from 'react'

export default function useEffectPage() {
  const [userList, setUserList] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('Componente inicializado')
  }, [])

  useEffect(() => {
    async function fetchData() {
      const request = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await request.json()
      setUserList(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log('Lista modificada')
  }, [userList])

  const handleForm = (event) => {
    event.preventDefault()
    setUserList([
      ...userList,
      {
        name
      }
    ])
    setName('')
  }

  return (
    <div>
      {userList.map((user, key) => (
        <div key={`user-${key}`}>{user.name}</div>
      ))}
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
    </div>
  )
}
