import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
require('react-datepicker/dist/react-datepicker.css');
 
var Calendar = React.createClass({
  displayName: 'Example',
 
  getInitialState: function() {
    return {
      startDate: moment()
    };
  },
 
  handleChange: function(date) {
    this.setState({
      startDate: date
    });
    console.log('insideCalendar',this.state.startDate._d)
  },
 
  render: function() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        popoverAttachment="bottom center"
        popoverTargetAttachment="top center"
        popoverTargetOffset="0px 0px" />;
  }
});

export default Calendar