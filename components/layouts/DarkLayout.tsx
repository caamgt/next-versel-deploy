import { FC, PropsWithChildren } from 'react';

const DarkLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Dark layout</h3>
      {children}
    </div>
  );
};

export default DarkLayout;
