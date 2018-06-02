import * as actionTypes from '../actions/actionTypes';
import dataGenerator from '../careerDataStore/dataGenerator';
import axios from '../../axios-orders';
import commitsData from '../careerDataStore/CommitsData';

// Action creators who run some asynchrounous code are only possible due to 
// redux-thunk and are caught in-between. They never make it to the reducer.
// We only use them as an utility step to run our asynchronous code and then
// We dispatch the synch action to change the state in the store once our
// asynchronous task is done.
// this type of creators need to retrun a function instead of an object 
// as the following : 
// const creator =  (payLoad) => { 
//                        return dispatch => {
//                                  some asynch code here ...
//                               }
//                  }

export const __generateData__ = (data) => {
    return {
        type: actionTypes.GENERATE_DATA,
        data
    };
};

export const __fetchData__ = () => {
    return dispatch => { // we get dispatch here due to redux-thunk !
        axios.get('/commitsData.json')
        .then( res => {
            const data = res.data[Object.keys(res.data)[0]];
            dispatch(__generateData__(data));
        })
        .catch( err => err ) // we need to complete the error case later  

    };
};

export const __nextCommit__ = () => {
    return {
        type: actionTypes.NEXTCOMMIT
    };
};
export const __prevCommit__ = () => {
    return {
        type: actionTypes.PREVCOMMIT
    };
};

export const __resize__ = () => {
    return {
        type: actionTypes.RESIZE
    };
};

export const __loadCommit__ = (rank) => {
    return {
        type: actionTypes.LOAD_COMMIT,
        rank       
    };/*  ^  ES6 */
};