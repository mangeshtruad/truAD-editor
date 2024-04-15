import React from 'react'

function card(props) {
  return (
    <div className="card info-card" style={{backgroundColor:"rgba(234, 231, 231, 0.776)"}}>
    <div className="card-body">
      <h5 className="card-title text-start">Total Upload Video
      {props.title}
      </h5>
      <div className="d-flex align-items-center">
        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-right-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082" />
          </svg>
        </div>
        <div className="ps-3">
          <h4>28
            {props.number}
          </h4>
        </div>
      </div>
    </div>
  </div>
  )
}

export default card