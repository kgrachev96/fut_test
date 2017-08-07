import * as React from 'react';
import UserData from '../UserData';

import './style.scss';

export default ({ data, update }: any) => {
  if (!data) { return (<p>Loading...</p>); }

  const users = data.map((user: any, index: any) => {
    return (<UserData user={user} key={`user-${index}`} index={index} update={update} />);
  });

  return (
    <table className="user-list table table-striped">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        {users}
      </tbody>
    </table>
  );
};

