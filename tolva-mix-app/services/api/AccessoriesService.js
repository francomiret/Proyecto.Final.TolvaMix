import BaseService from "@/services/BaseService";

export default class AccessoriesService extends BaseService {
  constructor({ DB }) {
    super(DB.accessories);
  }
}
