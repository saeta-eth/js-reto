import React, { Component } from 'react'
import {
	inject, 
	observer
} from 'mobx-react'
import { OwnTable } from '../OwnTable'
import Form from '../Form'
import SkyLight from 'react-skylight'
import FaSearch from 'react-icons/lib/fa/search'

@inject("store") @observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.productKeeper = {}
    this.pushIntoTheStore = this.pushIntoTheStore.bind(this)
    this.filterTable = this.filterTable.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
	}

	pushIntoTheStore (product) {
		this.refs.simpleDialog.hide()
		this.props.store.setNewRow(product)
	}

	handleKeyPress (e) {
		this.filterTable()
	}

	filterTable () {
		this.props.store.filter = this.refs.search.value
	}

	render() {
		const { store } = this.props
		const dialogStyles = {
			width: '50%',
			height: '450px'
		}

		return (
			<div className="page home">
				<main>
					<div className='header-home'>
						<div className='container-search'>
								<input type='text' ref='search' placeholder='Search' onKeyDown={this.handleKeyPress} />
								<FaSearch onClick={this.filterTable} />
						</div>
						<div className='container-dialog'>
							<button className='button-orange' onClick={() => this.refs.simpleDialog.show()}>
								<span>+</span> 
								Product Keeper
							</button>
							<SkyLight dialogStyles={dialogStyles} hideOnOverlayClicked ref="simpleDialog" title="Product Keeper">
			          <Form onSuccess={this.pushIntoTheStore} />
			        </SkyLight>
						</div>
					</div>
					<div className='container-home'>
						<OwnTable rows={store.productsFiltered} /> 
					</div>
				</main>
			</div>
		)
	}
}