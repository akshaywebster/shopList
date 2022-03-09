import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [list]) // re-render component every time list changes instead of fixed 3 sec

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
