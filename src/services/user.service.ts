import { User } from '../models/user'
import { storageService } from './storage.service'

export const userService = {
    getUser,
    signup,
    login,
    logout
}

const USER_KEY = 'user_db'

function getUser() {
    return storageService.load(USER_KEY)
}

function signup(user:User) {
    storageService.store(USER_KEY, user)
}

function login(email:string, password:string) {
    const user:User = {fullName: 'Guest User', email, password}
    storageService.store(USER_KEY, user)
}

function logout() {
    localStorage.removeItem(USER_KEY)
}




