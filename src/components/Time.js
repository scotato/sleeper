import { useState, useEffect } from 'react'
import moment from 'moment'

export const dateToSeconds = date => 
  date.seconds() + (date.minutes() * 60) + (date.hours() * 60 * 60)

export const timestampToClock = timestamp => moment(timestamp).format('h:mm')
export const timestampToCalendar = timestamp => moment(timestamp).format('dddd, MMMM D')

export const useTimestamp = () => {
  const [timestamp, setTimestamp] = useState(moment().valueOf())
  
  useEffect(() => {
    const timer = setInterval(() => setTimestamp(moment().valueOf()), 1000)
    return () => clearInterval(timer)
  })

  return timestamp
}

export default () => null

// const timestamp = useTimestamp()
// const clock = timestampToClock(timestamp)
// const calendar = timestampToCalendar(timestamp)

// import styled from 'styled-components'

// import { useTimestamp, timestampToClock, timestampToCalendar } from './Time'


//   <Clock x={cx} y={cy + 16} startOffset="50%" textAnchor="middle">
//     {clock}
//   </Clock>

//   <Calendar x={cx} y={cy + 48} startOffset="50%" textAnchor="middle">
//     {calendar}
//   </Calendar>


// const Clock = styled(animated.text)`
//   font-size: 96px;
//   fill: white;
//   line-height: 1;
//   user-select: none;
//   font-weight: 200;
// `

// const Calendar = styled(animated.text)`
//   font-size: 20px;
//   fill: white;
//   line-height: 1;
//   user-select: none;
// `


// export const SECONDSPERMINUTE = 60
// export const MINUTESPERHOUR = 60
// export const HOURSPERDAY = 24
// export const DAYSPERMONTH = moment().daysInMonth()
// export const MONTHSPERYEAR = 12

// export const SECONDSPERHOUR = SECONDSPERMINUTE * MINUTESPERHOUR
// export const SECONDSPERDAY = SECONDSPERHOUR * HOURSPERDAY
// export const SECONDSPERMONTH = SECONDSPERDAY * DAYSPERMONTH
// export const SECONDSPERYEAR = SECONDSPERMONTH * MONTHSPERYEAR

// export const MINUTESPERDAY = MINUTESPERHOUR * HOURSPERDAY
// export const MINUTESPERMONTH = MINUTESPERDAY * DAYSPERMONTH
// export const MINUTESPERYEAR = MINUTESPERMONTH * MONTHSPERYEAR

// export const HOURSPERMONTH = HOURSPERDAY * DAYSPERMONTH
// export const HOURSPERYEAR = HOURSPERMONTH * MONTHSPERYEAR
// export const DAYSPERYEAR = DAYSPERMONTH * MONTHSPERYEAR
