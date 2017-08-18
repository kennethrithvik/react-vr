import * as types from './actionTypes';
import axios from 'axios';

export default async function fetchImageAction() {
    const url = "https://demo0813639.mockable.io/getPanos";
    const request = await axios.get(url);
    return {
        type: types.FETCH_IMAGES,
        images:request.data
    };
}