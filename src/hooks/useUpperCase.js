function useUpperCase() {
	
	const upper = (params) => {
		return params.toString().toUpperCase()
	}
	
	return {upper}
}

export default useUpperCase