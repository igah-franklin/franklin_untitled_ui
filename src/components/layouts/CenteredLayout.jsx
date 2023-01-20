import React from 'react'

const CenteredLayout = ({children}) => {
  return (
    <div className='px-5 md:px-10'>{children}</div>
  )
}

export default CenteredLayout