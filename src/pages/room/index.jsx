import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import RoomContext from '../../context/roomContext'
import GuestRoom from './components/GuestRoom'

const Room = () => {
  const { rooms, addRoom, getRooms } = useContext(RoomContext)
  const [roomCount, setRoomCount] = useState(1)
  const [guestCount, setGuestCount] = useState(2)

  useEffect(() => {
    getRooms()
    // eslint-disable-next-line
  }, [rooms])

  const AddRoom = () => {
    addRoom()
    getRooms()
  }
  return (
    <div>
      <div
        className="bg-white border p-3 d-flex justify-content-center position-fixed top-0 w-100"
        style={{ zIndex: 200 }}
      >
        <Link to="/">
          <i className="bi bi-x-lg position-absolute start-0 mx-3 text-primary"></i>
        </Link>
        <p className="text-center text-bold">Who is staying?</p>
      </div>
      <div
        className="position-relative"
        style={{ margin: '90px 16px 0 16px', minHeight: '85vh', zIndex: 1 }}
      >
        {rooms.map((room) => (
          <GuestRoom key={room} />
        ))}

        <div className="d-grid gap-2" style={{ marginBottom: 100 }}>
          <button
            className="btn btn-lg text-primary"
            style={{ background: '#F7FBFF', borderColor: '#BFDAF9' }}
            onClick={AddRoom}
          >
            <i className="bi bi-plus text-primary"></i> Add Room
          </button>
        </div>

        <div
          className="d-grid gap-2 position-fixed bottom-0"
          style={{ width: '92%', marginBottom: 10 }}
        >
          <button className="btn btn-lg text-white bg-primary">
            <i className="bi bi-search text-white"></i> Search {roomCount} Room
            {roomCount > 1 && 's'} • {guestCount} guests
          </button>
        </div>
      </div>
    </div>
  )
}

export default Room
