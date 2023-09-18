
import { storageService } from './storage.service'
export const UserService = {
    getUser,
    signUp,
    updateCoinBalance,
    updateMoves
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
    else {
        return false
    }
}

// return {
//     name: "Ochoa Hyde",
//     coins: 100,
//     moves: []
// }

function signUp(userCred) {
    userCred.coins = 100
    const user = storageService.store('user', userCred)
    return user
}



function updateCoinBalance(user, coinValue, move) {
    if (user.coins >= coinValue) {
        const updatedUser = { ...user, coins: user.coins - coinValue, moves: [...(Array.isArray(user.moves) ? user.moves : JSON.parse(user.moves || '[]')), move] };
        storageService.store('user', updatedUser);
        return updatedUser; // Return the updated user object
    } else {
        return false; // Return false to indicate failure
    }
}


function updateMoves(user, move) {
    user.moves.push(move);
    storageService.store('user', user);
}