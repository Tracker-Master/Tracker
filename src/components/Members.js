import React, { useState, useEffect, useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { palette } from 'Styles/GlobalStyles';

import { Context } from 'Context/BoardContext';
import { StyledMembers, Member } from 'Styles/components/MembersStyles';

export const Members = () => {
  const { member } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const Loader = () => {
    let results = [];

    for (let i = 0; i < 5; i++) {
      results.push(
        <Member key={i}>
          <picture>
            <Skeleton circle={true} height={38} width={38} />
            <figcaption>
              <Skeleton height={20} />
            </figcaption>
          </picture>
        </Member>
      );
    }

    return (
      <SkeletonTheme
        color={`${palette.skeletonColor}`}
        highlightColor={`${palette.whiteColor}`}
      >
        <StyledMembers>{results}</StyledMembers>
      </SkeletonTheme>
    );
  };

  if (loading) {
    return Loader();
  } else {
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
  }
};
