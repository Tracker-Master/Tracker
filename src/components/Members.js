import React, { useContext } from 'react';

import { Context } from 'Context/BoardContext';
import { palette, sizes, devices } from 'Styles/GlobalStyles';
import { StyledMembers, Member } from 'Styles/components/MembersStyles';

export const Members = () => {
  const { member } = useContext(Context);
  return (
    <StyledMembers>
      {member.map((member) => (
        <Member key={member.id}>
          <picture>
            <img
              src={`https://ui-avatars.com/api/?background=random&name=${member.fullName}&bold=true`}
              alt={`Image of ${member.fullName}`}
            />
            <figcaption>{member.fullName}</figcaption>
          </picture>
        </Member>
      ))}
    </StyledMembers>
  );
};
