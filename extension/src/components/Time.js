import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
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

const Time = styled.div`
  display: grid;
  margin-bottom: 32px;
  grid-template-rows: auto;
  grid-row-gap: 4px;
  place-content: center;
  text-align: center;
  user-select: none;
`

const TimeText = styled.span`
  color: white;
  line-height: 1;
`

const Clock = styled(TimeText)`
  font-size: 96px;
  font-weight: 200;
`

const Calendar = styled(TimeText)`
  font-size: 20px;
`

export default () => {
  const timestamp = useTimestamp()
  const clock = timestampToClock(timestamp)
  const calendar = timestampToCalendar(timestamp)

  return (
    <Time>
      <Clock>
        {clock}
      </Clock>

      <Calendar>
        {calendar}
      </Calendar>
    </Time>
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
