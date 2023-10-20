'use client'

import axios from "axios"
import { useState, useEffect } from "react"

export default function Home() {

  const [data, setData] = useState([])

  useEffect( () => {

    axios.get('https://api.themeparks.wiki/v1/entity/7340550b-c14d-4def-80bb-acdb51d49a66/children').then((response) => {
      let temp : Array<object> = []
      response.data.children.map( (attraction: any) => {
        if (attraction.entityType == 'ATTRACTION') {
          temp.push(attraction)
        }
      })
      setData(temp)
    })

  },[])

  console.log(data)

  return (
    <div>

    </div>
  )
}
