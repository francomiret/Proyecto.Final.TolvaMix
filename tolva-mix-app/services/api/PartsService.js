import BaseService from "@/services/BaseService";

export default class PartsService extends BaseService {
  constructor({ DB }) {
    super(DB.parts);
  }
}
