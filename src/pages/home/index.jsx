import { Link } from 'react-router-dom'

import HomeBg from '../../assets/home.svg'
import Logo from '../../assets/logo.svg'
import Arrow from '../../assets/arrow.svg'
import Location from '../../assets/location.svg'
import Expedia from '../../assets/logo-expedia.svg'
import Booking from '../../assets/logo-booking.svg'
import Hotel from '../../assets/logo-hotels.svg'
import Agoda from '../../assets/logo-agoda.svg'
import People from '../../assets/people.svg'

const Home = () => {
  return (
    <div
      className="px-3 py-4"
      style={{
        background: `url(${HomeBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}
    >
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <h1 style={{ width: '65%', margin: '90px 0 100px 0' }}>
        Find the perfect deal, always.
      </h1>
      <div className="card rounded py-3 px-2">
        <div className="input-group mb-3">
          <span
            className="input-group-text bg-white d-flex justify-content-center align-items-center"
            id="basic-addon1"
            style={{ borderRight: 0 }}
          >
            <img src={Location} alt="Location" />
          </span>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Type city, place, or hotel name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ borderRight: 0, borderLeft: 0 }}
          />
          <span
            className="input-group-text bg-white justify-content-center align-items-center"
            id="basic-addon1"
            style={{ borderLeft: 0 }}
          >
            <img src={Arrow} alt="Arrow" />
          </span>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Check-in"
              />
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Check-out"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-white d-flex justify-content-center align-items-center"
                id="basic-addon1"
                style={{ borderRight: 0 }}
              >
                <img src={People} alt="People" />
              </span>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="2"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{ borderLeft: 0 }}
              />
            </div>
          </div>
        </div>

        <Link to="/room" className="d-grid gap-2">
          <button className="btn btn-lg text-white bg-primary">Search</button>
        </Link>
      </div>
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ marginTop: 80 }}
      >
        <img src={Expedia} alt="Expedia" />
        <img src={Booking} alt="Boooking" />
        <img src={Hotel} alt="Hotels" />
        <img src={Agoda} alt="Agoda" />
      </div>
    </div>
  )
}

export default Home
