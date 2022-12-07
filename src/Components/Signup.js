import React, { Component } from 'react'
import UserDetails from './userDetails'
import Storage12 from './Storage'
import Welcome from './Welcome'
import Card from './Card'
//import Storage1 from './Storage1'

export default class Signup extends Component {
	state = {
		step: 1,
		name: ' ',
		email: ' ',
		matric: ' ',
		contact: ' ',
		tele: ' ',
		project: ' ',
		start: ' ',
		end: ' '
	}

	prevStep = () => {
		const {step} = this.state;
		this.setState({step: step - 1});
	}

	nextStep = () => {
		const {step} = this.state;
		this.setState({step: step + 1});
	}

	handleChange = input => e => {
		this.setState({[input]: e.target.value});
	}

	render() {
		const {step} = this.state;
		const{name, email, matric, contact, tele, project, start, end} = this.state;
		const values = {name, email, matric, contact, tele, project, start, end}

		switch(step) {
			case 1: //unregistered
				return (
					<UserDetails
						nextStep={this.nextStep}
            			handleChange={ this.handleChange }
            			values={ values }
            		/>
				)
			case 2: 
				return (
					<Storage12
						nextStep={this.nextStep}
						//handleChange={this.handleChange}
						//values={ values }
					/>
				)
			default: 
		}
	}
}
