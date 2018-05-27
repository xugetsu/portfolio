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
        commitsLog: [],
}

const careerReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GENERATE_DATA:
            const { layout, commitsLog } = data;
            return { ...state, loading: false, layout, commitsLog };
        case actionTypes.RESIZE:   return {...state, resize: !state.resize} 
        case actionTypes.PREVCOMMIT: 
            if(state.currentCommit.rank === 1){
                return state;
            }else{
                return {...state, currentCommit: state.commitsLog[state.currentCommit.rank - 2]} 
            }  
        case actionTypes.NEXTCOMMIT:
            if(state.currentCommit.rank === 26){
                return state;
            }else{
                return {...state, currentCommit: state.commitsLog[state.currentCommit.rank]} 
            }  
        case actionTypes.LOAD_COMMIT: return {...state, currentCommit: state.commitsLog[action.rank-1]}
        default: return state;
    }
};


export default careerReducer;