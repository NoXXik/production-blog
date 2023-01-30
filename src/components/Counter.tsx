import { useState } from 'react'
import classes from './Counter.module.scss'


export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <>
        <div>Counter: {count}</div>
        <button className={classes.btn} onClick={() => setCount(prev => prev + 1)}>add 1</button>
    </>
  )
}
