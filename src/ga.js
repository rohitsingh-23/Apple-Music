import ReactGA from "react-ga4";

export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId);
};

export const logPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};
