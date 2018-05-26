import * as actionTypes from '../actions/actionTypes';

export const __generateData__ = () => {
    return {
        type: actionTypes.GENERATE_DATA
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