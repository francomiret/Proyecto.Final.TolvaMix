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
  items = [
    {
      id: 1,
      title: 'Tolva mono eje #1',
      location: 'Depósito 1',
      status: QualityStatus.PENDING,
      productionOrderId: 1,
      details: [
        {
          title: 'Un detalle',
          status: QualityDetailStatus.PENDING,
          justification: null
        }
      ]
    },
    {
      id: 2,
      title: 'Tolva mono eje #2',
      location: 'Depósito 2',
      status: QualityStatus.APPROVED,
      productionOrderId: 2,
      details: [
        {
          title: 'Un detalle',
          status: QualityDetailStatus.APPROVED,
          justification: null
        }
      ]
    },
  ]
}
