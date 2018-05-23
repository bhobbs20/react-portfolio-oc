import React, { Component } from 'react';
import Download from '@axetroy/react-download';



class DownloadResume extends Component {



  render() {
    return (
      <div > 
      <div>
      <Download file="text.txt">
        <button type="button">Click and Download file</button>
      </Download>
    </div>
    
      </div>
    );
  }
}

export default DownloadResume;