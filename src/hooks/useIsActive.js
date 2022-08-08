function useIsActive() {
	
	const isActive = (base_class) => {
		return ({isActive}) => (isActive ? `${base_class} link_active` : base_class)
	}
	
	return {isActive}
}

export default useIsActive