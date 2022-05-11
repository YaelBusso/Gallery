import { FETCH_ALL, FETCH_IMAGE, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default (state = { isLoading: true, images: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
        return action.payload;
    case FETCH_IMAGE:
      return { ...state, image: action.payload.image };
    case CREATE:
      return { ...state, images: [...state.images, action.payload] };
    case UPDATE:
      return { ...state, images: state.posts.map((image) => (image._id === action.payload._id ? action.payload : image)) };
    case DELETE:
      return { ...state, images: state.posts.filter((image) => image._id !== action.payload) };
    default:
      return state;
  }
};