import { useState } from 'react'

const GuestRoom = () => {
  const [childrenCounter, setChildrenCounter] = useState(0)
  const [adultCounter, setAdultCounter] = useState(2)

  const handleIncrement = (toIncrement) => {
    if (toIncrement === 'child') {
      setChildrenCounter(childrenCounter + 1)
    }
    if (toIncrement === 'adult') {
      setAdultCounter(adultCounter + 1)
    }
  }

  const handleDecrement = (toDecrement) => {
    if (toDecrement === 'child') {
      childrenCounter > 0 && setChildrenCounter(childrenCounter - 1)
    }
    if (toDecrement === 'adult') {
      adultCounter > 0 && setAdultCounter(adultCounter - 1)
    }
  }

  return (
    <>
      <h3 className="my-4">Room 1</h3>
      <div className="d-flex justify-content-between my-4">
        <h3>Adults</h3>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: 110 }}
        >
          <button
            className="btn text-primary"
            style={{ background: '#F7FBFF', borderColor: '#BFDAF9' }}
            onClick={() => handleDecrement('adult')}
          >
            <i className="bi bi-dash-lg"></i>
          </button>
          <span>{adultCounter}</span>
          <button
            className="btn text-primary"
            style={{ background: '#F7FBFF', borderColor: '#BFDAF9' }}
            onClick={() => handleIncrement('adult')}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between my-4">
        <h3>Children</h3>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: 110 }}
        >
          <button
            className="btn text-primary"
            style={{ background: '#F7FBFF', borderColor: '#BFDAF9' }}
            onClick={() => handleDecrement('child')}
          >
            <i className="bi bi-dash-lg"></i>
          </button>
          <span>{childrenCounter}</span>
          <button
            className="btn text-primary"
            style={{ background: '#F7FBFF', borderColor: '#BFDAF9' }}
            onClick={() => handleIncrement('child')}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
      <hr style={{ background: '#ccc' }} />
    </>
  )
}

export default GuestRoom
