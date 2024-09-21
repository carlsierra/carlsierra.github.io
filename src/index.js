import { Route, Router } from 'preact-router';

import { Header } from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Story from './routes/story';

import { createHashHistory } from 'history';
import Accommodations from './routes/accommodations';
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
					<Route path="/rsvp" component={Rsvp} />
				</Router>
			</main>
        </div>
    );
}
