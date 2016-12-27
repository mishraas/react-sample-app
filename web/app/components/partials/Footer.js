import React from 'react';
import NavLink from './NavLink';

class Footer extends React.Component {

	constructor(props) {
	    super(props);
	};

	render(){
		return (
			<nav className="navbar navbar-default navbar-fixed-bottom">
				<div className="container">
					<div className="navbar-footer">
						<ul className="nav navbar-nav">
								<li><a href="/">All rights are reserved</a></li>
					  </ul>
					</div>
				</div>
			</nav>
		);
	};
};

export default Footer;
