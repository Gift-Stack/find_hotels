import { useState, useContext } from 'react'
import RoomContext from '../../../context/roomContext'

const GuestRoom = ({ roomNumber }) => {
  const { deleteRoom } = useContext(RoomContext)
  const [childrenCounter, setChildrenCounter] = useState(0)
  const [adultCounter, setAdultCounter] = useState(2)
  const [toggleChildren, setToggleChildren] = useState(false)
  const [childrenCounterArr, setChildrenCounterArr] = useState([])

  const handleIncrement = (toIncrement) => {
    if (toIncrement === 'child') {
      setChildrenCounter(childrenCounter + 1)
      setChildrenCounterArr([...childrenCounterArr, childrenCounter + 1])
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

  const handleDeleteRoom = () => deleteRoom(roomNumber)

  const handleToggleChildren = () => {
    setToggleChildren(!toggleChildren)
  }

  const handleFilter = (id) => {
    handleDecrement('child')
    setChildrenCounterArr(childrenCounterArr.filter((child) => child !== id))
  }

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center my-4"
        style={{ cursor: 'pointer' }}
      >
        <h3 className="d-flex justify-content-between">
          <span>Room {roomNumber}</span>
        </h3>
        <h5 className="text-danger" onClick={handleDeleteRoom}>
          Remove room
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
        <h3 onClick={handleToggleChildren}>Children</h3>
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
      {toggleChildren && (
        <div
          style={{
            marginLeft: 10,
            paddingLeft: 15,
            borderLeft: '1px solid #ddd'
          }}
        >
          {childrenCounterArr.map((child, index) => (
            <div
              key={child}
              className="mb-3 d-flex justify-content-between align-items-center"
            >
              <span>Child {index + 1} age</span>
              <div className="d-flex align-items-center">
                <select
                  name={roomNumber}
                  id={roomNumber}
                  className="form-select form-select-lg"
                  style={{ width: 85, marginRight: 15 }}
                >
                  <option value="age" defaultValue>
                    age
                  </option>
                  <option value="10">10</option>
                  <option value="9">9</option>
                  <option value="8">8</option>
                  <option value="7">7</option>
                  <option value="6">6</option>
                  <option value="5">5</option>
                </select>
                <i
                  className="bi bi-x-lg text-danger"
                  onClick={() => handleFilter(child)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr style={{ background: '#ccc' }} />
    </>
  )
}

export default GuestRoom
