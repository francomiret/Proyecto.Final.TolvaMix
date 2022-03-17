export default class SalesService {
  items = [
    {
      id: 1,
      product: {
        id: 1,
        title: 'Tolva mono eje #1',
        nextAvailableDate: '2022-06-21',
      },
      deliveryDate: '2022-06-21',
      client: 'Pepe'
    },
  ]

  all() {
    return this.items
  }

  find(id) {
    id = Number.parseInt(id)
    return this.items.find((p) => p.id === id)
  }

  create(sale) {
    sale.id = this.items.length + 2
    this.items.push(sale)
  }
}
