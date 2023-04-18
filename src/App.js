import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import './assets/scss/global.scss'
import { AppHeader } from './components/AppHeader'
import { HomePage } from './pages/HomePage';
import { ContactDetails } from './pages/ContactDetails';
import { ContactPage } from './pages/ContactPage';
import { About } from './pages/About';
import { ContactEdit } from './pages/ContactEdit';
import { Chart } from './components/Chart'
import { SingUpPage } from './pages/SignupPage'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>

        <main className="container">
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <Route path="/contact/:id" component={ContactDetails} />
            <Route path="/about" component={About} />
            <Route path="/Contact" component={ContactPage} />
            <Route path="/Chart" component={Chart} />
            {/* <Route path="/SingUp" component={SingUpPage} /> */}
            <Route path="/" component={HomePage} />


          </Switch>


        </main>
      </div>
    </Router>
  );
}

export default App;
