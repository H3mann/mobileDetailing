import React from 'react'

const UserInput = (props) => (

<div>
	<h1> Input Your Info Here </h1>

<input className='formInput'
placeholder='car'
type='text'
onChange={props.handleCarChange}
value={props.car} />

<input className='formInput'
placeholder='colour'
type='text'
onChange={props.handleColourChange}
value={props.colour} />

<input className='formInput'
placeholder='location'
type='text'
onChange={props.handleLocationChange}
value={props.location} />

<input className='formInput'
placeholder='time'
type='text'
onChange={props.handleTimeChange}
value={props.time} />

</div>

)

export default UserInput