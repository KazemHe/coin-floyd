import React, { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        filterBy: null
    }

    componentDidMount() {
        this.setState({ filterBy: { ...this.props.filterBy } })
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value

        this.setState(
            ({ filterBy }) => ({ filterBy: { ...filterBy, [field]: value } }),
            () => this.props.onChangeFilter(this.state.filterBy)
        )

    }

    render() {
        if (!this.state.filterBy) return <div>Loading...</div>
        const { model, type } = this.state.filterBy
        return (
            <form className='contact-filter'>
                <section>
                    <label htmlFor="term"></label>
                    <input onChange={this.handleChange} value={model} type="text" name="term" id="term" placeholder='search' />
                </section>

            </form>
        )
    }
}
