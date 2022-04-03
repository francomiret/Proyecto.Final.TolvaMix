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
  static FINISHED = new ProductionOrderStatus('FINISHED')
  static CANCELED = new ProductionOrderStatus('CANCELED')
}

export default class ProductionOrderService extends BaseService {
  constructor({DB}) {
    super(DB.productionOrders)
  }

  startProduction(productionOrder) {
    this.update(productionOrder.id, {status: ProductionOrderStatus.PROGRESS})
    // TODO Update workOrder
  }

  stopProduction(productionOrder) {
    if (productionOrder.status.equals(ProductionOrderStatus.PROGRESS)) {
      this.update(productionOrder.id, {status: ProductionOrderStatus.PENDING})
    }
    // TODO Update workOrder
  }

  completeProduction(productionOrder) {
    this.update(productionOrder.id, {status: ProductionOrderStatus.FINISHED})
    // TODO Update workOrder
  }
}
