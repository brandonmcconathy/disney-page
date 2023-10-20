'use client'

import axios from "axios"
import { useState, useEffect } from "react"
import AttractionDisplay from "./components/attractiondisplay"

export default function Home() {

  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {

    axios.get('https://api.themeparks.wiki/v1/entity/bfc89fd6-314d-44b4-b89e-df1a89cf991e/live').then((response) => {
      const attractions : any[] = []
      response.data.liveData.map( (attraction: any) => {
        if (attraction.entityType == 'ATTRACTION') {
          attractions.push(attraction)
        }
      })
      attractions.map((attraction) => {

      })
      setData(attractions)
      setLoading(false)
    })

  },[])

  console.log(data)

  return (
    <main>
      {loading ? <h1>Loading</h1> : 
      <div>
        {data.map((attraction) => <AttractionDisplay data={attraction} key={attraction.id} /> )}
      </div>}

    </main>
  )
}
