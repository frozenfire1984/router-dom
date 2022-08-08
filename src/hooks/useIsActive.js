function useIsActive() {
	
	const isActive = () => {
		return ({isActive}) => (isActive ? 'active-link' : '')
	}
	
	return {isActive}
}

export default useIsActive