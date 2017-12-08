import React from 'react';

// export default function TimeInput(props) {
//   return (
//     <div>
//       <div>
//         {props.label}
//       </div>
//       <div>
//         <input id={props.id} type="time" />
//       </div>
//     </div>
//   );
// }

export default class TimeInput extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.label}
        </div>
        <div>
          <input {...this.props.input} id={this.props.id} ref={input => (this.input = input)} type="time" />
        </div>
      </div>
    );
  }
}