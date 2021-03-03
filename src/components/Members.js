import React, { useContext } from 'react';

import { Context } from 'Context/BoardContext';
import { palette, sizes, devices } from 'Styles/GlobalStyles';
import { MembersContainer, Member } from 'Styles/components/MembersStyles';

export const Members = () => {
  const { member } = useContext(Context);
  return (
    <MembersContainer>
      {member.map((member) => (
        <Member key={member.id}>
          <picture>
            <img
              src={`https://ui-avatars.com/api/?background=random&name=${member.fullName}&bold=true`}
              alt={`Image of ${member.fullName}`}
            />
          </picture>
          <p>{member.fullName}</p>
        </Member>
      ))}
    </MembersContainer>
  );
};
