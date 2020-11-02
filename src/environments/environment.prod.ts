export const environment = {
	production: true,
	auth: {
		domain: 'dev-f3yp6fj9.us.auth0.com',
		clientId: '0KWFX79CPyrW2zCVJWZm8Lc8nz7FuhVj',
		audience: "https://flask.api",
		redirectUri: window.location.origin,
	},
	dev: {
		serverUrl: "http://localhost:5000"
	}
};