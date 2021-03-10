import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Add_expense

const addExpense = ({description='',note = '',amount=0,createdAt=0}={})=>{
    return {
        type:'ADD_EXPENSE',
        expense:{
            id : uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

//removing_expense

const removeExpense = ({id})=>{
    return {
        type:'REMOVE_EXPENSE',
        id
    }
}

//edit_expense

const editExpense = (id,updates)=>{
    return {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
}

//set_text_filter

const setTextFilter = (text)=>{
    return {
        type : 'SET_TEXT_FILTER',
        text
    }
}
//sort_by_date

const sortByDate = ()=>{
    return {
        type :'SORT_BY_DATE'
    }
}

//sort_by_amount

const sortByAmount=()=>{
    return {
        type:'SORT_BY_AMOUNT'
    }
}
//setStartDate

const setStartDate = (date)=>{
    return{
        type:'SET_START_DATE',
        date
    }
}
//set_end_date
const setEndDate = (date)=>{
    return{
        type:'SET_END_DATE',
        date
    }
}
//get_visible_date
const getVisibleData = (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const start = typeof startDate !=='number'|| expense.createdAt >= startDate;
        const end = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return (textMatch && start && end);
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt ? 1:-1;
        }
        else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1;
        }
    })
}
const expenseReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_EXPENSE' :
            return [...state,action.expense];
        case 'REMOVE_EXPENSE' :
            return state.filter((expense)=>{
                return expense.id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })
        default :
            return state;
    }
};

const defaultFilterReducerState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer = (state=defaultFilterReducerState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate : action.date
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate : action.date
            };
        default :
            return state;
    }
}

const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filter:filterReducer
    })
)
console.log('working');
store.subscribe(()=>{
    const state = store.getState();
    const visibledata = getVisibleData(state.expense,state.filter);
    console.log(visibledata);
})

const expenseOne=store.dispatch(addExpense({description:'Allowance', amount:2000,createdAt:100}));
const expenseTwo = store.dispatch(addExpense({description:'faltu kharcha', amount:3000,createdAt:10}))

//store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseOne.expense.id,{amount:15000}))
// store.dispatch(setTextFilter('faltu'));
 //store.dispatch(sortByAmount());
 store.dispatch(sortByDate());
// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());