import React from 'react'
import Header from './partials/Header';
import Footer from './partials/Footer';


export default React.createClass({
  render() {
    return (
      <div>
          <Header /><div id="root" className="container">{this.props.children} </div><Footer />
      </div>
    )
  }
});
