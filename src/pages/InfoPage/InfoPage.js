import React from 'react'

const InfoPage = (props) => {
  return (
    <section className="infoPage">
      <div>
        <div className="infoPage_container">
          {props.content}
        </div>
      </div>
    </section>
  )
}

export default InfoPage
