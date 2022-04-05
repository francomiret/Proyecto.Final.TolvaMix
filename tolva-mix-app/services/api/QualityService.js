import BaseService from '~/services/BaseService'
import Enum from "~/services/Enum";

export class QualityStatus extends Enum {
  static PENDING = new QualityStatus('PENDING')
  static APPROVED = new QualityStatus('APPROVED')
}

export class QualityDetailStatus extends Enum {
  static PENDING = new QualityDetailStatus('PENDING')
  static APPROVED = new QualityDetailStatus('APPROVED')
  static REJECTED = new QualityDetailStatus('REJECTED')
}

export default class QualityService extends BaseService {
  constructor({ DB }) {
    super(DB.qualityOrders);
  }
}
