import { useState } from 'react'

const GuestRoom = () => {
  return (
    <>
      <h3 className="my-4">Room 1</h3>
      <div className="d-flex justify-content-between my-4">
        <h3>Adults</h3>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: 100 }}
        >
          <button
            className="btn text-primary"
            style={{ background: '#F7FBFF', borderColor: '#BFDAF9' }}
          >
            -
          </button>
          <span>2</span>
          <button
            className="btn text-primary"
            style={{ background: '#F7FBFF', borderColor: '#BFDAF9' }}
          >
            +
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between my-4">
        <h3>Children</h3>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: 100 }}
        >
          <button
            className="btn text-primary"
            style={{ background: '#F7FBFF', borderColor: '#BFDAF9' }}
          >
            -
          </button>
          <span>0</span>
          <button
            className="btn text-primary"
            style={{ background: '#F7FBFF', borderColor: '#BFDAF9' }}
          >
            +
          </button>
        </div>
      </div>
      <hr style={{ background: '#ccc' }} />
    </>
  )
}

export default GuestRoom
