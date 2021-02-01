import { Navbar } from 'react-bootstrap';

export const Header = () => (
	<Navbar bg='dark' variant='dark'>
		<Navbar.Brand href='#home'>CSGO Inventory Creator</Navbar.Brand>
		<Navbar.Collapse className='justify-content-end'>
			<Navbar.Text>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://twitter.com/lorencerri'
				>
					@lorencerri
				</a>
			</Navbar.Text>
		</Navbar.Collapse>
	</Navbar>
);
