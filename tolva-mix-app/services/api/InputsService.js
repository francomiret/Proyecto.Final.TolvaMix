import BaseService from "@/services/BaseService";

export default class InputService extends BaseService {
  constructor({ DB }) {
    super(DB.inputs);
  }
}
