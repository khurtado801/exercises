import React, { Component } from 'react';
import Marquee from './Marquee';

class MP3Palyer extends Component {
	render() {
		return (
			<div className="audio-container">
				<h1>{this.props.title}</h1>
				<Marquee mp3artist="Bruce Chamoff" mp3genre="Rock">Blood</Marquee>
			</div>
		);
	}
}

export default  MP3Palyer;

