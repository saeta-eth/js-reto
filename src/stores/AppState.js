import {
  observable,
  action,
  computed
} from 'mobx'

class AppState {
  @observable rowsTable
  @observable filter = ''

  constructor() {
    this.rowsTable = typeof(Storage) !== "undefined" ? JSON.parse(localStorage.getItem('rowsTable')) || [] : []
  }

  @action setNewRow(data) {
    this.rowsTable.push(data)
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('rowsTable', JSON.stringify(this.rowsTable));
    }
  }

  @computed get productsFiltered() {
    const matchesFilters = new RegExp(this.filter, 'i')
    return this.rowsTable.filter(product =>  
        !this.filter || 
        matchesFilters.test(product.ProductName) ||
        matchesFilters.test(product.Category) ||
        matchesFilters.test(product.Brand) ||
        matchesFilters.test(product.Height) ||
        matchesFilters.test(product.Width) ||
        matchesFilters.test(product.Notes)
    )
  }

  @action clearRows() {
    this.rowsTable = []
  }
  
}

export default AppState;