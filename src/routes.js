const InicioComponent = () => import("./components/Inicio.vue");
const ConductoresComponent = () => import("./components/Conductores.vue");
const ConductorComponent = () => import("./components/ConductorDetalles.vue");
const ConductorEditComponent = () => import("./components/ConductorEditar.vue");
const FlotasComponent = () => import("./components/Flotas.vue");

export const ROUTES = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "/Conductores",
    component: ConductoresComponent
  },
  {
    path: "/Conductores/:id",
    component: ConductorComponent,
    name:"conductorInfo"
  },
  {
    path: "/Conductores/Detalles/:id",
    component: ConductorComponent,
    name:"conductorInfo"
  },
  {
    path: "/Conductores/Editar/:id",
    component: ConductorEditComponent,
    name:"conductorEditar"
  },
  {
    path: "/Flotas",
    component: FlotasComponent
  },
  {
    path: "*",
    redirec: "/"
  }
];
