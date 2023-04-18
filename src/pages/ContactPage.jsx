import { Component } from 'react'
import { ContactService } from '../services/contact.service'
import { ContactList } from '../components/ContactList'
// import { ContactDetails } from './ContactDetails'
import { ContactFilter } from '../components/ContactFilter'
import { Link } from 'react-router-dom'

export class ContactPage extends Component {

    state = {
        contacts: null,
        selectedContactId: null,
        filterBy: {
            term: '',
        }
    }

    componentDidMount() {
        this.loadContacts()
    }

    loadContacts = async () => {
        try {
            const contacts = await ContactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onRemoveContact = async (contactId) => {
        try {
            await ContactService.deleteContact(contactId)
            this.setState(({ contacts }) => ({
                contacts: contacts.filter(contact => contact._id !== contactId)
            }))

        } catch (error) {
            console.log('error:', error)
        }
    }


    onChangeFilter = (filterBy) => {
        this.setState({ filterBy: { ...filterBy } }, this.loadContacts)
    }

    render() {
        const { contacts, filterBy } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contact-page'>
                <Link to="/contact/edit"><i className="fa-solid fa-circle-plus"></i></Link>
                <ContactFilter filterBy={filterBy} onChangeFilter={this.onChangeFilter} />
                <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact} />
            </section>
        )
    }
}
