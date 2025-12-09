import { baseURL } from '../variables.js'

export async function getUserEvents(userName) {
    const response = await fetch(`${baseURL}${userName}/events`)
    return await response.json()
}
