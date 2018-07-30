import React, { Component } from 'react';

class Marguee extends Component {
	render() {
		let {mp3artist, mp3genre} = this.props;
		return (
			<section className="music-marquee">
				<div className="headings">
					{mp3artist} - {this.props.children} ({mp3genre})
				</div>
			</section>
		);
	}
}

export default Marguee;