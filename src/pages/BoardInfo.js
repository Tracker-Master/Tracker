import React, { useState, useEffect } from 'react';
// import { Link, useHistor, params } from 'react-router-dom';

import { getBoards } from 'Services/getBoards';
import { getCards } from 'Services/getCards';
import { getLists } from 'Services/getLists';
import { getMembers } from 'Services/getMembers';

export const BoardInfo = () => {
  getBoards();
  getCards();
  getLists();
  getMembers();

  // const [boardID, setBoardID] = useState(getBoards);
  // const [memberID, setMemberID] = useState([]);
  // const [listID, setListID] = useState([]);
  // const [cardID, SetCardID] = useState([]);

  // useEffect(() => {
  // getBoards().then((boardID) => setBoardID(boardID));
  // getCards().then((cardID) => setCardID(cardID));
  // getLists().then((listID) => setListId(listID));
  // getMembers().then((memberID) => setMemberId(memberID));
  // }, []);

  // const handleGoBack = () => {
  //   history.goBack();
  // };

  return <div>Hola Mundo</div>;
};
