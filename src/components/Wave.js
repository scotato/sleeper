import React from 'react'

export default () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: 'rgb(255,0,0)', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: 'rgb(255,255,0)', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <path fill="url(#gradient)" fill-opacity="0.75" d="M0,32L60,64C120,96,240,160,360,165.3C480,171,600,117,720,85.3C840,53,960,43,1080,69.3C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg>
)
