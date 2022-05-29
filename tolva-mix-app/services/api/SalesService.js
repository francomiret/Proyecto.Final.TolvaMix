import BaseService from "@/services/BaseService";

export default class SalesService extends BaseService {
  constructor({ DB }) {
    super(DB.sales);
  }

  create(item) {
    let newItem = super.create(item)
    newItem.number = '0000' + newItem.id
    newItem.title = '(#' + newItem.number + ') ' + newItem.product.title
    newItem.progress = '0.00'
    newItem.status = 'Pendiente de confirmación'
    return newItem
  }
}
