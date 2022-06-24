import { API_URL_PUBLIC } from "../../constants/gists";

export const GET_GISTS_REQUEST = "GISTS::GET_GISTS";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";

export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST,
});

export const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists,
});

export const getGistsFailure = (error) => ({
    type: GET_GISTS_FAILURE,
    payload: error,
});

export const getAllGists = () => async (dispatch, getState) => {
    dispatch(getGistsRequest());

    try {
        const response = await fetch(API_URL_PUBLIC);

        if (!response.ok) {
            throw Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();

        dispatch(getGistsSuccess(result));
    } catch (error) {
        console.error(error);
        dispatch(getGistsFailure(error.message));
    }
};
