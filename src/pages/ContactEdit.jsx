import { Component } from 'react'
import { ContactService } from '../services/contact.service'

export class ContactEdit extends Component {

    state = {
        contact: ContactService.getEmptyContact()
    }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        if (contactId) {
            try {
                const contact = await ContactService.getContactById(contactId)
                this.setState({ contact })
            } catch (error) {
                console.log('error:', error)
            }
        }
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        try {
            await ContactService.saveContact({ ...this.state.contact })
            this.props.history.push('/Contact')
        } catch (error) {
            console.log('error:', error)
        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break;
        }
        this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
    }

    render() {
        const { contact } = this.state
        const { name, phone, email } = contact
        return (
            <section className='contact-edit'>
                <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
                <form onSubmit={this.onSaveContact} >

                    <section>
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={this.handleChange} type="text" name="name" id="name" placeholder='Name' />
                    </section>

                    <section>
                        <label htmlFor="phone">Phone</label>
                        <input value={phone} onChange={this.handleChange} type="text" name="phone" id="phone" placeholder='Phone' />
                    </section>
                    <section>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={this.handleChange} type="text" name="email" id="email" placeholder='Email' />
                    </section>


                    <button>Save</button>
                </form>
            </section>
        )
    }
}
