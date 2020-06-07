import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument();

});


test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId} = render(<CheckoutForm />);

    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const addressInput = getByLabelText (/address/i)
    const cityInput = getByLabelText(/city/i)
    const stateInput = getByLabelText(/state/i)
    const zipInput = getByLabelText(/zip/i)
    
    const submitButton = getByTestId(/button/i)

    fireEvent.change(firstNameInput, {
        target: {name: 'firstName', value: 'jamie'}
    })

    fireEvent.change(lastNameInput, {
        target: {name: 'lastName', value: 'sullivan'}
    })

    fireEvent.change(addressInput, {
        target: {name: 'address', value: '20 alder road'}
    })


    fireEvent.change(cityInput, {
        target: {name: 'city', value: 'norton'}
    })

    fireEvent.change(stateInput, {
        target: {name: 'state', value: 'ma'}
    })

    fireEvent.change(zipInput, {
        target: {name: 'zip', value: '02766'}
    })

    fireEvent.click(submitButton);

    const sucessMessage = screen.getByText(/woo-hoo/i)
    const details = screen.getAllByText(/jamie sullivan/i)

    expect(sucessMessage).toBeInTheDocument()
    expect(details).toBeInTheDocument()



});
