import { Component } from 'react'

export class MovesList extends Component {
    state = {
        user: null,
        moves: [],
        contact: null
    }

    componentDidMount() {
        if (this.props.user.moves)
            this.setState({ user: this.props.user, moves: [...this.props.user.moves] })
        if (this.props.contact)
            this.setState({ contact: this.props.contact })

    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            if (this.props.user.moves)
                this.setState({ moves: [...this.props.user.moves] })
            else
                this.setState({ moves: [] })
        }
    }

    render() {
        console.log('this .state moves', this.state)
        const { moves } = this.state

        if (!moves) return <div>...loading</div>

        let movesToRender = moves

        if (this.props.contact) {
            movesToRender = moves.filter(move => move.TO === this.props.contact.name)
        } else if (moves.length > 3) {
            movesToRender = moves.slice(-3)
        }

        return (
            <>
                <section className="moves-list">
                    <h2>{this.props.title} :</h2><hr></hr>
                    {movesToRender.map(move =>
                        <li key={move.id || moves.indexOf(move)}>
                            <h3>TO : {move.TO}</h3>
                            <h4>AT : {new Date(move.At).toLocaleString()}</h4>
                            <h5>amount: {move.amount} coins</h5>
                        </li>
                    )}
                </section>
            </>
        )
    }
}
