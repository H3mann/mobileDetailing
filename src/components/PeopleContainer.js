import React, {PropTypes, Component} from 'react';
 import {connect} from 'react-redux';
 import {bindActionCreators} from 'redux';
 import * as peopleActions from '../actions/people-actions';
 import PeopleList from './PeopleList';
 import PersonInput from './PersonInput';
 import App from '../../src/App'
 
 class PeopleContainer extends Component {
   constructor(props) {
     super(props);
 
     // this.state = {
     //   people: []
     // };
   }
 
   render() {
     const {people} = this.props;
     console.log('this.props',this.props)
     console.log('yoo',{people})
     console.log('actions',this.props.addPerson)
 
     return (
       <div>
         <PersonInput addPerson={this.props.addPerson} />
         <PeopleList people={people} />
       </div>
     );
   }
 }
 
 // PeopleContainer.propTypes = {
 //   people: PropTypes.array.isRequired,
 //   actions: PropTypes.object.isRequired
 // };
 
 function mapStateToProps(state, props) {
   return {
     people: state.people
   };
 }
 
 function mapDispatchToProps(dispatch) {
   return  bindActionCreators({ ...peopleActions

   }, dispatch) 
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);

