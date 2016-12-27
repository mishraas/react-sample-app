import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './partials/Charts';

 var Portfolio = React.createClass({

   getInitialState(){
    return {
      config : {
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
        }]
      }
    }
  },

   render(){
     var element = React.createElement(Chart, { container: 'chart', options: this.state.config });
     return (
        element
     );
   }
 });

export default Portfolio;
