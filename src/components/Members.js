import React, { useContext } from 'react';

import { Context } from 'Context/BoardContext';
import { MembersContainer, Member } from 'Styles/pages/BoardInfoStyles';

export const Members = () => {
  const { member } = useContext(Context);
  return (
    <MembersContainer>
      {member.map((member) => (
        <Member key={member.id}>
          <picture>
            <img
              src="https://www.gravatar.com/avatar/?d=mp"
              alt={`Image of ${member.fullName}`}
            />
          </picture>
          <p>{member.fullName}</p>
        </Member>
      ))}
    </MembersContainer>
  );
};
