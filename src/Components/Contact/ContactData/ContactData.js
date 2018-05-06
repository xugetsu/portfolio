import React, {Component} from 'react';
import styles from './ContactData.css';
import Input from '../../UI/Input/Input';
import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';
class ContactData extends Component{
    state = {
        orderForm: {                   // the price need to be calculated in the server !!
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail'
                },
                value: ''
            },
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Subject'
                },
                value: ''
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Message'
                },
                value: ''
            },
        },
        purchaseLoading:false,
    }

    onChangeHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        updatedOrderForm[inputIdentifier].value= event.target.value;
        this.setState({orderForm:updatedOrderForm});
    }
    
    render(){
        const orderForm = this.state.orderForm;
        const inputs = Object.keys(orderForm)
            .map( inputSetupKey => {
                    const inputSetup = orderForm[inputSetupKey];
                    return <Input   key={inputSetupKey}
                                    elementType={inputSetup.elementType} 
                                    elementConfig={inputSetup.elementConfig}
                                    value={inputSetup.value}
                                    changed={(e) => this.onChangeHandler(e, inputSetupKey)}/>
                        });

        const iconSize = 80;
        return (
            <div className= {styles.ContactData}>
                <h1>Send Me A Message</h1>
                    <form onSubmit = {this.SendHandler}>
                        <CustomScrollbars scrollId={3} height='360px' zIndex={10} width={'400px'}>
                            {inputs}
                        </CustomScrollbars>
                        <button className={styles.Button}>Send</button>
                    </form>
            </div>
        );
    }    
}

export default ContactData;

