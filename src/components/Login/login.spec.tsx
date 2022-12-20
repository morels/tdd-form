import React from 'react'
import {render, screen} from "@testing-library/react";
import { Login } from './login';

test('calls onSubmit with usrename and password',  ()=>{
 const handleSubmit = jest.fn();
 render(<Login onSubmit={handleSubmit}></Login>);
screen.getByLabelText<HTMLInputElement>(/username/i).value = 'chuck';
screen.getByLabelText<HTMLInputElement>(/password/i).value = 'norris';
screen.getByText(/submit/i).click();

expect(handleSubmit).toHaveBeenCalledTimes(1);
expect(handleSubmit).toHaveBeenCalledWith({
  username: 'chuck', password: 'norris'
})
});


