import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Hello.css'

const ContactForm = () => {
	const [formStatus, setFormStatus] = React.useState('Submit')
	const onSubmit = (e) => {
		/*e.preventDefault() */
		setFormStatus('Submitting...')
		const{name, email, matric, tele, contact} = e.target.elements
		let conFom = {
			name: name.value,
			email: email.value,
			matric: matric.value,
			tele: tele.value,
			contact: contact.value,
		}
		console.log(conFom)
	}
	return (
		<div className ="flex-container">
			<div className = "flex-child">
				<h2 className = "mb-3">Sign up</h2>
				<form onSubmit = {onsubmit}>
					<div className = "mb-3">
						<label className="formlabel" htmlFor="name">
							Name
						</label>
						<input className = "form-control" type="text" id="name" required />
					</div>
					<div className = "mb-3">
						<label className="formlabel" htmlFor="email">
							NTU email
						</label>
						<input className = "form-control" type="email" id="email" required />
					</div>
					<div className = "mb-3">
						<label className="formlabel" htmlFor="matric">
							Matric Number
						</label>
						<input className = "form-control" type="text" id="matric" required />
					</div>
					<div className = "mb-3">
						<label className="formlabel" htmlFor="tele">
							Telegram handle
						</label>
						<input className = "form-control" type="text" id="tele" required />
					</div>
					<div className = "mb-3">
						<label className="formlabel" htmlFor="contact">
							Contact number
						</label>
						<input className = "form-control" type="number" minLength="8" id="contact" required />
					</div>
					<button className="btn btn-danger" type="submit">
						{formStatus}
					</button>
				</form>
			</div>
			<div className="flex-child"> 
				
			</div>
		</div>
	)
}
export default ContactForm;
