import React, { FC } from "react"

export const Preloader: FC = () => {
  return (
    <div className="preloader">
      <div className="preloader-box">
        <div id="spinningSquaresG">
          <div id="spinningSquaresG_1" className="spinningSquaresG"></div>
          <div id="spinningSquaresG_2" className="spinningSquaresG"></div>
          <div id="spinningSquaresG_3" className="spinningSquaresG"></div>
          <div id="spinningSquaresG_4" className="spinningSquaresG"></div>
          <div id="spinningSquaresG_5" className="spinningSquaresG"></div>
          <div id="spinningSquaresG_6" className="spinningSquaresG"></div>
          <div id="spinningSquaresG_7" className="spinningSquaresG"></div>
          <div id="spinningSquaresG_8" className="spinningSquaresG"></div>
        </div>
      </div>
    </div>
  )
}
