import * as React from 'react';

export default ({ user, update, index }: any) => {
  return (
    <tr onClick={() => update({ active: index })}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>8 {user.phone}</td>
    </tr>
  );
};