import { useEffect, useState } from "react"


const Api = () => {
  const [imgUrl, setUrl] = useState("")
  useEffect(() => {
    const URL = "https://dog.ceo/api/breeds/image/random"
    fetch(URL)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setUrl(res.message)

      })
  }, [])
  return (
    <div>
      {
        imgUrl == "" ? <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div> : <img src={imgUrl} alt="" />
      }
    </div>
  )
}

export default Api
