import React, { Component } from 'react';




class Form extends Component {
  render() {
    return (
      <form>

          <div>
            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />

          </div>
          <div >
            <input id="last_name" type="text" className="validate" />
          </div>

      </form>
    );
  }
}


export default Form;
