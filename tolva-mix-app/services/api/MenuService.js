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
        to: "/",
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
        icon: "mdi-plus",
        title: "Agregar Producto",
        to: "/",
      },
      {
        icon: "mdi-database-search",
        title: "Buscar Producto",
        to: "/",
      },
      {
        icon: "mdi-delete",
        title: "Eliminar Producto",
        to: "/",
      },
      {
        icon: "mdi-pencil",
        title: "Editar Producto",
        to: "/",
      },
      {
        icon: "mdi-clipboard-edit",
        title: "Control de Calidad",
        to: "/",
      },
    ];
  }
  getDepositMenu() {
    return [
      {
        icon: "mdi-table",
        title: "Herramientas Disponibles",
        to: "/deposit/steel",
      },
      {
        icon: "mdi-table",
        title: "Insumos Disponibles",
        to: "/deposit/stock",
      },
      {
        icon: "mdi-keyboard-return",
        title: "Registrar Devolución",
        to: "/deposit/return",
      },
    ];
  }
}
