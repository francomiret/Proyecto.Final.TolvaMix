export default class Enum {
  constructor(value) {
    this.value = value
  }

  toString() {
    return this.value
  }

  equals(value) {
    return this.value === value.value
  }
}
