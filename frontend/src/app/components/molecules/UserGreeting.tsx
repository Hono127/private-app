import React from 'react';
import Heading1 from '../atoms/Heading/Heading1';

const UserGreeting = ({ userName }: { userName: string | null }) => {
  return <Heading1>ようこそ{userName}さん</Heading1>;
};

export default UserGreeting;
