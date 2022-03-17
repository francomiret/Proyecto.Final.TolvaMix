export default class MenuService {
  getSalesMenu() {
    return [
      {
        icon: "mdi-plus",
        title: "Registrar Venta",
        to: "/sales/sale",
      },
      {
        icon: "mdi-content-save",
        title: "Reservar Entrega",
        to: "/",
      },
      {
        icon: "mdi-database-search",
        title: "Buscar Venta",
        to: "/",
      },
      {
        icon: "mdi-database-search",
        title: "Consultar Entrega",
        to: "/",
      },
      {
        icon: "mdi-delete",
        title: "Cancelar Venta",
        to: "/",
      },
    ]
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
    ]
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
    ]
  }
  getDepositMenu() {
    return [
      {
        icon: "mdi-view-dashboard",
        title: "Dashboard",
        to: "/deposit",
      },
      {
        icon: "mdi-plus",
        title: "Agregar Insumo",
        to: "/deposit/add",
      },
      {
        icon: "mdi-database-search",
        title: "Buscar Insumo",
        to: "/deposit/search",
      },
      {
        icon: "mdi-delete",
        title: "Eliminar Insumo",
        to: "/deposit/remove",
      },
      {
        icon: "mdi-pencil",
        title: "Editar Insumo",
        to: "/deposit/edit",
      },
    ]
  }
}
