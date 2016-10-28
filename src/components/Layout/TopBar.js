import React, { Component } from 'react'

export default class TopBar extends Component {
	render() {
		return (
			<div className='main-topbar'>
				<div className='header-topbar'>
					<h1>{this.props.title}</h1>
				</div>
				<div className='bottom-topbar'></div>
			</div>
		)
	}
}