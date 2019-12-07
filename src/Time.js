import { useState, useEffect } from 'react'
import moment from 'moment'

const getTime = (format = 'h:mm A MMM D') => moment().format(format)

const Time = ({ format }) => {
  const [time, setTime] = useState(getTime(format))
  
  useEffect(() => {
    const timer = setInterval(() =>
      setTime(getTime(format))
    , 1000)
    return () => clearInterval(timer)
  })

  return time
}

export default Time
