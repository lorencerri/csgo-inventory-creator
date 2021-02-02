import { Jumbotron, Container, Table, Navbar, Nav } from 'react-bootstrap';

import weapons from '../Data/weapons.json';

export const Content = () => (
	<Jumbotron fluid style={{ margin: 0, backgroundColor: '#313131' }}>
		<Container className='shadow-5' style={{ padding: 0 }}>
			<Navbar
				variant='dark'
				style={{
					backgroundColor: '#414141',
					borderRadius: '5px 5px 0px 0px',
				}}
			>
				<Navbar.Brand href='#home'>CSGO Items</Navbar.Brand>
				<Nav className='mr-auto' />
				<Navbar.Collapse className='justify-content-end'>
					<Navbar.Text>
						Total: <span style={{ color: 'white' }}>$XX</span>
					</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>
			<Table
				striped
				style={{
					backgroundColor: '#f8f9fa',
					borderRadius: '0px 0px 5px 5px',
				}}
			>
				<thead>
					<tr>
						<th>Weapon</th>
						<th>Skin</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody
					style={{
						borderRadius: '0px 0px 5px 5px',
					}}
				>
					{Object.keys(weapons).map(category => (
						<>
							<tr>
								<td colSpan='3'>
									<b>{category}</b>
								</td>
							</tr>
							{Object.keys(weapons[category]).map(weapon => (
								<tr>
									<td width='30%'>{weapon}</td>
									<td width='50%'>
										<input
											className='form-control form-control-sm'
											size='sm'
											type='text'
											placeholder='Skin'
											defaultValue={localStorage.getItem(
												`${weapon}-skin`
											)}
											onChange={({ target }) => {
												localStorage.setItem(
													`${weapon}-skin`,
													target.value
												);
											}}
										/>
									</td>
									<td width='20%'>
										<input
											className='form-control form-control-sm'
											size='sm'
											type='number'
											placeholder='Price'
											defaultValue={localStorage.getItem(
												`${weapon}-price`
											)}
											onChange={({ target }) => {
												localStorage.setItem(
													`${weapon}-price`,
													target.value
												);
											}}
										/>
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
