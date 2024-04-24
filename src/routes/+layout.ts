import type { LayoutLoad } from './$types'

export const ssr = false

export const load: LayoutLoad = async ({ url }) => {
    
    return {
        url: url.pathname
    }
}