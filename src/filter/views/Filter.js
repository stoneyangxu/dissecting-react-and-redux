import React from 'react';
import Link from './link'
import { ALL, COMPLETED, UNCOMPLETED } from '../filterTypes'

function Filter() {
  return (
    <p>
      <Link filter={ALL}>{ALL}</Link>
      <Link filter={COMPLETED}>{COMPLETED}</Link>
      <Link filter={UNCOMPLETED}>{UNCOMPLETED}</Link>
    </p>
  )
}

export default Filter;
