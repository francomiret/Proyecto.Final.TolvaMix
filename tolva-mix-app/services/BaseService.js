import {cloneDeep, isInteger, isObject, sortBy} from 'lodash'

export class Query {
  constructor(items) {
    this.originalItems = items
    this.resultItems = items
  }

  get() {
    const result = this.resultItems
    this.resultItems = this.originalItems
    return result
  }

  where(key, op, value) {
    this.resultItems = this.resultItems.filter((item) => this.compare(item[key], op, value))
    return this
  }

  compare(current, op, expected) {
    if (expected === undefined) {
      return this.compare(current, '=', expected)
    }
    expected = this.normalize(expected)
    current = this.normalize(current)
    if (op === '=') {
      return current === expected
    }
    if (op === '!=') {
      return current !== expected
    }
    if (op === '>') {
      return current > expected
    }
    if (op === '<') {
      return current < expected
    }
    throw new Error(`Unsupported comparator ${op}`)
  }

  normalize(value) {
    return isObject(value)? value.toString() : value
  }

  orderBy(key, order = 'asc') {
    sortBy(this.resultItems, [key], [order])
    return this
  }

  orderByAsc(key) {
    return this.orderBy(key)
  }

  orderByDesc(key) {
    return this.orderBy(key, 'desc')
  }
}

export default class BaseService {
  items = []

  all() {
    return this.items
  }

  find(id) {
    id = Number.parseInt(id)
    return cloneDeep(this.items.find((p) => p.id === id))
  }

  create(item) {
    item.id = this.items.length + 2
    this.items.push(item)
  }

  delete(item) {
    const id = isInteger(item)? item : item.id
    this.items = this.items.filter(i => i.id !== id)
  }

  update(id, values) {
    let item = this.find(id)
    this.save({...item, ...values})
  }

  save(item) {
    const key = this.items.findIndex(i => i.id === item.id)
    this.items[key] = item
  }

  query() {
    return new Query(this.items)
  }

  where(key, op, value) {
    return this.query().where(key, op, value)
  }
}
