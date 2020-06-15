import la1tvFetcher from '../../utilities/api/la1tv-fetcher'

const parseResponse = ({ mediaItems: { name, description } }) => ({
    name,
    description,
})

const handle = async ({ query: { limit = '-1', sortMode = '', sortDirection = '', vodIncludeSetting = '', streamIncludeSetting = '' } }, res) => {
    const requestBuild = {
        limitEnc: limit !== '-1' ? `?limit=${limit}` : ``,
        sortModeEnc: sortMode !== '' ? `?sortMode=${sortMode}` : ``,
        sortDirectionEnc: sortDirection !== '' ? `?sortDirection=${sortDirection}` : ``,
        vodIncludeSettingEnc: vodIncludeSetting !== '' ? `?vodIncludeSetting=${vodIncludeSetting}` : ``,
        streamIncludeSettingEnc: streamIncludeSetting !== '' ? `?streamIncludeSetting=${streamIncludeSetting}` : ``,
    }

    const url = `mediaItems${requestBuild.limitEnc}${requestBuild.sortModeEnc}${requestBuild.sortDirectionEnc}${requestBuild.vodIncludeSettingEnc}${requestBuild.streamIncludeSettingEnc}`
    console.log(url)

    const { statusCode, body } = await la1tvFetcher({ url })
    console.log(body)

    res.status(statusCode).end(JSON.stringify(body))
}

export default handle