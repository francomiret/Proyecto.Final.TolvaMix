import {
  QualityDetailStatus,
  QualityStatus,
} from "@/services/api/QualityService";
import {
  ProductionOrderStatus,
  WorkOrderStatus,
} from "@/services/api/ProductionOrderService";
import moment from "moment";

export default class DB {
  products = [
    {
      id: 1,
      title: "Mono Eje Hidráulica para Tractor",
      nextAvailableDate: "2022-06-21",
      type: "Tolva",
      chargeCapacity: 3870,
      dischargeTime: 800,
      weight: 2200,
      length: 5.8,
      width: 2.6,
      high: 2,
      usefulLength: 3,
      usefulWidth: 2.6,
      usefulHigh: 2,
      topTubeLength: 6,
      topTubeDiameter: 0.24,
      standpipeLength: 2.26,
      standpipeDiameter: 0.31,
      hasSideDoor: false,
      hasBackDoor: false,
      hasStairs: false,
      hasScales: false,
      stakeHolder: 0,
      boquillas: 0,
      winches: 0,
      arches: 0,
      litersHydraulicPump: 120,
      pto: "",
      cylinder: "",
      accessories: ["Caja de herramientas"],
    },
    {
      id: 2,
      title: "Doble Eje Hidráulica para Tractor",
      type: "Tolva",
      nextAvailableDate: "2022-04-21",
      chargeCapacity: 3870,
      dischargeTime: 800,
      weight: 3350,
      length: 7.6,
      width: 2.6,
      high: 2,
      usefulLength: 5.5,
      usefulWidth: 2.6,
      usefulHigh: 2,
      topTubeLength: 7.5,
      topTubeDiameter: 0.24,
      standpipeLength: 2.26,
      standpipeDiameter: 0.31,
      hasSideDoor: false,
      hasBackDoor: false,
      hasStairs: false,
      hasScales: false,
      stakeHolder: 0,
      boquillas: 0,
      winches: 0,
      arches: 0,
      litersHydraulicPump: 120,
      pto: "",
      cylinder: "",
      accessories: ["Caja de herramientas"],
    },
    {
      id: 3,
      title: "10 toneladas",
      nextAvailableDate: "2022-03-26",
      type: "Tolva",
      chargeCapacity: 3870,
      dischargeTime: 800,
      weight: 2200,
      length: 5.2,
      width: 2.6,
      high: 2,
      usefulLength: 4.6,
      usefulWidth: 2.6,
      usefulHigh: 2,
      topTubeLength: 7.5,
      topTubeDiameter: 0.24,
      standpipeLength: 2.26,
      standpipeDiameter: 0.31,
      hasSideDoor: false,
      hasBackDoor: false,
      hasStairs: true,
      hasScales: false,
      stakeHolder: 0,
      boquillas: 0,
      winches: 0,
      arches: 0,
      litersHydraulicPump: 120,
      pto: "",
      cylinder: "",
      accessories: [
        "Guardabarros redondos con pantallas de goma",
        "Cajón para herramientas",
        "Tanque para agua",
        "Acelerador de mano",
        "Bandas reflectivas perimetrales reglamentarias",
        "Luces reglamentarias",
        "Escalera aérea",
        "Pasarela antideslizante",
      ],
    },
    {
      id: 4,
      title: "10 toneladas con balanza",
      nextAvailableDate: "2022-05-01",
      type: "Tolva",
      chargeCapacity: 3870,
      dischargeTime: 800,
      weight: 2200,
      length: 5.2,
      width: 2.6,
      high: 2,
      usefulLength: 4.6,
      usefulWidth: 2.6,
      usefulHigh: 2,
      topTubeLength: 7.5,
      topTubeDiameter: 0.24,
      standpipeLength: 2.26,
      standpipeDiameter: 0.31,
      hasSideDoor: false,
      hasBackDoor: false,
      hasStairs: true,
      hasScales: true,
      stakeHolder: 0,
      boquillas: 0,
      winches: 0,
      arches: 0,
      litersHydraulicPump: 120,
      pto: "",
      cylinder: "",
      accessories: [
        "Guardabarros redondos con pantallas de goma",
        "Cajón para herramientas",
        "Tanque para agua",
        "Acelerador de mano",
        "Bandas reflectivas perimetrales reglamentarias",
        "Luces reglamentarias",
        "Escalera aérea",
        "Pasarela antideslizante",
      ],
    },
  ];

  clients = [
    {
      id: 1,
      title: "Juan Pérez",
    },
    {
      id: 2,
      title: "Rodrigo Sanchez",
    },
  ];

  sales = [
    {
      id: 1,
      product: this.products[0],
      deliveryDate: "2022-06-21",
      client: this.clients[0],
    },
    {
      id: 1,
      product: this.products[1],
      deliveryDate: "2022-07-03",
      client: this.clients[1],
    },
  ];

