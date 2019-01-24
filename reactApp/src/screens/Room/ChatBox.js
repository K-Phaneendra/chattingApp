import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';
import { sendMessage } from '../../Socket/socket';

const FieldGroup = ({
  id, label, help, ...props
}) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

class ChatBox extends Component {
  state = {
    message: ''
  };

  fieldOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  send = () => {
    sendMessage({ user: this.props.name, message: this.state.message });
  };

  render() {
    return (
      <div>
        <div>{}</div>
        <div>
          <form>
            <div style={{ float: 'left', marginLeft: '10%', width: '50%' }}>
              <FieldGroup
                id="formControlsText"
                type="text"
                name="message"
                // label="Name"
                placeholder="Enter Message"
                onChange={this.fieldOnChange}
              />
            </div>
            <div style={{ float: 'left', marginLeft: '5%', marginTop: '1%' }}>
              <Button bsStyle="primary" onClick={this.send}>

                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatBox;
