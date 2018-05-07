import React, {Component} from 'react';
import styles from './ContactData.css';
import Input from '../../UI/Input/Input';
import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';
import axios from '../../../axios-orders';
class ContactData extends Component{
    state = {
        messageForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Subject'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Message'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
        },
        formTouched:false,
        sending: false,
        sent:false
    }

    checkValidity = (value, rules) =>{
        let isValid = true;
        if(rules && rules.required){ // input required to be filled to be valid
            isValid = value.trim() !== ''; // inputs with just spaces are invalid too (this is why we use trim)
        }
        return isValid;
    }

    onChangeHandler = (event, inputIdentifier) => {
        const updatedMessageForm = { ...this.state.messageForm };
        const rules = updatedMessageForm[inputIdentifier].validation;
        updatedMessageForm[inputIdentifier].value = event.target.value;
        updatedMessageForm[inputIdentifier].valid = this.checkValidity(event.target.value, rules);
        updatedMessageForm[inputIdentifier].touched = true;

        this.setState({messageForm: updatedMessageForm});
    }

    SendMessageHandler = (event) =>{
        event.preventDefault();
        this.setState({sending: true, formTouched: true});
        const formData = {};
        for( let info in this.state.messageForm){
            formData[info] = this.state.messageForm[info].value;
        }
        const message = {
            date: new Date().toDateString(),
            formData: formData,
        };       
        axios.post('/messages.json', message)
            .then ( response => {
                    this.setState({sent: true, sending: false});
                })
            .catch( error => {this.setState({sending: false});});
    }

    render(){
        const messageForm = this.state.messageForm;
        const inputs = Object.keys(messageForm)
            .map( inputSetupKey => {
            const inputSetup = messageForm[inputSetupKey];
            const inputIsInvalid = Boolean( !inputSetup.valid && (inputSetup.touched || this.state.formTouched) ); 
            return <Input   key={inputSetupKey}
                            elementType={inputSetup.elementType} 
                            elementConfig={inputSetup.elementConfig}
                            value={inputSetup.value}
                            invalid= {inputIsInvalid}
                            changed={(e) => this.onChangeHandler(e, inputSetupKey)}/>
                });

        const iconSize = 80;
        return (
            <div id='Contact' className= {styles.ContactData}>
                <h1>Send Me A Message</h1>
                    <form onSubmit = {this.SendMessageHandler}>
                        <CustomScrollbars scrollId={3} height='360px' zIndex={10} width={'100%'}>
                            {inputs}
                        </CustomScrollbars>
                        <button className={styles.Button}>Send</button>
                    </form>
            </div>
        );
    }    
}

export default ContactData;

