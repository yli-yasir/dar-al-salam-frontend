export const clinicNames = {
  drAli: "drAli",
  drShamam: "drShamam",
};
const routes = {
  home: "/",
  clinic: "/clinic/:clinicName",
  drAli: `/clinic/${clinicNames.drAli}`,
  drShamam: `/clinic/${clinicNames.drShamam}`,
};

export default routes;
