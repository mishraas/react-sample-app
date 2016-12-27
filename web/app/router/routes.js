import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Portfolio from '../components/Portfolio';
import Home from '../components/partials/Home';
import Questions from '../components/partials/Questions';
import Question from '../components/partials/Question';


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/questions" component={Questions}></Route>
    <Route path="/portfolio" component={Portfolio}></Route>
  </Route>
);











// module.exports = (
//   <Route path="/" component={App}>
//     <IndexRoute component={Home}/>
//     <Route path="/repos" component={Repos}>
//       <Route path="/repos/:userName/:repoName" component={Repo}/>
//     </Route>
//     <Route path="/about" component={About}/>
//   </Route>
// );
