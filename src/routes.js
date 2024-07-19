const getROUTES = (route) => {
  const ROUTE = {
    Network_Interfaces: "/network/interfaces",
    Network_DNS: "/network/dns",
    "Network_Static Routes": "/network/static_routes",
    "Network_Policy Routes": "/network/policy_routes",
  };
  return ROUTE[route];
};

export default getROUTES;
