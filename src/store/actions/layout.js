import * as actionTypes from '../actions/actionTypes';

export const __initOffsetTop__ = (scrollRef) => {
    return {
        type: actionTypes.INIT_OFFSETTOP,
        scrollRef
    };
};
export const __setOffsetTop__ = () => {
    return {
        type: actionTypes.SET_OFFSETTOP
    };
};
export const __navigateTo__ = (i) => {
    return {
        type: actionTypes.NAVIGATE,
        i
    };
};
export const __PassToHandelScroll__ = () => {
    return {
        type: actionTypes.HANDEL_SCROLL
    };
};
export const __Prohib__ = () => {
    return {
        type: actionTypes.PROHIB
    };
};
export const __handelScroll__ = () => {
    return (dispatch, state) => {
        if(state.pass){
            let wait = new Promise( (resolve, reject) =>  setTimeout( () => resolve() , 300));
            // A promise here to verify the current Active Nav Button after 100ms
            // when the promise resoleves after 100ms, call checkCurrentActiveNavButton method and set pass to true  
            wait.then( // wait 100ms
                res => dispatch(__PassToHandelScroll__())
            );
            // pass: false to prohib triggering a new promise until the prev one is done.
            dispatch(__Prohib__());
        };
    };
};