import { AxiosError } from 'axios'
import Swal from '../components/alert/Swal'

const error = (reason: AxiosError<ResponseBaseProps>) => {
	if (!reason.response)
		return {
			date: new Date(),
			message: reason.message || 'No error message caught.'
		}

	const { message } = reason.response.data
	Swal.fire({ title: 'Customer', text: message, icon: 'error' })
}

export default error
