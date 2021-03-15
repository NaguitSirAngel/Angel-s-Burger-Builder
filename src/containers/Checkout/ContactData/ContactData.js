import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name : '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Angel',
                address: {
                    street: '73 Ice Berg Rd',
                    zipCode: '1234',
                    country:  'Canada'
                },
                email: 'test@email.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order)
        .then(res => {
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(err => {
            // console.log(err);
            this.setState({loading: false});
        });
    };

    render () {
        let form = ( 
            <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your email" />
            <input className={classes.Input} type="text" name="street" placeholder="Your street" />
            <input className={classes.Input} type="text" name="postal" placeholder="Your postal code" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter you Contact Data</h4>
                {form}
            </div>
        );
    };

}

export default ContactData;