import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';
import ChatBox from './ChatBox';

const FieldGroup = ({
  id, label, help, ...props
}) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

class Room extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      openChatBox: false
    };
  }

  fieldOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  startChat = () => {
    const { name } = this.state;
    if (name !== '') {
      this.setState({ openChatBox: true });
    }
  };

  render() {
    return (
      <div>
        <h2>Welcome To Chat Room</h2>
        <div>
          <div>
            <form>
              <div style={{ float: 'left', marginLeft: '10%', width: '50%' }}>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  name="name"
                  // label="Name"
                  placeholder="Enter Name"
                  onChange={this.fieldOnChange}
                />
              </div>
              <div style={{ float: 'left', marginLeft: '5%', marginTop: '1%' }}>
                <Button bsStyle="primary" onClick={this.startChat}>

                  Start Chat
                </Button>
              </div>
            </form>
          </div>
          <div>
            {this.state.openChatBox ? <ChatBox name={this.state.name} /> : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
