import { baseURL } from '../variables'

export async function getUserEvents(userName) {
    const response = await fetch(`${baseURL}${userName}/events`)
    return await response.json()
}
