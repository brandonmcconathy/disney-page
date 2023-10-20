export default function Operating({data}:any) {

  const { name, queue } = data
  let wait = 0

  try{
    wait = queue.STANDBY.waitTime
    if (wait == null) {
      wait = 0
    }
  }
  catch(TypeError){
    wait = 0
  }

  return(
    <div>
      <h1>{name}</h1>
      <h2>Operating</h2>
      <h3>Wait - {wait}</h3>
    </div>
  )
}