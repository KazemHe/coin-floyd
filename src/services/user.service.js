
import { storageService } from './storage.service'
export const UserService = {
    getUser,
    signUp,
    updateCoinBalance,
    // updateMoves
    // saveLocalUser
}

// const user =
// {
//     name: "Ochoa Hyde",
//     coins: 100,
//     moves: []
// }

function getUser() {
    const user = storageService.load('user')
    if (user) return user
    else return

}

function signUp(userCred) {
    userCred.coins = 100
    const user = storageService.store('user', userCred)
    return user
}

// function updateCoinBalance(user, coinValue) {

//     if (user.coins >= coinValue) {
//         const updatedUser = { ...user, coins: user.coins - coinValue }

//         storageService.store('user', updatedUser)
//         return updatedUser // Return the updated user object
//     } else {
//         return false; // Return false to indicate failure
//     }
// }


// function updateMoves(user, move) {
//     const moves = Array.isArray(user.moves) ? user.moves : JSON.parse(user.moves || '[]');
//     const updatedUser = { ...user, moves: [...moves, move] };
//     storageService.store('user', updatedUser);
//     return updatedUser; // Return the updated user object
// }

function updateCoinBalance(user, coinValue, move) {
    if (user.coins >= coinValue) {
        const updatedUser = { ...user, coins: user.coins - coinValue, moves: [...(Array.isArray(user.moves) ? user.moves : JSON.parse(user.moves || '[]')), move] };
        storageService.store('user', updatedUser);
        return updatedUser; // Return the updated user object
    } else {
        return false; // Return false to indicate failure
    }
}
