import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_IMAGE, CREATE, UPDATE, DELETE } from '../features/constants/actionTypes';
import * as api from '../api/index.js';

export const getImage = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchImages(id);

    dispatch({ type: FETCH_IMAGE, payload: { image: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getImages = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await getImages;

    dispatch({ type: FETCH_ALL, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const createImage = (image, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createImage(image);

    dispatch({ type: CREATE, payload: data });

    history.push(`/images/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateImage = (id, image) => async (dispatch) => {
  try {
    const { data } = await api.updateImage(id, image);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteImage = (id) => async (dispatch) => {
  try {
    await await api.deleteImage(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};