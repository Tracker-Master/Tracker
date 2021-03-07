import React, { useContext } from 'react';
import { Context } from '../context/BoardContext';
import { StyledMembers, Member } from 'Styles/components/MembersStyles';

const Members = () => {
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

export default Members;
