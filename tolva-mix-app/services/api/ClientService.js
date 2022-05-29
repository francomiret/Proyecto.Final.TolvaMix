import BaseService from "@/services/BaseService";

export default class ProductService extends BaseService {
  constructor({ DB }) {
    super(DB.clients);
  }

  create(item) {
    item.title = item.name + ' - CUIT: ' + item.cuit
    return super.create(item);
  }
}
