import React, { PropTypes as T } from "react";

export default class Rownum extends React.Component {
  static propTypes = {
    rowNumber: T.string,
    bold: T.bool
  };

  render() {
    const style = { fontWeight: this.props.bold ? 700 : "normal" };
    return (
      <div style={style} className="RowNumber">
        {this.props.rowNumber}
      </div>
    );
  }
}
