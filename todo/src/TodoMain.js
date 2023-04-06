import React from "react";

class TodoMain extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {   
        return (
            <div>
                <h2>{this.state.date.toLocaleString()}.</h2>
            </div>
                );
            }
    }   
  
export default TodoMain;