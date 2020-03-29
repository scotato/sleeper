import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useWindowSize } from '@reach/window-size'

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

const TimeText = styled.text.attrs({
  startOffset: '50%',
  textAnchor: 'middle'
})`
  fill: white;
  line-height: 1;
  user-select: none;
`

const Clock = styled(TimeText)`
  font-size: 96px;
  font-weight: 200;
`

const Calendar = styled(TimeText)`
  font-size: 20px;
`

export default () => {
  const { width } = useWindowSize()
  const timestamp = useTimestamp()
  const clock = timestampToClock(timestamp)
  const calendar = timestampToCalendar(timestamp)
  const cx = width / 2

  return (
    <>
      <Clock x={cx} y={128 + 16}>
        {clock}
      </Clock>

      <Calendar x={cx} y={128 + 48}>
        {calendar}
      </Calendar>
    </>
  )
}

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
