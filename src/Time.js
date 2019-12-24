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

export const dateToSeconds = date => 
  date.seconds() + (date.minutes() * 60) + (date.hours() * 60 * 60)

export const SECONDSPERMINUTE = 60
export const MINUTESPERHOUR = 60
export const HOURSPERDAY = 24
export const DAYSPERMONTH = moment().daysInMonth()
export const MONTHSPERYEAR = 12

export const SECONDSPERHOUR = SECONDSPERMINUTE * MINUTESPERHOUR
export const SECONDSPERDAY = SECONDSPERHOUR * HOURSPERDAY
export const SECONDSPERMONTH = SECONDSPERDAY * DAYSPERMONTH
export const SECONDSPERYEAR = SECONDSPERMONTH * MONTHSPERYEAR

export const MINUTESPERDAY = MINUTESPERHOUR * HOURSPERDAY
export const MINUTESPERMONTH = MINUTESPERDAY * DAYSPERMONTH
export const MINUTESPERYEAR = MINUTESPERMONTH * MONTHSPERYEAR

export const HOURSPERMONTH = HOURSPERDAY * DAYSPERMONTH
export const HOURSPERYEAR = HOURSPERMONTH * MONTHSPERYEAR
export const DAYSPERYEAR = DAYSPERMONTH * MONTHSPERYEAR

export default Time
