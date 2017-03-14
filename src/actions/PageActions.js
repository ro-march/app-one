import { 
GET_PHOTOS_REQUEST,
GET_PHOTOS_SUCCCES
} from '../constants/Page'

export function setYear(year) {

	return (dispatch) => 
	{
		dispatch({
			type: GET_PHOTOS_REQUEST,
			payload: year
		})

		setTimeout(() => {
			dispatch({
				type: GET_PHOTOS_SUCCCES,
				payload: [1, 2, 3, 4, 5]
			})
		}, 1000)
	}
}