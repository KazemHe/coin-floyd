import { Component } from 'react'
import { UserService } from '../services/user.service'
import { BitcoinService } from '../services/Bitcoin.service'
// import { ContactPage } from './ContactPage'
import { SignUpPage } from '../pages/SignupPage'
import { MovesList } from '../components/MovesList'


export class HomePage extends Component {

    state = {
        user: null,
        rate: null,

    }

    componentDidMount() {
        this.loadUser()
    }

    loadUser = async () => {
        try {
            const user = await UserService.getUser()
            this.setState({ user }, () => this.loadRate())
        } catch (err) {
            console.log('err:', err)
            return
        }
    }

    loadRate = async () => {
        try {

            console.log('rate')
            const rate = await BitcoinService.getRate(this.state.user.coins)

            console.log(rate)
            this.setState({ rate })
            console.log(rate)
        } catch (err) {
            console.log('err:', err)
        }
    }

    onSignUp = (ev) => {
        ev.preventDefault()
        console.log(ev)

        try {
            UserService.signUp(this.state.userCred);

        } catch (error) {
            console.log('error:', error)
        }
    }

    render() {

        const { user, rate } = this.state
        if (!user) return <SignUpPage />
        console.log(user)

        if (!rate) return <div>no rate..</div>

        return (
            <>
<h1 className="welcome">Welcome to Coin floyd</h1>

                <section className="user-home">
                    <h1>HELLO  {user.name}!</h1>
                    <h2><i className="fa-solid fa-coins"></i> coins : {user.coins}</h2>
                    <h2> <i className="fa-brands fa-bitcoin"></i> BTC : {rate}</h2>
                </section>
                <MovesList title={'youe last 3 moves'} user={user} />
            </>
        )


    }
}
