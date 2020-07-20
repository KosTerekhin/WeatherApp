export const urlUpdate = ({ url, lat, lon }) => {
	return url.replace(/({lat})/gi, `${lat}`).replace(/({lon})/gi, `${lon}`);
};
