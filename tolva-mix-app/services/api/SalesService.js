import BaseService from "@/services/BaseService";

export default class SalesService extends BaseService {
  constructor({ DB }) {
    super(DB.sales);
  }
}
