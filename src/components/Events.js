import React from 'react/lib/React';

import Button from 'react-bootstrap/lib/Button';

export default React.createClass({
  render() {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return (
      <div className="well" style={wellStyles}>
        <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
        <Button bsSize="large" block>Block level button</Button>
      </div>
    );
  }
});
