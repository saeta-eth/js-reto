import React, { Component } from 'react'
import {
  inject, 
  observer
} from 'mobx-react'
import {
  Table,
  Column,
  Cell
} from 'fixed-data-table'
import TextCell from './TextCell'
import { removeWhiteSpace } from '../../utils/Table'

@inject("store") @observer
export default class OwnTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columnWidths: {
        ProductName: 200,
        Category: 170,
        Brand: 120,
        Height: 130,
        Width: 130,
        Notes: 250
      },
      columsName: [
        'Product Name',
        'Category',
        'Brand',
        'Height',
        'Width',
        'Notes'
      ]
    }
    this._fillColumsTable = this._fillColumsTable.bind(this)
  }

  _fillColumsTable () {
    const { rows } = this.props
    const { columnWidths, columsName } = this.state
    const colums = columsName.map((name, index) => {
      return  <Column
        columnKey={removeWhiteSpace(name)}
        key={removeWhiteSpace(name)}
        header={<Cell>{name}</Cell>}
        cell={<TextCell data={rows} col={removeWhiteSpace(name)} />}
        width={columnWidths[removeWhiteSpace(name)]}
        isResizable={true}
      />
    })

    return colums
  }

  render () {
    const { rows } = this.props
    return (
      <Table
        rowHeight={50}
        headerHeight={50}
        rowsCount={rows.length}
        isColumnResizing={false}
        width={1000}
        height={400}
       >
        {this._fillColumsTable()}
      </Table>
    )
  }
}
