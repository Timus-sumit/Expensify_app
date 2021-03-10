//set_text_filter

export const setTextFilter = (text)=>{
    return {
        type : 'SET_TEXT_FILTER',
        text
    }
}
//sort_by_date

export const sortByDate = ()=>{
    return {
        type :'SORT_BY_DATE'
    }
}

//sort_by_amount

export const sortByAmount=()=>{
    return {
        type:'SORT_BY_AMOUNT'
    }
}
//setStartDate

export const setStartDate = (date)=>{
    return{
        type:'SET_START_DATE',
        date
    }
}
//set_end_date
export const setEndDate = (date)=>{
    return{
        type:'SET_END_DATE',
        date
    }
}