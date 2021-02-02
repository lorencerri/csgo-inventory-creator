import {
	Jumbotron,
	Container,
	Table,
	Navbar,
	Nav,
	Form,
} from 'react-bootstrap';

import weapons from '../Data/weapons.json';

export const Content = () => {
	console.log(weapons);

	return (
		<Jumbotron fluid style={{ margin: 0 }}>
			<Container>
				<Navbar bg='dark' variant='dark'>
					<Navbar.Brand href='#home'>CSGO Items</Navbar.Brand>
					<Nav className='mr-auto' />
					<Navbar.Collapse className='justify-content-end'>
						<Navbar.Text>
							Total: <span style={{ color: 'white' }}>$XX</span>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
				<Table striped bordered>
					<thead>
						<tr>
							<th>Weapon</th>
							<th>Skin</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(weapons).map(category => (
							<>
								<tr>
									<td colSpan='3'>
										<b>{category}</b>
									</td>
								</tr>
								{Object.keys(weapons[category]).map(weapon => (
									<tr>
										<td>{weapon}</td>
										<td>
											<Form.Control
												size='sm'
												type='text'
												placeholder='Skin'
											/>
										</td>
										<td>
											<b>$XX</b>
										</td>
									</tr>
								))}
							</>
						))}
					</tbody>
				</Table>
			</Container>
		</Jumbotron>
	);
};
