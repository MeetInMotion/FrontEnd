import {combineReducers} from 'redux';

const initialState = {
  
};

function testReducer(state = initialState, action){
    //bara för att få eslint att funka. Tas bort direkt när vi
    // har en riktig reducer.
    switch(action){
    case 'TEST_ACTION': {
        return state;
    }
    }
    return state;
}

const rootReducer = combineReducers({
    testReducer,
});

export default rootReducer;
