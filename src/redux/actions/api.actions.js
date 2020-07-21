export const API_REQUEST = 'API_REQUEST';
export const API_CUSTOM_REQUEST = 'API_CUSTOM_REQUEST';
export const API_SUCCESS = `API_SUCCESS`;
export const API_ERROR = `API_ERROR`;

// Will handle all api calls
export const apiRequest = ({ body = null, url, method = 'GET', feature, contentType = 'application/json' }) => ({
	type: `${feature} ${API_REQUEST}`,
	body,
	meta: {
		url,
		method,
		feature,
		contentType
	}
});

// Will handle some unique API calls.
// This is to make clear separation between which API Epic should handle this action
// For example search field, where new request cancells the previous one
export const apiCustomRequest = ({ body = null, url, method = 'GET', feature, contentType = 'application/json' }) => ({
	type: `${feature} ${API_CUSTOM_REQUEST}`,
	body,
	meta: {
		url,
		method,
		feature,
		contentType
	}
});

export const apiSuccess = ({ data, feature }) => ({
	type: `${feature} ${API_SUCCESS}`,
	payload: data
});

export const apiError = ({ error = null, feature }) => ({
	type: `${feature} ${API_ERROR}`,
	payload: error
});