  locations = [
    {
      id: 1,
      title: "Corte y plegado",
    },
    {
      id: 2,
      title: "Pantógrafo",
    },
    {
      id: 3,
      title: "Metal mecánica",
    },
    {
      id: 4,
      title: "Ensamblado",
    },
    {
      id: 5,
      title: "Autopartes",
    },
    {
      id: 6,
      title: "Montaje",
    },
    {
      id: 7,
      title: "Instalación Hidráulica",
    },
    {
      id: 8,
      title: "Pintado",
    },
  ];

  inputs = [
    {
      id: 1,
      title: "Chapa #1",
    },
    {
      id: 2,
      title: "Chapa #2",
    },
    {
      id: 3,
      title: "Chapa de chimango #1",
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
    {
      id: 8,
      title: "Bulones",
    },
    {
      id: 9,
      title: "Acople rapido hembra",
    },
    {
      id: 10,
      title: "Guantes",
    },
    {
      id: 11,
      title: "Alabre de soldadora",
    },
    {
      id: 12,
      title: "Alambre",
    },
    {
      id: 13,
      title: "Mechas de taladro",
    },
    {
      id: 14,
      title: "Bolilleros",
    },
    {
      id: 15,
      title: "Electrodos",
    },
    {
      id: 16,
      title: "Tornillos",
    },
    {
      id: 17,
      title: "Arandelas",
    },
    {
      id: 18,
      title: "Grasa",
    },
  ];

  accessories = [
    {
      id: 1,
      title: "Guardabarros redondos con pantallas de goma",
    },
    {
      id: 2,
      title: "Cajón para herramientas",
    },
    {
      id: 3,
      title: "Bandas reflectivas perimetrales reglamentarias",
    },
    {
      id: 4,
      title: "Luces reglamentarias",
    },
    {
      id: 5,
      title: "Escalera aérea",
    },
    {
      id: 6,
      title: "Pasarela antideslizante",
    },
    {
      id: 7,
      title: "Soporte de rueda de auxilio tipo canasto doble",
    },
    {
      id: 8,
      title: "Tanque para agua",
    },
    {
      id: 9,
      title: "Acelerador de mano",
    },
  ];

  parts = [
    {
      id: 1,
      title: "Chapa plegada #1",
      location: this.locations[0],
      productionTimeInHours: 10,
      inputs: [{ input: this.inputs[0], quantity: 1 }],
    },
    {
      id: 2,
      title: "Chapa plegada #2",
      location: this.locations[0],
      productionTimeInHours: 12,
      inputs: [{ input: this.inputs[1], quantity: 1 }],
    },
    {
      id: 3,
      title: "Chimango #1",
      location: this.locations[1],
      productionTimeInHours: 32,
      inputs: [
        { input: this.inputs[2], quantity: 1 },
        { input: this.inputs[3], quantity: 10 },
        { input: this.inputs[4], quantity: 10 },
        { input: this.inputs[5], quantity: 13 },
        { input: this.inputs[6], quantity: 13 },
      ],
    },
  ];

  workOrders = [
    {
      id: 1,
      title: "Tolva mono eje #1",
      product: this.products[0],
      client: this.clients[0],
      status: WorkOrderStatus.PENDING,
    },
  ];

  productionOrders = [
    {
      id: 1,
      status: ProductionOrderStatus.PROGRESS,
      workOrder: this.workOrders[0],
      part: this.parts[0],
      quantity: 1,
      expected_start_at: moment().add(1, "days"),
      expected_end_at: moment().add(
        this.parts[0].productionTimeInHours,
        "hours"
      ),
    },
    {
      id: 2,
      status: ProductionOrderStatus.QUALITY_CONTROL,
      workOrder: this.workOrders[0],
      part: this.parts[1],
      quantity: 1,
      expected_start_at: moment().add(1, "days"),
      expected_end_at: moment().add(
        this.parts[1].productionTimeInHours,
        "hours"
      ),
    },
    {
      id: 3,
      status: ProductionOrderStatus.PENDING,
      workOrder: this.workOrders[0],
      part: this.parts[2],
      quantity: 1,
      expected_start_at: moment().add(3, "days"),
      expected_end_at: moment().add(
        this.parts[2].productionTimeInHours,
        "hours"
      ),
    },
    {
      id: 4,
      status: ProductionOrderStatus.QUALITY_ADJUSTMENT,
      workOrder: this.workOrders[0],
      part: this.parts[2],
      quantity: 1,
      expected_start_at: moment().add(3, "days"),
      expected_end_at: moment().add(
        this.parts[2].productionTimeInHours,
        "hours"
      ),
    },
  ];

  qualityOrders = [
    {
      id: 1,
      title: "Tolva mono eje #1",
      location: "Depósito 1",
      status: QualityStatus.PENDING,
      productionOrder: this.workOrders[0],
      details: [
        {
          title: "Un detalle",
          status: QualityDetailStatus.PENDING,
          justification: null,
        },
      ],
    },
    {
      id: 2,
      title: "Tolva mono eje #2",
      location: "Depósito 2",
      status: QualityStatus.APPROVED,
      productionOrder: this.workOrders[1],
      details: [
        {
          title: "Un detalle",
          status: QualityDetailStatus.APPROVED,
          justification: null,
        },
      ],
    },
  ];
}
