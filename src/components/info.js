import React from 'react';
import './css/info.scss';

function Info(props) {
    return (
        <div className="InfoItem">
          <h3>
            {props.name}
          </h3>
          <p className="InfoDescription">
            {props.desc}
          </p>
        </div>
    )
} 

export default Info;