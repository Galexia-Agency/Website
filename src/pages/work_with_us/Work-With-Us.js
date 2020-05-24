import React, { useEffect } from 'react';
import './css/work_with_us.scss' ;

function WorkWithUs() {
  useEffect(() => {
    document.title = 'Work With Us | Galexia | The Best Creative Agency in the Galaxy';
  })
  return (
    <div className="PageContent">
      <h2>Work With Us</h2>
    </div>
  );
}

export default WorkWithUs;