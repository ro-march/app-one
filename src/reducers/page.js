import { 
GET_PHOTOS_REQUEST,
GET_PHOTOS_SUCCCES
} from '../constants/Page'

const initState = {
	year: 2016,
	photos: [],
	fetching: false
}

export default function page(state = initState, action) {

	switch( action.type ) {

		case GET_PHOTOS_REQUEST:
			return Object.assign({}, state, {year: action.payload, fetching: true})

		case GET_PHOTOS_SUCCCES:
			return Object.assign({}, state, {photos: action.payload, fetching: false})

		default:
			return state;
	}
}