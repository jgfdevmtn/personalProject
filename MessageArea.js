import React, { Component } from 'react'
const request = require('request')

class MessageArea extends Component {
	constructor(props){
		super(props)
		this.state = {
			message: '',
			botResponse: ''
		}

		this.update = this.update.bind(this)
		this.keyTracker = this.keyTracker.bind(this)
	}
	
	update(e) {
		e.preventDefault()
		const post_options = {
			url: 'http://ab4a82db.ngrok.io/sms',
			method: 'POST',
			body: this.state.message
		}
		request(post_options, (err, res, body) => {
			if (err) console.log('Error: ' + err)
			this.setState({botResponse: body}) 	
		})
		
		console.log(this.botResponse)
		//this.renderText(this.message, this.botResponse)
	}
		
	/* renderText(message, response) {
		let messageArea = document.getElementsByClassName('message-area')[0]
		let messageText = document.createTextNode(message)
		let responseText = document.createTextNode(response)
		let messageTextDiv = document.createElement('div')
		let responseTextDiv = document.createElement('div')
		messageTextDiv.append(messageText)
		responseTextDiv.append(responseText)
		messageArea.append(messaageTextDiv)
		messageArea.append(responseTextDiv)
	}*/	

	keyTracker(e) {
		this.setState({message:e.target.value})
	}


	render() {
		return (
			<div className='message-container'>
				<div className='message-header'>
					<h3 className='message-with'>Chatbot</h3>	
				</div>
				<div className = 'message-area-container'>
					<div className='message-area'>
					</div>
				</div>
				<div className='input-area' id='input'>
					<form onSubmit={(e) => this.update(e)}>
						<input className='input-field' onChange={(e) => this.keyTracker(e)}  placeholder='Type to Chat ..'></input>
					</form>
				</div>
			</div>
		)
	}
}


export default MessageArea

