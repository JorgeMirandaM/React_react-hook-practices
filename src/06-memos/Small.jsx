import {memo} from 'react';

export const Small = memo(({value}) => {


    console.log('Me volvi a a generar');

  return (
    <small>{value}</small>
  )
})
