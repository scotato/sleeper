import React from 'react'

export default () => (
  <defs>
    <radialGradient id="orange" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style={{ stopColor: '#EE762B', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#F9CD52', stopOpacity: 0.5 }} />
    </radialGradient>

    <radialGradient id="pink" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style={{ stopColor: '#E45B6D', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#E45B6D', stopOpacity: 0.5 }} />
    </radialGradient>

    <radialGradient id="purple" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style={{ stopColor: '#CB73D9', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#CB73D9', stopOpacity: 0.5 }} />
    </radialGradient>

    <radialGradient id="orangeAlpha" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style={{ stopColor: '#EE762B', stopOpacity: 0 }} />
      <stop offset="100%" style={{ stopColor: '#F9CD52', stopOpacity: 0.9 }} />
    </radialGradient>

    <radialGradient id="pinkAlpha" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style={{ stopColor: '#E45B6D', stopOpacity: 0 }} />
      <stop offset="100%" style={{ stopColor: '#E45B6D', stopOpacity: 0.9 }} />
    </radialGradient>

    <radialGradient id="purpleAlpha" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style={{ stopColor: '#CB73D9', stopOpacity: 0 }} />
      <stop offset="100%" style={{ stopColor: '#CB73D9', stopOpacity: 0.9 }} />
    </radialGradient>
  </defs>
)
