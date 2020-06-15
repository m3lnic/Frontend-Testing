import la1tvFetcher from '../../utilities/api/la1tv-fetcher'

const parseResponse = ({ mediaItems: { name, description, embed: { iframeUrl } } }) => ({
    name,
    description,
    embed: iframeUrl
})

const getMediaItems = async ({limit = '-1', sortMode = '', sortDirection = '', vodIncludeSetting = '', streamIncludeSetting = ''}) => {
    requestBuild = {
        limitEnc = limit !== '-1' ? `?limit=${limit}` : ``,
        sortModeEnc = sortMode !== '' ? `?sortMode=${sortMode}` : ``,
        sortDirectionEnc = sortDirection !== '' ? `?sortDirection=${sortDirection}` : ``,
        vodIncludeSettingEnc = vodIncludeSetting !== '' ? `?vodIncludeSetting=${vodIncludeSetting}` : ``,
        streamIncludeSettingEnc = streamIncludeSetting !== '' ? `?streamIncludeSetting=${streamIncludeSetting}` : ``,
    }

    const url = `mediaItems${requestBuild.limitEnc}${requestBuild.sortModeEnc}${requestBuild.sortDirectionEnc}${requestBuild.vodIncludeSettingEnc}${requestBuild.streamIncludeSettingEnc}`

    const { statusCode, body } = await la1tvFetcher({ url, parser: parseResponse })

    return { statusCode, ...body }
}

export default handle