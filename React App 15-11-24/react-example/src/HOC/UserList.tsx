import React, { Component } from 'react';

import withFetchHoc from './withFetchHoc';

type User = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  data: User[] | null;
};

class UserList extends Component<UserListProps> {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>Higher Order Component Demo</h1>
        <h2>User List</h2>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Wrap the UserList component with the `withFetch` HOC
export default withFetchHoc<User[] | null>(UserList);
