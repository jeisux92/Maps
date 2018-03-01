const InicioComponent = () => import("./components/Inicio.vue");
const ConductoresComponent = () => import("./components/Conductores.vue");
const ConductorComponent = () => import("./components/ConductorDetalles.vue");
const ConductorEditComponent = () => import("./components/ConductorEditar.vue");
const FlotasComponent = () => import("./components/Flotas.vue");
const FlotaComponent =()=>import("./components/FlotaDetalles.vue");

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
    path: "/Flotas/Detalles/:id",
    component: FlotaComponent,
    name:"flotaInfo"
  },
  {
    path: "*",
    redirec: "/"
  }
];
