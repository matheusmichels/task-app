import React, { Component } from 'react';
import {
  Modal,
  Switch,
  DatePickerAndroid,
  TimePickerAndroid
} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import {
  AddButton,
  AddText,
  CancelButton,
  ConfirmButton,
  EditorButtons,
  Container,
  Selector,
  Form,
  Title,
  Separator,
  Regular,
  TaskName,
  Members,
  Deadline,
  SwitchContainer
} from './styles';

export default class TaskModal extends Component {
  state = {
    important: false
  };

  handleChangeDate = async () => {
    try {
      await DatePickerAndroid.open({
        minDate: new Date(),
        date: new Date(),
        mode: 'calendar'
      });
    } catch {}
  };

  handleChangeTime = async () => {
    try {
      await TimePickerAndroid.open({
        hour: 21,
        minute: 0,
        is24Hour: true
      });
    } catch {}
  };

  handleSwitch = value => {
    this.setState({ important: value });
  };

  render() {
    const { visible, closeModal } = this.props;
    const { important } = this.state;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          closeModal();
        }}
      >
        <Container>
          <Form>
            <Title>New Task</Title>
            <Separator />
            <Regular>Task 06</Regular>
            <TaskName>Website Design</TaskName>
            <Separator />
            <Regular size={12}>Member</Regular>
            <Members>
              <SvgUri
                width="40"
                height="40"
                source={require('../../assets/images/avatar.svg')}
                style={{ marginLeft: 20 }}
              />
              <SvgUri
                width="40"
                height="40"
                source={require('../../assets/images/avatar-2.svg')}
                style={{ marginLeft: 10 }}
              />
              <AddButton>
                <AddText>add members</AddText>
              </AddButton>
            </Members>
            <Separator />
            <Regular size={12}>Deadline</Regular>
            <Deadline>
              <Selector onPress={this.handleChangeDate}>
                <Regular size={12}>22/02</Regular>
              </Selector>
              <Selector onPress={this.handleChangeTime}>
                <Regular size={12}>21:00</Regular>
              </Selector>
              <SwitchContainer>
                <Switch
                  value={important}
                  onValueChange={this.handleSwitch}
                  thumbColor="#fff"
                  tintColor="#00e5ff"
                />
                <Regular size={10}>Important</Regular>
              </SwitchContainer>
            </Deadline>
            <Separator onlyTop />
            <EditorButtons>
              <CancelButton onPress={() => closeModal()}>
                <Regular size={14}>Cancel</Regular>
              </CancelButton>
              <ConfirmButton onPress={() => closeModal()}>
                <Regular size={14} white>
                  Confirm
                </Regular>
              </ConfirmButton>
            </EditorButtons>
          </Form>
        </Container>
      </Modal>
    );
  }
}
