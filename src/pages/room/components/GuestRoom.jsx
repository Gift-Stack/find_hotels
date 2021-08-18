import { useState, useContext } from 'react'
import RoomContext from '../../../context/roomContext'

const GuestRoom = ({ roomNumber }) => {
  const { deleteRoom } = useContext(RoomContext)
  const [childrenCounter, setChildrenCounter] = useState(0)
  const [adultCounter, setAdultCounter] = useState(2)
  const [toggleRoom, setToggleRoom] = useState(false)

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

  const handleToggleRoom = () => setToggleRoom(!toggleRoom)
  const handleDeleteRoom = () => deleteRoom(roomNumber)

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center my-4"
        style={{ cursor: 'pointer' }}
      >
        <h3
          className="d-flex justify-content-between"
          onClick={handleToggleRoom}
        >
          <span>Room 1</span>
        </h3>
        <h5 className="text-danger" onClick={handleDeleteRoom}>
          {toggleRoom && 'Delete room'}
        </h5>
      </div>
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
