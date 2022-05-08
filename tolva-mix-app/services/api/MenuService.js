export default class MenuService {
  getSalesMenu() {
    return [
      {
        icon: "mdi-calendar-search",
        title: "Consultar Fecha de Entrega",
        to: "/sales/create",
      },
      {
        icon: "mdi-account-search",
        title: "Consultar Ventas",
        to: "/sales/query",
      },
    ];
  }
  getProductionMenu() {
    return [
      {
        icon: "mdi-plus",
        title: "Comenzar Trabajo",
        to: "/production/work",
      },
      {
        icon: "mdi-pipe-wrench",
        title: "Ajustes de Calidad",
        to: "/",
      },
    ];
  }
  getOfficeMenu() {
    return [
      {
        icon: "mdi-table",
        title: "Productos",
        to: "/office/products",
      },
      {
        icon: "mdi-clipboard-edit",
        title: "Control de Calidad",
        to: "/office/qa",
      },
    ];
  }
  getDepositMenu() {
    return [
      {
        icon: "mdi-table",
        title: "Recursos Disponibles",
        to: "/deposit/resurces",
      },
      {
        icon: "mdi-keyboard-return",
        title: "Registrar Devolución",
        to: "/deposit/return",
      },
    ];
  }
}
