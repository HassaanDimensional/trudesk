import React from 'react';
import api from '../../../api';
import Button from 'components/Button';
import EasyMDE from 'components/EasyMDE';
import SettingItem from '../../../components/Settings/SettingItem/index';
import Input from '../../../components/Input';

const TempSettingsContainer = ({ active }) => {

  const [inputValue, setInput] = React.useState('');
  const [selectValue, setSelect] = React.useState('');
  const [dropDown, setOptions] = React.useState(['Salman', 'Hassaan', 'Adil', 'Ubaid']);
  const [editorValue, setEditorValue] = React.useState('');

  const handleOnSaveButton = () => {
    if (!inputValue) {
      return;
    }
    if (!selectValue) {
      return;
    }
    if (!editorValue) {
      return;
    }
    console.log(inputValue);
    console.log(selectValue);
    console.log(editorValue);
    const payload = {
      input: inputValue,
      select: selectValue,
      editorValue: editorValue,
    };
    const res= api.blogEditor.postBlogForm(payload);
  };

  const handleOnInput = (value) => {
    setInput(value);
  };
  const handleOnSelect = (value) => {
    setSelect(value);
  };

  return (
    <div className={!active ? 'hide' : ''}>
      {/* <div style={{display: "flex"}}> */}
      <div>
        <select
          className="uk-dropdown-small"
          onChange={(e) => {
            handleOnSelect(e.target.value);
          }}
        >
          <option>Select Option</option>

          {dropDown.map((x) => {
            return <option>{x}</option>;
          })}
        </select>

        <Input name={'somethhing'} type={'text'} defaultValue={'Input text field'} onChange={handleOnInput} />
      </div>
      <SettingItem title={'Privacy Policy'} subtitle={'Paste in HTML/Text of your privacy policy.'}>
        <div>
          <EasyMDE
            // defaultValue={this.getSetting('privacyPolicy')}
            onChange={(v) => {
              setEditorValue(v);
            }}
          />
        </div>
        <div className="uk-clearfix">
          <Button
            text={'Save'}
            extraClass={'uk-float-right'}
            flat={true}
            style={'success'}
            waves={true}
            onClick={() => {
              handleOnSaveButton();
            }}
          />
        </div>
      </SettingItem>
    </div>
  );
};

export default TempSettingsContainer;
