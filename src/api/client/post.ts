import instance from '../instance'

const addClient = async (data: ClientProps, { token }: WithToken) => {
	const response = await instance({ token }).post<ResponseBaseProps>('/client/', { ...data })
	return response.data
}

export { addClient }
