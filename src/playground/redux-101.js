import { createStore } from 'redux';

//Action generators - functions that return action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

//Reducers
const countReducer = (state = {count: 0}, action) => { 
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'RESET':
            return { count: state.count = 0 }
        case 'SET':
            return { count: action.count };
        default:
            return state;
    }
}
    
const store = createStore(countReducer);

//Do something when the store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


//Actions - than an object that gets sent to the store
store.dispatch(incrementCount({incrementBy: 5}));

//Stop subscribe here!
// unsubscribe();

store.dispatch(decrementCount({decrementBy: 2}));

store.dispatch(incrementCount({incrementBy: 4}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 101}));



