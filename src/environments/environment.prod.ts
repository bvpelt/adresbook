export const environment = {
  production: true,
  enableServiceWorker: true,
  apiUrl: window["env"]?.API_BASE_URL || ''
};
