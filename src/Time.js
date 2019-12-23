import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Time = ({ format = 'h:mm A MMM D', children }) => {
  const [timestamp, setTimestamp] = useState(moment().valueOf())
  const time = moment(timestamp).format(format)
  
  useEffect(() => {
    const timer = setInterval(() =>
      setTimestamp(moment().valueOf())
    , 1000)
    return () => clearInterval(timer)
  })

  return children ? (
    <>
      {time}
      {children(timestamp)}
    </>
  ) : time
}

export default Time
