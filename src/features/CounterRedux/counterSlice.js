const {createSlice} = require('@reduxjs/toolkit');

const counterSlice = createSlice({
    name: 'counter', 
    initialState: 1,
    reducers: {
        increase: (state, action) => {
            return state + 1;
        },
        decrease: (state, action) => {
            return state - 1;
        }
    }
});

const {actions, reducer} = counterSlice;
// console.log(actions); {increase: f, decrease: f}...

/* console.log(reducer)

    ƒ (state, action) {
        if (state === void 0) {
            state = frozenInitialState;
        }
  
      var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
        var …
*/
export const {increase,decrease} = actions;// name export
//console.log(increase); f counter/increase trong đó 'counter'là name của Slice 'increase' là tên action

export default reducer;// default export