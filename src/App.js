import { useEffect } from 'react';
// import SteamMarketFetcher from 'steam-market-fetcher';

import { Header } from './Components/Header';
import { Content } from './Components/Content';

const App = () => {
	// const [state, setState] = useState({});

	useEffect(() => {
		const fetchMarketInfo = () => {
			// TODO: Fetch CS:GO Items
			// Limitations: You can't fetch enough items before Steam ratelimits you.
		};

		fetchMarketInfo();
	});

	// console.log(state);
	return (
		<>
			<Header />
			<Content />
		</>
	);
};

export default App;
