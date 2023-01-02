import useFetch from '../src/hooks/useFetch'

export default function CustomHookPage() {
  const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h4>Exemplo hook</h4>
      {loading && <p>Carregando...</p>}
      {data?.map(({ id, name }) => (
        <div key={`item-${id}`}>{name}</div>
      ))}
    </div>
  )
}
