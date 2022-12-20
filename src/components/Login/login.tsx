import React from 'react';

type Props = {
  onSubmit: (_?:unknown) => void;
}
const Login = ({onSubmit}:Props) => (
<div>
  <form onSubmit={event => {
    event.preventDefault();

    // @ts-expect-error Property 'elements' does not exist on type 'EventTarget'.ts(2339)
    const { username, password } = event.target.elements
    // To avoid the usage of any at-ts-rule, comment the previous lines and
    // uncomment the follwing:
    // const username = (event.target as HTMLFormElement).elements.namedItem('username') as HTMLInputElement;
    // const password = (event.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement;
    onSubmit({
      username: username.value,
      password: password.value
    });
  }}>
  <label htmlFor='username'>Username</label>
  <input type="text" id="username"></input>
  <label htmlFor='password'>Password</label>
  <input type="password" id="password"></input>
  <button type="submit">Submit</button>
  </form>
</div>
)

export {Login};