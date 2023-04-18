import { NavLink, Route } from "react-router-dom";

const Team = () => {
    return (
        <ul>
            <li>Moshe Girit</li>
            <li>Dan Gonzales</li>
            <li>Shimon Dicaprio</li>
        </ul>
    )
}

const Vision = () => {
    return (
        <ol>
            <li>Save the world with our wallet</li>
            <li>Take over the world with our wallet</li>
        </ol>
    )
}

export function About() {
    return (
        <section className="about">
            <section className="title-container">
                <h2>About us and mister-BITcoin</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla minus explicabo ipsum necessitatibus cupiditate facere corrupti, praesentium tempora molestias, accusantium repellendus, in quasi. Iste labore maxime, vitae nulla odit sint.</p>
            </section>

            <nav>
                <NavLink to="/about/team">Team</NavLink>
                <NavLink to="/about/vision">Vision</NavLink>
            </nav>

            <section>
                <Route path="/about/team" component={Team} />
                <Route path="/about/vision" component={Vision} />
            </section>
        </section>
    )
}
