import {QualityDetailStatus, QualityStatus} from "@/services/api/QualityService";
import {ProductionOrderStatus, WorkOrderStatus} from "@/services/api/ProductionOrderService";
import moment from "moment";

export default class DB {
  products = [
    {
      id: 1,
      title: 'Tolva mono eje #1',
      nextAvailableDate: '2022-06-21',
    },
    {
      id: 2,
      title: 'Tolva mono eje #2',
      nextAvailableDate: '2022-04-21',
    },
    {
      id: 3,
      title: 'Tolva doble eje #1',
      nextAvailableDate: '2022-03-26',
    },
    {
      id: 4,
      title: 'Tolva doble eje #2',
      nextAvailableDate: '2022-05-01',
    }
  ]

  clients = [
    {
      id: 1,
      title: 'Juan Pérez',
    },
    {
      id: 2,
      title: 'Rodrigo Sanchez',
    },
  ]

  sales = [
    {
      id: 1,
      product: this.products[0],
      deliveryDate: '2022-06-21',
      client: this.clients[0]
    },
    {
      id: 1,
      product: this.products[1],
      deliveryDate: '2022-07-03',
      client: this.clients[1]
    },
  ]

  locations = [
    {
      id: 1,
      title: 'Corte y plegado'
    },
    {
      id: 2,
      title: 'Pantógrafo'
    },
    {
      id: 3,
      title: 'Metal mecánica'
    },
    {
      id: 4,
      title: 'Ensamblado'
    }
  ]

  inputs = [
    {
      id: 1,
      title: 'Chapa #1',
    },
    {
      id: 2,
      title: 'Chapa #2',
    },
    {
      id: 3,
      title: 'Chapa de chimango #1',
    },
    {
      id: 4,
      title: 'Tuerca de 1"',
    },
    {
      id: 5,
      title: 'Tuerca de 1/2"',
    },
    {
      id: 6,
      title: 'Tornillo de 1"',
    },
    {
      id: 7,
      title: 'Tornillo de 1/2"',
    },
  ]

  parts = [
    {
      id: 1,
      title: 'Chapa plegada #1',
      location: this.locations[0],
      productionTimeInHours: 10,
      inputs: [
        {input: this.inputs[0], quantity: 1},
      ]
    },
    {
      id: 2,
      title: 'Chapa plegada #2',
      location: this.locations[0],
      productionTimeInHours: 12,
      inputs: [
        {input: this.inputs[1], quantity: 1},
      ]
    },
    {
      id: 3,
      title: 'Chimango #1',
      location: this.locations[1],
      productionTimeInHours: 32,
      inputs: [
        {inputs: this.inputs[2], quantity: 1},
        {inputs: this.inputs[3], quantity: 10},
        {inputs: this.inputs[4], quantity: 10},
        {inputs: this.inputs[5], quantity: 13},
        {inputs: this.inputs[6], quantity: 13},
      ]
    }
  ]

  workOrders = [
    {
      id: 1,
      title: 'Tolva mono eje #1',
      product: this.products[0],
      client: this.clients[0],
      status: WorkOrderStatus.PENDING,
    },
  ]

  productionOrders = [
    {
      id: 1,
      status: ProductionOrderStatus.PROGRESS,
      workOrder: this.workOrders[0],
      part: this.parts[0],
      quantity: 1,
      expected_start_at: moment().add(1, 'days'),
      expected_end_at: moment().add(this.parts[0].productionTimeInHours, 'hours'),
    },
    {
      id: 2,
      status: ProductionOrderStatus.QUALITY_CONTROL,
      workOrder: this.workOrders[0],
      part: this.parts[1],
      quantity: 1,
      expected_start_at: moment().add(1, 'days'),
      expected_end_at: moment().add(this.parts[1].productionTimeInHours, 'hours'),
    },
    {
      id: 3,
      status: ProductionOrderStatus.PENDING,
      workOrder: this.workOrders[0],
      part: this.parts[2],
      quantity: 1,
      expected_start_at: moment().add(3, 'days'),
      expected_end_at: moment().add(this.parts[2].productionTimeInHours, 'hours'),
    }
  ]

  qualityOrders = [
    {
      id: 1,
      title: 'Tolva mono eje #1',
      location: 'Depósito 1',
      status: QualityStatus.PENDING,
      productionOrder: this.workOrders[0],
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
      productionOrder: this.workOrders[1],
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
