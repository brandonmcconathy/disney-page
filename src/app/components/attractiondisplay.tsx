import Down from "./down"
import Operating from "./operating"
import Closed from "./closed"
import Refurbishment from "./refurbishment"

export default function AttractionDisplay({data}:any) {

  const { status } = data

  if (status == 'DOWN') {
    return(
      <Down data={data} />
    )
  }
  if (status == 'OPERATING') {
    return(
      <Operating data={data} />
    )
  }
  if (status == 'CLOSED') {
    return(
      <Closed data={data} />
    )
  }
  if (status == 'REFURBISHMENT') {
    return(
      <Refurbishment data={data} />
    )
  }

  return(
    <h1>ERROR</h1>
  )
}
