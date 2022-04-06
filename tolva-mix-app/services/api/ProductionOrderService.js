import BaseService from '~/services/BaseService'
import Enum from "~/services/Enum";

export class WorkOrderStatus extends Enum {
  static PENDING = new WorkOrderStatus('PENDING')
  static PROGRESS = new WorkOrderStatus('PROGRESS')
  static FINISHED = new WorkOrderStatus('FINISHED')
  static CANCELED = new WorkOrderStatus('CANCELED')
}

export class ProductionOrderStatus extends Enum {
  static PENDING = new ProductionOrderStatus('PENDING')
  static PROGRESS = new ProductionOrderStatus('PROGRESS')
  static QUALITY_CONTROL = new ProductionOrderStatus('QUALITY_CONTROL')
  static QUALITY_ADJUSTMENT = new ProductionOrderStatus('QUALITY_ADJUSTMENT')
  static FINISHED = new ProductionOrderStatus('FINISHED')
  static CANCELED = new ProductionOrderStatus('CANCELED')
}

export default class ProductionOrderService extends BaseService {
  constructor({DB}) {
    super(DB.productionOrders)
  }

  startProduction(id) {
    this.update(id, {status: ProductionOrderStatus.PROGRESS})
    // TODO Update workOrder
  }

  stopProduction(id) {
    this.update(id, {status: ProductionOrderStatus.PENDING})
    // TODO Update workOrder
  }

  completeProduction(id) {
    this.update(id, {status: ProductionOrderStatus.FINISHED})
    // TODO Update workOrder
  }
}
