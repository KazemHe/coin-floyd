import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {

    return (
        <article className='contact-preview info' >
            {/* <section onClick={() => onSelectContactId(contact._id)} className="info"> */}

            <Link to={`/contact/${contact._id}`} className="info">

                <img src={require(`../assets/imgs/contact.png`)} />
                <h2>{contact.name}</h2>
            </Link>
            {/* </section> }
            {/* <section className="actions">
                <button onClick={() => onRemoveContact(contact._id)} >X</button>
            </section> */}
            <section className="actions">

                <button onClick={() => onRemoveContact(contact._id)} >X</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
            </section>

        </article>
    )
}
