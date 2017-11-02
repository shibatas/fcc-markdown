//Marked: for CodePen, use CDN link https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.js
import React, { Component } from 'react';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';
import './App.css';

const initialText = "Sample Text\n=======\n\nSomewhat Big Heading\n-----------\n\n### Not That Big of a Heading\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nThis  \nwas a line break\n\nYou can type *italic*, **bold**,\n`monospace`, or if you change your mind do a ~~strikethrough~~ .\n\nUnordered list:\n\n  * this\n  * that\n  * and may that too\n\nNumbered list:\n\n  1. Me\n  2. You\n  3. Maybe that other guy over there too\n\n"

//parent component
class App extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      output: {__html: marked(initialText)},
    }
  }
  update() {
    this.setState({
      output: {__html: marked(document.getElementById('input').value)},
    });
  }
  render() {
    return (
      <div>
        <div className="App">
          <h1>Markdown Previewer</h1>
          <p>Type markdown in the box. Preview will show on the right</p>
          <Input action={this.update} boxHeight={this.state.height}/>
          <Output text={this.state.output}/>
        </div>
        <Footer />
      </div>
    );
  }
}
//textarea on left side
class Input extends Component {
  render() {
    return (
      <form className='left'>
        <Textarea id='input' defaultValue={initialText} onChange={this.props.action} />
      </form>
    );
  }
}
//markdown preview on right side
class Output extends Component {
  render() {
    return (
      <div className='right' dangerouslySetInnerHTML={this.props.text}/>
    );
  }
}
//as you might have guessed... footer
class Footer extends Component {
  render() {
    return (
      <footer>
        <hr/>
          <p>This is a <a href="https://www.freecodecamp.org/challenges/build-a-camper-leaderboard" target="_blank" rel="noopener noreferrer">freeCodeCamp project</a>.
          See my other work on <a className="fa fa-github fa-2x" aria-hidden="true" href="https://github.com/shibatas/" target="_blank" rel="noopener noreferrer"></a>  and
          <a className="fa fa-codepen fa-2x" aria-hidden="true" href="https://codepen.io/Shohei51/" target="_blank" rel="noopener noreferrer"></a>.</p>
          <p>Shohei Shibata &#9426; copyright 2017</p>
      </footer>
    );
  }
}

export default App;
