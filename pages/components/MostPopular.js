import VideoList from './VideoList'
import fetch from 'isomorphic-unfetch'

const MostPopular = ({ statusCode, mediaItems }) => {
    console.log(mediaItems)

    return (
        <VideoList heading="Most Popular" data={mediaItems} errorMessage="There seem to be no popular items!" />
    )
}

MostPopular.getInitialProps = async () => {
    const response = await fetch(`http://localhost:3000/api/getMediaItems?limit=5?sortMode=POPULARITY?sortDirection=ASC`)
    console.log(response)
    const statusCode = response.status

    if (statusCode !== 200) return { statusCode }

    const data = await response.json()
    console.log(data)
    return { statusCode: 200, ...data }
}


export default MostPopular