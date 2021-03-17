import { useLocation } from 'react-router-dom';

export const useGetPath = (menuItems) => {
	const { pathname } = useLocation();
	if (pathname === '/') return '/';
	const location = menuItems.find(({ path }) => path === pathname);
	return location;
};
