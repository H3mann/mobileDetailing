import React, { Component} from 'react';

 


 class Test extends Component {
   constructor(props) {
     super(props);
 
     this.state = {
       people: []
     };
   }
 
   render() {
     
 
     return (
       <div>
         <h1>HELLO!!</h1>
       </div>
     );
   }
 }

 export default Test;

//  <Provider store={store}>
// 	<App />
// </Provider>,


//  const store = createStore(rootReducer, applyMiddleware(thunk));
// // store.dispatch(init());
// export const history = syncHistoryWithStore(browserHistory, store);


