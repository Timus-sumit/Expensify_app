
const ExpenseTotal = (expense)=>{
    let total = parseInt("0");
    const totalItem = expense.length;
    for(let i=0;i<totalItem;i++){
        total += parseInt(expense[i].amount);
    }

    return{
        totalExpense:total,
        totalItem
    }

}

export default ExpenseTotal;