import { Component } from 'react'
import { UserService } from '../services/user.service'



export class SignUpPage extends Component {

    state = {
        userCred: {
            name: '',
        }
    }

    onSignUp = (ev) => {
        ev.preventDefault()
        console.log(ev)

        try {
            this.props.onSignUp(this.state.userCred);

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
                <form className="sing-up" onSubmit={this.onSignUp} >
                    <i className="fa-brands fa-bitcoin"></i>
                    <label htmlFor="name">Please enter your name :</label>
                    <input value={name} onChange={this.handleChange} type="text" name="name" id="name" placeholder='Name' />
                    <button className='custom-button'>sing up</button>
                </form>
            </section>
        )
    }
}
