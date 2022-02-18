import { DR_SHAMAM, DR_ALI } from "./clinicNames";

const makeClinicRoute = (clinicName = ":clinicName") => `/clinic/${clinicName}`;

const routes = {
  home: "/",
  clinic: makeClinicRoute(),
  [DR_SHAMAM]: makeClinicRoute(DR_SHAMAM),
  [DR_ALI]: makeClinicRoute(DR_ALI),
};

export default routes;
