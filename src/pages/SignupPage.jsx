import { Component } from 'react'
import { UserService } from '../services/user.service'



export class SingUpPage extends Component {

    state = {
        userCred: {
            name: '',
        }
    }

    onSingUp = (ev) => {
        ev.preventDefault()
        console.log(ev)

        try {
            UserService.signUp(this.state.userCred)
            // this.props.history.push('/')
        } catch (error) {
            console.log('error:', error)
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value

        this.setState(({ userCred }) => ({ userCred: { ...userCred, [field]: value } }))
    }

    render() {
        const { userCred } = this.state
        const { name } = userCred
        return (
            <section >
                <form className="sing-up" onSubmit={this.onSingUp} >
                    <i className="fa-brands fa-bitcoin"></i>
                    <label  htmlFor="name">Please enter your name :</label>
                    <input value={name} onChange={this.handleChange} type="text" name="name" id="name" placeholder='Name' />
                    <button>sing up</button>
                </form>
            </section>
        )
    }
}
