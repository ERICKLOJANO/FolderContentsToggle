import React, {Component} from 'react'
import './FolderContents.css'

class FolderContents extends Component{
  constructor(props){
    super(props);

    this.state = {
      shown: false
    };
  }

  Clicked = () => {
    if(this.state.shown){
      this.setState({shown: false})
    }
    else{
      this.setState({shown: true})
    }
  };

  render(){

    let filesShown = this.state.shown ? null : (
      <div>
        <ul id = "list">
          <li>Folder 1</li>
          <li>Folder 2</li>
          <li>Folder 3</li>
        </ul>
      </div>
    );
    return (
      <div>
        <h1>Home</h1>
        {filesShown}
        <button onClick={this.Clicked}>Toggle Folders</button>
      </div>
);
  }

}
export default FolderContents;
