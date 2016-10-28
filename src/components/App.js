import React, { Component } from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import {
	TopBar
} from './Layout'
import Home from './Home'
import NotFound from './NotFound'

@observer
export default class App extends Component {
	constructor(props) {
		super(props)
		this.store = this.props.store
	}
	render() {
		return (
			<BrowserRouter>
				<Provider store={this.store}>
					<div className="wrapper">
						<TopBar title="Product Keeper" />
						<Match exactly pattern="/" component={Home} />
						<Miss component={NotFound} />
						<DevTools />
					</div>
				</Provider>
			</BrowserRouter>
		)
	}
}