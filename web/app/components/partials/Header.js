import React from 'react';
import NavLink from './NavLink';

class Header extends React.Component {

	constructor(props) {
	    super(props);
	};

	render(){
		return (
			<nav className="navbar navbar-default">
		      <div className="container">
		        <div className="navbar-header">
							<h3><NavLink to="/" className="appHeader">Investment Portfolio</NavLink></h3>
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		        </div>
		        <div id="navbar" className="collapse navbar-collapse">

							<ul className="nav navbar-nav">
		            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
								  <li><NavLink to="/questions">Questions</NavLink></li>
									<li><NavLink to="/portfolio">Portfolio</NavLink></li>
								 <li><a href="/about">About</a></li>
		             <li><a href="/contact">Contact</a></li>
							</ul>
		        </div>
		      </div>
    		</nav>
		);
	};
};

export default Header;
