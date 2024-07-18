import React from 'react';

function Chips({value}: {value: string;}) {
  return (
    <div className='inline-block bg-slate-300 text-black-200 px-4 py-2 border-[1px] rounded-[20px]'>{value}</div>
  );
}

export default Chips;