import { Route, Router } from 'preact-router';

import { Header } from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Story from './routes/story';

import { createHashHistory } from 'history';
import Accommodations from './routes/accommodations';
import Faq from './routes/faq';
import Rsvp from './routes/rsvp';
import ThingsToDo from './routes/thingsToDo';
import './style/index.css';



export default function App() {
    return (
        <div id="app">
            <Header />
			<main>
				<Router history={createHashHistory()}>
					<Route path="/" component={Home} />
					<Route path="/story" component={Story} />
					<Route path="/accommodations" component={Accommodations} />
					<Route path="/things-to-do" component={ThingsToDo} />
					<Route path="/faq" component={Faq} />
					<Route path="/rsvp" component={Rsvp} />
				</Router>
			</main>
			<div class='footer'>
				<div>c<img class='logo' src='assets/logo.png' />s</div>
			</div>
        </div>
    );
}
