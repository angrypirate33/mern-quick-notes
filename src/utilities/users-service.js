// to import all named exports we use this syntax
import * as usersAPI from './users-api'

export async function signUp(userData) {
    // delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON web token.
    const token = await usersAPI.signUp(userData)
    return token
}