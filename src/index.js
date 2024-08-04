import { Router } from 'preact-router';

import { Header } from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Story from './routes/story';

import Accomodations from './routes/accommodations';
import Registry from './routes/registry';
import Rsvp from './routes/rsvp';
import ThingsToDo from './routes/thingsToDo';
import './style/index.css';

export default function App() {
    return (
        <div id="app">
            <Header />
			<main>
				<Router>
					<Home path="/" />
					<Story path="/story" />
					<Accomodations path="/accommodations" />
					<ThingsToDo path="/things-to-do" />
					<Rsvp path="/rsvp" />
					<Registry path="/registry" />
				</Router>
			</main>
        </div>
    );
}
