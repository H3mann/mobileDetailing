import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


class Stripe extends React.Component {


onToken = (token) => {
	fetch('/save-stripe-token', {
	    method: 'POST',
	    body: JSON.stringify(token),
	  }).then(response => {
	    response.json().then(data => {
	      alert(`We are in business, ${data.email}`);
	    });
	  });
	}


render () {

	  return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_hww3Q4mPXvxEY5zybYqmBvkF"
        panelLabel="Give Money"
  			amount={1000000}
  			currency="USD"
  			
      />
    )
  }



}

export default Stripe