function base(props) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
  }
}

export function CalendarIcon(props) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
      <path d="M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01M8.5 17.5h.01M12 17.5h.01" />
    </svg>
  )
}

export function BookIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5c0-.83-.67-1.5-1.5-1.5H12v16h6.5c.83 0 1.5-.67 1.5-1.5v-13Z" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  )
}

export function MapIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M9 4 3 6.5v13L9 17l6 3 6-2.5v-13L15 7 9 4Z" />
      <path d="M9 4v13M15 7v13" />
    </svg>
  )
}

export function CompassIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z" />
    </svg>
  )
}

export function ChatIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H9l-4 3.5v-3.5h-.5A1.5 1.5 0 0 1 3 15.5v-10Z" />
    </svg>
  )
}

export function SparkleIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3c.4 3.2 1.3 5 3 6.5S18.8 11.6 21 12c-3.2.4-5 1.3-6.5 3S12.4 18.8 12 21c-.4-3.2-1.3-5-3-6.5S5.2 12.4 3 12c3.2-.4 5-1.3 6.5-3S11.6 5.2 12 3Z" />
    </svg>
  )
}
