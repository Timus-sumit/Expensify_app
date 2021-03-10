import React from 'react';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker } from 'react-dates';
class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description: props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?props.expense.amount:'',
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            focused:false,
            error:''
    
        }

    }
    
    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>{
            return {
                description
            }
        })
    }

    onNoteChange=(e)=>{
        const note = e.target.value;
        this.setState(()=>{
            return {
                note
            }
        })
    }
    onAmountChange=(e)=>{
        const amount = e.target.value;
        this.setState(()=>{
            return{
                amount
            }
        })
    }

    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>{
                return{
                    createdAt
                }
            })
        }
      
    }

    onFocusChange=({focused})=>{
        this.setState(()=>{
            return{
                focused
            }
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>{
                return{
                    error:'Please add a description and amount !'
                }
            })
        }else{
            this.setState(()=>{
                return{
                    error:''
                }
            })
            this.props.onSubmit({
                description:this.state.description,
                amount:this.state.amount,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            })
        }
    }
    
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='description' autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>

                    <input type ='number' value={this.state.amount} onChange={this.onAmountChange} placeholder='amount' />

                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={()=>(false)}
                    />

                    <textarea value={this.state.note} onChange={this.onNoteChange} placeholder='Add a note (optional)'> </textarea>

                    <button>Add Expense</button>
                </form>
            </div>)
    }
}

export default ExpenseForm;