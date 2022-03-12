export default class ProductService {
  items = [
    {
      id: 1,
      title: 'Tolva mono eje #1',
      to: '/sales/sale/1',
    },
    {
      id: 2,
      title: 'Tolva mono eje #2',
      to: '/sales/sale/2',
    },
    {
      id: 3,
      title: 'Tolva doble eje #1',
      to: '/sales/sale/3',
    },
    {
      id: 4,
      title: 'Tolva doble eje #2',
      to: '/sales/sale/4',
    }
  ]

  all() {
    return this.items
  }

  find(id) {
    id = Number.parseInt(id)
    return this.items.find((p) => p.id === id)
  }
}
