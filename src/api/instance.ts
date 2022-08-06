import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

const instance = ({ token }: WithToken): AxiosInstance => {
	let headers: AxiosRequestHeaders = { 'Content-Type': 'application/json' }
	if (token)
		headers = {
			...headers,
			Authorization: `Bearer ${token}`
		}
	const config: AxiosRequestConfig = { headers, baseURL }
	return axios.create(config)
}

export default instance
