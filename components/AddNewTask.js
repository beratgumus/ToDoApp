import React from 'react';

export class AddNewTask extends React.Component {
  constructor() {
    super();
    this.justSubmitted = this.justSubmitted.bind(this);
  }

  justSubmitted(event) {
    event.preventDefault();
    var input = event.target.querySelector('input'); //event.target is refer to a form
    var value = input.value;
    input.value = '';
    this.props.updateList(value);

  }

  render() {
    return (
      <div>
        <form onSubmit={this.justSubmitted}>
          <input type="text"/>
        </form>
      </div>

    );
  }
}
