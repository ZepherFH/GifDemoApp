import { useState } from "react"
const GifsExpo = ({categories = []}) =>{
    const [urlList, setUrlList] = useState ([])
    const getGifs = async (categories) => {
        //let gifsList = []
        const responseList = await Promise.all(categories.map(async (category) => {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=OuC4J7kmlXyVhXMGZyboeHMleWQtHdnW&q=${categories}`
                )
            const apiResponse = await response.json()
            return apiResponse.data
            //console.log(apiResponse.data[0].images.fixed_width.url)
            /*gifsList = apiResponse.data.map((gif) =>{
                console.log(gif)
                return gif.images.fixed_width.url
            })*/
        }))
        let gifsList = []
        responseList.forEach((data) =>{
            data.forEach((item) => {
                gifsList = [...gifsList, item.images.fixed_width.url.split('?')[0]]
            })
        })
        setUrlList([...gifsList])
        //console.log(gifsList)
    }
    getGifs(categories)
    return (
    <>
        <div>
            {
                urlList.map((url) => {
                    return(
                        <img key={url} src={url}/>
                    )
                })
            }
        </div>
    </>
    )
}
export default GifsExpo