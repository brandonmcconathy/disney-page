export default function Closed({data}:any) {

  const { name } = data

  return(
    <div>
      <h1>{name}</h1>
      <h2>Closed</h2>
    </div>
  )
}