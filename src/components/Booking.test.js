import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BookingForm from  './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Booking Table");
    expect(headingElement).toBeInTheDocument();
})
test('Initialize/Update Times', () => {
    render(<BookingForm />);
    const reserveButton = screen.getByRole("button");
    fireEvent.click(reserveButton);
  
  })

test('pass valid first name to test fname input field', () => {
    render(<BookingForm />);

    const inputfn = screen.getByTestId("fname");
    userEvent.type(inputfn, "Fathima");
 
    expect(screen.getByTestId("fname")).toHaveValue("Fathima");
  });

  test('pass valid last name to test lname input field', () => {
    render(<BookingForm />);
 
    const inputln = screen.getByTestId("lname");
    userEvent.type(inputln, "Mohamed");
 
    expect(screen.getByTestId("lname")).toHaveValue("Mohamed");
  });

  test('pass valid mobile number to test contact input field', () => {
    render(<BookingForm />);

    const inputcn = screen.getByTestId("contact");
    userEvent.type(inputcn, "2345678910");
 
    expect(screen.getByTestId("contact")).toHaveValue("2345678910");
  });

  test('pass valid number of guests to test guest input field', () => {
    render(<BookingForm />);

    const inputgs = screen.getByTestId("book-guests");
    userEvent.type(inputgs, "8");
 
    expect(screen.getByTestId("book-guests")).toHaveValue("8");
  });

  