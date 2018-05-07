import React, {Component} from 'react';
import styles from './ContactData.css';
import Input from '../../UI/Input/Input';
import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';
import axios from '../../../axios-orders';
import Spinner from '../../Spinner/Spinner';
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
                    type: 'text',
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

    checkFormValidity = () => {
        for( let inputElementKey in this.state.messageForm){
            const inputElement = this.state.messageForm[inputElementKey]
            if(! inputElement.valid){ 
                return false;
            }
        }
        return true;
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
        if(!this.checkFormValidity()){
            this.setState({formTouched: true});
            return null; // the form is invalid don't send anything !!
        }else{
            this.setState({sending: true});
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
    }

    render(){
        let contentToDisplay = null;
        if(this.state.sending){
            contentToDisplay = <Spinner pastDelay send/>;
        }else if(this.state.sent){
            contentToDisplay = (<div>
                                    <h1>{'Thank you!'}</h1>
                                    <h2> {'Your message has been sent successfully :)'}</h2>
                                </div>);
        }else{
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
            contentToDisplay = <form onSubmit = {this.SendMessageHandler}>
                                    <h1>Send Me A Message</h1>
                                    <CustomScrollbars scrollId={3} height='360px' zIndex={10} width={'100%'}>
                                        {inputs}
                                    </CustomScrollbars>
                                    <button className={styles.Button}>Send</button>
                                </form>;
        }


       
        return (
            <div id='Contact' className= {styles.ContactData}>
                {contentToDisplay}
            </div>
        );
    }    
}

export default ContactData;

