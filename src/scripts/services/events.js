import { baseURL } from '/src/scripts/variables.js'

export async function getUserEvents(userName) {
    const response = await fetch(`${baseURL}${userName}/events`)
    return await response.json()
}
