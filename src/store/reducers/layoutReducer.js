import * as actionTypes from '../actions/actionTypes'; 

const navigationElementsId = ['GeneralInfo','MyCareer','Competence','Portfolio','Contact'];

const initState = {
    shrink: false,
    open: false,
    offsetTop: null,
    currentActive: 0,
    pass: true,
    scrollRef: undefined,
};

const reducer = (state = initState, action) => {
    let offsetTop = null;
    switch (action.type) {

        case actionTypes.INIT_OFFSETTOP:
            offsetTop = navigationElementsId.map( elementId => 
                document.getElementById(elementId).offsetTop
            );
        return{...state,offsetTop, scrollRef: action.scrollRef};

        case actionTypes.SET_OFFSETTOP:
            offsetTop = navigationElementsId.map( elementId => 
                document.getElementById(elementId).offsetTop
            );
        return{...state,offsetTop};

        case actionTypes.NAVIGATE:
            offsetTop = navigationElementsId.map( elementId => 
                document.getElementById(elementId).offsetTop
            );
        return{...state,offsetTop};

        case actionTypes.PROHIB : return {...state, pass:false}

        case actionTypes.HANDEL_SCROLL :
            const scrollTop = state.scrollRef.getScrollTop();
            let shrink = true;
            offsetTop = state.offsetTop;
            let currentActive = state.currentActive;
            const h = window.innerHeight/2;

            if(scrollTop > 50 && !state.shrink){ shrink = true;}
            else if(scrollTop < 50 && state.shrink){ shrink = false;}

            if( currentActive !== 0 && scrollTop < offsetTop[1] - h && scrollTop > offsetTop[0] - h ){
                currentActive = 0;
            }else if( currentActive !== 1 && scrollTop < offsetTop[2] - h && scrollTop > offsetTop[1] - h ){
                currentActive = 1;
            }else if( currentActive !== 2 && scrollTop < offsetTop[3] - h && scrollTop > offsetTop[2] - h ){
                currentActive = 2;
            }else if( currentActive !== 3 && scrollTop < offsetTop[4] - h && scrollTop > offsetTop[3] - h ){
                currentActive = 3;
            }else if( currentActive !== 4 && scrollTop > offsetTop[4] - h ){
                currentActive = 4;
            }        
        return {...state, shrink, currentActive, pass:true};

        default: return state;

    }
};

export default reducer;

