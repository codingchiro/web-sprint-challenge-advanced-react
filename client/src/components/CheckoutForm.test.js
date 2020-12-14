import React from "react";
import { render, screen,  } from "@testing-library/react";
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


    const onSubmit = jest.fn();
    const { getByTestId } = render(<CheckoutForm onSubmit= {onSubmit}/>);
    
    fireEvent.submit(getByTestId("successMessage"));

    //Assert
    expect(onSubmit).toHaveBeenCalled();

});
