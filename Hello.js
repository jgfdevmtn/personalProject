import React, { Component } from 'react'

class Hello extends Component {
	render() {
		return (
			<div>
				<h1 className='hello-text'>I am a Chatbot Messenger That Uses the Cleverbot and Twilio API!</h1>
				<h2 className='hello-text-me'>Try Texting Me @ 413-372-6049</h2>
				<div className='white-line'></div>
				<h3 className='hello-tech'>I was built with NodeJS, ExpressJS, and React!</h3>
			</div>			
		)
	}
}

export default Hello
