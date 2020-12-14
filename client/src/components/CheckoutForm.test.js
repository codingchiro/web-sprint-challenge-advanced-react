import React from "react";
import { render, screen,  } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test("form page header renders", () => {
    //Arrange
    render (<App />);
    //Act
    const formHeader = screen.getByText(/react plants/i);
    const headerImg = screen.getByRole('img');
    //Assert
    expect(formHeader).toBeInTheDocument();
    expect(headerImg).toBeInTheDocument();
});

test('form header render', ()=>{
    //Arrange
    render (<CheckoutForm />);
    
    //Act
    const checkoutFormHeader = screen.getByText(/checkout form/i);

    //Assert
    expect(checkoutFormHeader).toBeInTheDocument;
    expect(checkoutFormHeader).toBeTruthy;
    
})

test("form shows success message on submit with form details", () => {
    //Arrange
     render (<CheckoutForm />);

    //Act
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);

    const button = screen.getByRole('button', {name: /checkout/i});
 
    //fill out form
    userEvent.type(firstNameInput, 'Crystal');
    userEvent.type(lastNameInput, 'Martin');
    userEvent.type(addressInput, '2891 Twin Acres Dr');

    //click button
    userEvent.click(button);
    
    //Assert
    const firstName = screen.getByText(/crystal/i);
    expect(firstName).toBeInTheDocument;
    const lastName = screen.getByText(/martin/i);
    expect(lastName).toBeInTheDocument;
    const address = screen.getByText(/2891 twin acres dr/i);
    expect(address).toBeInTheDocument;
    const successMessage = screen.getByTestId("successMessage");
    
    expect(successMessage).toBeInTheDocument();

});
