import { Component } from 'react'
import { UserService } from '../services/user.service'

export class TransferFund extends Component {
    state = {
        contact: '',
        user: UserService.getUser(),
        amount: '',

    }

    componentDidMount() {
        this.setState({ contact: { ...this.props.contact } })
    }
    onTransferCoins = async (ev) => {
        ev.preventDefault()
        try {
            // ...
            await UserService.updateCoinBalance(this.state.user, this.state.amount, { TO: this.state.contact.name, At: Date.now(), amount: this.state.amount })
            const updatedUser = await UserService.getUser();
            this.setState({ user: updatedUser });

            // Call the callback function after successful transfer
            this.props.onTransferSuccess();

            // ...
        } catch (error) {
            console.log('error:', error)
        }
    }
    
    

    handleChange = ({ target }) => {
        const value = +target.value
        const field = target.name

        this.setState(
            { [field]: value },
            // () => this.props.onChangeFilter(this.state.amount)
        )
    }

    render() {
        return (
            <section>
                <form className="transfer" onSubmit={this.onTransferCoins}>
                    <label htmlFor="amount">Transfer coins to {this.state.contact.name}</label>
                    amount:
                    <input value={this.state.amount} onChange={this.handleChange} type="number" name="amount" id="amount" placeholder="amount" />
                    <button>Transfer</button>
                </form>
            </section>
        )
    }
}
