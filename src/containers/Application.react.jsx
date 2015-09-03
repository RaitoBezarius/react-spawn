import React from 'react';
import {RouteHandler} from 'react-router';

import Header from 'containers/Header.react';
import Navbar from 'containers/Navbar.react';
import Footer from 'containers/Footer.react';

export default class Application extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<Navbar />
				<RouteHandler />
				<Footer />
			</section>
		);
	}
}
