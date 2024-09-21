import style from './style.module.css';

export function Header() {
	return (
		<header class={style.header}>
			<h1>carl + sierra</h1>
			<div class={style.subtitle}>
				<p>may 30, 2025</p>
				<p class={style.divider}>|</p>
				<p>denver, colorado</p>
				</div>
			<nav>
				<a href="/">home</a>
				<a href="/story">our story</a>
				<a href="/accommodations">accommodations</a>
				<a href="/things-to-do">things to do</a>
				<a href="/rsvp">rsvp</a>
				<a href="https://withjoy.com/carlsierra/registry" target="_blank">registry<img class='external-link-icon' src='assets/external-2.svg' /></a>
			</nav>
		</header>
	);
}
