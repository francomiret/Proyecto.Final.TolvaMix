export default class ProductService {
  items = [
    {
      id: 1,
      title: 'Tolva mono eje #1',
      nextAvailableDate: '2022-06-21',
    },
    {
      id: 2,
      title: 'Tolva mono eje #2',
      nextAvailableDate: '2022-04-21',
    },
    {
      id: 3,
      title: 'Tolva doble eje #1',
      nextAvailableDate: '2022-03-26',
    },
    {
      id: 4,
      title: 'Tolva doble eje #2',
      nextAvailableDate: '2022-05-01',
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
