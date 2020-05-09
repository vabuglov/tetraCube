import React from 'react'
import commonFunctions from '../../services/commonFunctions.service';

const PagesContainer = (props) => {
  const commonFuncs = new commonFunctions();
  const currentDate = props.date || commonFuncs.parseSepareteDate();
  const title = props.title || "Title";

  return (
    <div className="contentContainer">
      <div>
        <div className="contentContainer_title">
          <div className="contentContainer_title-left">
            <h2>{title}</h2>
          </div>
          <div className="contentContainer_title-right">
            <span className="contentContainer_title-date desktopData">
              {currentDate}
            </span>
          </div>
        </div>
        <div className="contentContainer_form">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PagesContainer