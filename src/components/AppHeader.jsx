import { Link, NavLink, withRouter } from "react-router-dom";


function _AppHeader(props) {

    // function onBack() {
    // props.history.goBack()
    // }


    return (
        <header className="app-header">
            <section className="container">
                {/* <h1 className="logo">mister bitcoin</h1> */}
                <section className="back">
                    {/* <button onClick={onBack} >Back</button> */}
                </section>
                <nav className="nav-bar">
                    <NavLink exact to="/" ><i className="fa-solid fa-house "></i></NavLink>
                    <NavLink to="/Contact"><i className="fa-solid fa-users"></i></NavLink>
                    <NavLink to="/chart"><i className="fa-solid fa-chart-line "></i></NavLink>
                    <NavLink to="/about">about</NavLink>
                </nav>
            </section>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)