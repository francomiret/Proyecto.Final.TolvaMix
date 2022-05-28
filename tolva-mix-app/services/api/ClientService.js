import BaseService from "@/services/BaseService";

export default class ProductService extends BaseService {
  constructor({ DB }) {
    super(DB.clients);
  }
}
