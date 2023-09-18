import { Component } from 'react';
import { UserService } from '../services/user.service';
import { BitcoinService } from '../services/Bitcoin.service';
import { SignUpPage } from '../pages/SignupPage';
import { MovesList } from '../components/MovesList';

export class HomePage extends Component {

    state = {
        user: null,
        rate: null,
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = async () => {
        try {
            const user = await UserService.getUser();
            this.setState({ user }, () => this.loadRate());
        } catch (err) {
            console.log('err:', err);
            return;
        }
    }

    loadRate = async () => {
        try {
            console.log('rate');
            const rate = await BitcoinService.getRate(this.state.user.coins);
            console.log(rate);
            this.setState({ rate });
        } catch (err) {
            console.log('err:', err);
        }
    }

    onSignUp = async (userCred) => {
        try {
            await UserService.signUp(userCred);
            this.loadUser(); // Reload user data after signup
        } catch (error) {
            console.log('error:', error);
        }
    }

    render() {
        const { user, rate } = this.state;

        if (!user) {
            return <SignUpPage onSignUp={this.onSignUp} />;
        }

        if (!rate) {
            return <div>no rate..</div>;
        }

        return (
            <>
                <h1 className="welcome">Welcome to Coin floyd</h1>
                <section className="user-home">
                    <h1>HELLO  {user.name}!</h1>
                    <h2><i className="fa-solid fa-coins"></i> coins : {user.coins}</h2>
                    <h2> <i className="fa-brands fa-bitcoin"></i> BTC : {rate}</h2>
                </section>
                <MovesList title={'your last 3 moves'} user={user} />
            </>
        )
    }
}
