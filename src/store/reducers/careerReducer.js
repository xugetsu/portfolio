import * as actionTypes from '../actions/actionTypes';
import data from '../careerDataStore/dataGenerator';

const initState = {
        loading:true,
        resize:false,
        currentCommit:{
            rank:16,
            hash:'w06',
            content:['Start Learning React','Wed/17/Jan/2018'],
            p: 15
        },
        layout:null,
        commitsLog: null,
}

const careerReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GENERATE_DATA:
            const { layout, commitsLog } = data;
            return { ...state, loading: false, layout, commitsLog };
        default: return state;
    }
};


export default careerReducer;