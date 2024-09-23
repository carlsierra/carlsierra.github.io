import './style.css';

export default function Accommodations() {
	return (
		<div class='page accommodations'>
			<h2>Accommodations</h2>
			<section>
				<h3>Limelight hotel</h3>
				<p>For the convenience of our guests we have reserved a block of rooms at The Limelight Hotel. 
					A limited number of rooms have been reserved at a nightly rate of $279. 
					Please make sure to use our booking link below or call to make a 
					reservation under “Johnson and Olthoff Wedding” to ensure you get the group rate.</p>
				<div class='hotelSection'>
					<img src='assets/limelight.jpg'/>
					<div>
						<div class='hotelInfo'>
							<i>The Limelight Hotel</i>
							<p>1600 Wewatta St, Denver, CO 80202</p>
							<p>(303) 323-0024</p>
							<p><a 
							href="https://www.limelighthotels.com/denver/reservations#/booking/step-1?arrive=5%2F29%2F2025&depart=5%2F31%2F2025&group=5644684"
							target="_blank"
							>booking link
								<img class='external-link-icon' src='assets/external-2.svg' />
							</a>
							</p>
						</div>
						<div>
							<p>key highlights</p>
							<ul>
								<li>Train access to/from airport <div class='walk-time'>1 minute walk</div></li>
								<li>close to welcome party <div class='walk-time'>4 minute walk</div></li>
								<li>it is the Wedding Shuttle pickup / drop off location</li>
								<li>On-Site Restaurant/Bar, with many more walkable</li>
								<li>Discounted nightly rate and amenity fee </li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h3>Hotel Indigo</h3>
				<p>We have also reserved an additional block of rooms at Hotel Indigo. 
					A limited number of rooms have been reserved at a nightly rate of $209. 
					Please make sure to use our booking link below or call to make a reservation under “Johnson Wedding” to ensure you get the group rate.
				</p>
				<div class='hotelSection indigo'>
					<img src='assets/indigo.jpg'/>
					<div>
						<div class='hotelInfo'>
							<i>Hotel Indigo Denver Downtown-Union Station</i>
							<p>1801 Wewatta St, Denver, CO 80202</p>
							<p>(303) 623-4422</p>
							<p><a 
								href="http://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=DENWS&checkInDate=29&checkInMonthYear=042025&checkOutDate=31&checkOutMonthYear=042025&rateCode=6CBARC&_PMID=99801505&GPC=SCW&cn=no&viewfullsite=true"
								target='_blank'
								>booking link
								<img class='external-link-icon' src='assets/external-2.svg' />
								</a>
							</p>
						</div>
						<div>
							<p>key highlights</p>
							<ul>
								<li>Train access to/from airport <div class='walk-time'>5 minute walk</div></li>
								<li>close to welcome party <div class='walk-time'>8 minute walk</div></li>
								<li>Close to wedding shuttle pickup / drop off location <div class='walk-time'>4 minute walk</div></li>
								<li>On-Site Restaurant/Bar, with many more walkable</li>
								<li>No nightly amenity fee (ignore “additional charges” when reserving your room)</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class='travel'>
				<h3>Travel Details</h3>
				<p>When traveling from out of state you will have several options on getting from the airport to our hotel room blocks.</p>

				<ul>
					<li>The best and easiest is to train, as both our hotels are next to Union Station and this is a direct connection from the airport! Purchase an RTD Airport Day Pass for $10 on the RTD App or at the kiosk on the train platform. Children 19 and under ride for free.</li>
					<li>Uber or Lyft (rideshare usually winds up anywhere from $50-100 each way).</li>
					<li>Rent a car (it’s not needed if staying at our room blocks and please consider the nightly cost of parking, and, if you are looking for a trip to the mountains consider only renting for the needed time).</li>
				</ul>
			</section>
		</div>
	);
}
