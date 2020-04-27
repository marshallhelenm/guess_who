import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ModalExampleSize extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <div>
        <Button onClick={this.show('mini')}>Mini</Button>

        <Modal size="mini" open={open} onClose={this.close}>
          <Modal.Content>
            <h3>Are you sure this is your guess?</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close()}>No</Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleSize
