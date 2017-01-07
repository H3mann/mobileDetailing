import React from 'react'
import { Button, FormGroup, ControlLabel, FormControl, Form, HelpBlock, Col} from 'react-bootstrap';
import Calendar from './Calendar'

const UserInput = (props) => (

	<div>
		<Form horizontal>
			<FormGroup>
					<Col componentClass={ControlLabel} sm={1}>
					Car Model
					</Col>
				<Col sm={3}>
					<FormControl
						className='formInput'
						placeholder='car'
						type='text'
						onChange={props.handleCarChange}
						value={props.car} />
					<FormControl.Feedback />
				</Col>
			</FormGroup>

			<FormGroup>
					<Col componentClass={ControlLabel} sm={1}>
						Colour
					</Col>
				<Col sm={3}>
				<FormControl
					className='formInput'
					placeholder='colour'
					type='text'
					onChange={props.handleColourChange}
					value={props.colour} />
				<FormControl.Feedback />
				</Col>
			</FormGroup>

			<FormGroup>
					<Col componentClass={ControlLabel} sm={1}>
						Location
					</Col>
				<Col sm={3}>
				<FormControl
					className='formInput'
					placeholder='location'
					type='text'
					onChange={props.handleLocationChange}
					value={props.location} />
				<FormControl.Feedback />
				</Col>
			</FormGroup>

			<FormGroup>
					<Col componentClass={ControlLabel} sm={1}>
						Time
					</Col>
				<Col sm={3}>
				<FormControl
					className='formInput'
					placeholder='time'
					type='text'
					onChange={props.handleTimeChange}
					value={props.time} />
				</Col>
			</FormGroup>
				
				
		</Form>

	</div>

)

export default UserInput