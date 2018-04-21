import React from 'react';

export class ToDoAppList extends React.Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
  }
  remove(element) {
    var value = element.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }
  render() {
    var items = this.props.tasks.map((element, key) => {
      return <li key={key}>
        <span>{element}</span>
        <button onClick={this.remove}>Remove</button>
      </li>
    });
    return (
      <div>
        {items}
      </div>

    );
  }
}
