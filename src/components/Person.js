
 import React, {PropTypes} from 'react';
 
 const Person = (person) => {
 	console.log(person.person)
 	

   return (
     <div>
       {person.person.lastname}, {person.person.firstname}
     </div>
   );
 };
 
 Person.propTypes = {
   person: PropTypes.object.isRequired
 };
 
 export default Person;