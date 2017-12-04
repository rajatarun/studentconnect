import { Component } from 'react';


class Writing extends Component {
    constructor(props) {
        super(props);
        this.state = {word: ''};
        this.counter = 0;
    }
    render(){
        var text = this.props.text;
        var countInt = setInterval(function(){
            if(this.counter > text.length){
                clearInterval(countInt);
            }
            this.setState({word: text.slice(0,this.counter)});
            this.counter++;
        }.bind(this),100,text.length);
        return this.state.word;
    }
}
export default Writing;