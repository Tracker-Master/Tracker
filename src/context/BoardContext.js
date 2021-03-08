import React, { useState, useEffect, useMemo } from 'react';

import { getBoards } from 'Services/getBoards';
import { getCards } from 'Services/getCards';
import { getLists } from 'Services/getLists';
import { getMembers } from 'Services/getMembers';

export const Context = React.createContext();

export const BoardContextProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [card, setCard] = useState([]);
  const [list, setList] = useState([]);
  const [member, setMember] = useState([]);

  useEffect(() => {
    const ID = location.pathname.split('/board/', 2)[1];

    getBoards({ boardID: `${ID}` }).then((board) => {
      // console.log(board);
      setBoard(board);
    });
    getCards({ boardID: `${ID}` }).then((card) => {
      // console.log(card);
      setCard(card);
    });
    getLists({ boardID: `${ID}` }).then((list) => {
      // console.log(list);
      setList(list);
    });
    getMembers({ boardID: `${ID}` }).then((member) => {
      // console.log(member);
      setMember(member);
    });
  }, []);

  const memoizedValue = useMemo(() => {
    return {
      board,
      card,
      list,
      member,
    };
  }, [board, card, list, member]);

  return (
    <Context.Provider
      value={memoizedValue}
      // {...props}
      // value={{
      //   board,
      //   setBoard,
      //   card,
      //   setCard,
      //   list,
      //   setList,
      //   member,
      //   setMember,
      // }}
    >
      {children}
    </Context.Provider>
  );
};
