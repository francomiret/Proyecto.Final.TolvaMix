export default class MenuService {
  getSalesMenu() {
    return [
      {
        icon: "mdi-calendar-search",
        title: "Consultar Productos",
        to: "/sales/create",
      },
      {
        icon: "mdi-account-search",
        title: "Consultar Reservas",
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
        title: "Lista de Recursos",
        to: "/deposit/resurces",
      },
      {
        icon: "mdi-cart-arrow-down",
        title: "Armar Carrito",
        to: "/deposit/cart-preparation",
      },
    ];
  }
}
