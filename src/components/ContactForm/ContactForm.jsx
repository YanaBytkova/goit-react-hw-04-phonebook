
import React, { Component } from 'react';

import css from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
      }

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const contactData = {
      name: this.state.name,
      number: this.state.number
    };
    
    this.props.handleAddProduct(contactData);
    form.reset();
  };

  handleInputChange = event => {
    const value = event.target.value;

    const name = event.target.name; // 'price'

    this.setState({
      [name]: value,
    });
    
  };

  render() {
    return (
        
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.labelText}>Name</p>
          <input type="text" name="name" required onChange={this.handleInputChange}/>
        </label>
        <label className={css.formLabel}>
          <p className={css.labelText}>Number</p>
          <input type="tel" name="number" required onChange={this.handleInputChange}/>
        </label> <br />
        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
  }

}