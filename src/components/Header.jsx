import React from 'react';
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Header({txtHeader}){
    return <header class="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start border-bottom">
        <FontAwesomeIcon icon="coffee" />
        <span className="fs-4">Example Header</span>
      </div>
    </div>
  </header>
}


