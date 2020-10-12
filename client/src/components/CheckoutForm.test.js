import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";
import App from '../App';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    render (<App />)
    //Act
    const formHeader = screen.getByText(/react plants/i);
    //Assert
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    //Arrange
    // render (<CheckoutForm />)

    //Act
    const onSubmit = jest.fn();
    const { getByTestId } = render(<CheckoutForm onSubmit= {onSubmit}/>);
    
    fireEvent.submit(getByTestId("successMessage"));

    //Assert
    expect(onSubmit).toHaveBeenCalled();

});
