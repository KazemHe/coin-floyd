import { Component } from 'react'
import { ContactService } from '../services/contact.service'
import { TransferFund } from '../components/TransferFund'
import { MovesList } from '../components/MovesList'
import { UserService } from '../services/user.service'

export class ContactDetails extends Component {

    state = {
        contact: null,
        user: null ,
        moves : []

    }

    componentDidMount() {
        this.loadContact();
        this.loadUser();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact();
        }
    }
    
    updateUserAfterTransfer = async () => {
        await this.loadUser();
    }

    loadContact = async () => {
        try {
            const contact = await ContactService.getContactById(this.props.match.params.id)
            this.setState({ contact })
        } catch (error) {
            console.log('error:', error)
        }
    }
    loadUser = async () => {
        try {
            const user = await UserService.getUser();
            this.setState({ user, moves: user.moves || [] }); // Set user and moves
        } catch (err) {
            console.log('err:', err);
            return;
        }
    }
    


    onBack = () => {
        this.props.history.push('/Contact')
    }
    render() {
        const { contact, user } = this.state
        if (!contact) return <div>Loading...</div>

        console.log('detail', contact)
        return (
            <>
                <section className='contact-details'>
                    <img src={require(`../assets/imgs/contact.png`)} />
                    <section>
                        <h3>name: {contact.name}</h3>
                    </section>
                    <section>
                        <h3>phone : {contact.phone}</h3>
                    </section>
                    <section>
                        <h3>email: {contact.email}</h3>
                    </section>
                    <button onClick={this.onBack}>Back</button>
                </section>
                <section>
                <TransferFund contact={contact} onTransferSuccess={this.updateUserAfterTransfer} />
                </section>
                <section>
                    <MovesList title={'your moves '} user={user} contact={contact} />
                </section>
            </>
        )
    }
}
