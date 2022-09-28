import React from 'react';
import api from '../../../api';
import Button from 'components/Button';
import EasyMDE from 'components/EasyMDE';
import SettingItem from '../../../components/Settings/SettingItem/index';
import Input from '../../../components/Input';
import PageContent from 'components/PageContent';
import Table from 'components/Table';
import TableRow from 'components/Table/TableRow';
import TableCell from 'components/Table/TableCell';
import TableHeader from 'components/Table/TableHeader';
import PageTitle from 'components/PageTitle';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import CreateFAQModel from '../../Modals/CreateFAQModal';
// import EditFAQModel from '../../Modals/EditFAQModel';
// import Editor from '../../../components/CkEditor/CkEditor';
// import './temp.css'
// import '../../../../../node_modules/quill/dist/quill.snow.css';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const TempSettingsContainer = ({ active }) => {
  React.useEffect(() => {
    fetchAllRecords();
  }, []);

  const [formData, setFormData] = React.useState([]); //form data
  const [inputValue, setInput] = React.useState(''); //title
  const [selectValue, setSelect] = React.useState(''); //category
  const [editorValue, setEditorValue] = React.useState(''); //editor val
  const [blogId, setBlogId] = React.useState(''); //blog id
  const [createFAQModelState, setCreateFAQModelState] = React.useState(false);
  const [editFAQModelState, setEditFAQModelState] = React.useState(false);
  const dropDown = ['Salman', 'Hassaan', 'Adil', 'Ubaid'];

  const handleOnEditButton = async (value) => {
    setCreateFAQModelState(false);
    const editData = formData.find((x) => x._id == value);
    setEditFAQModelState(true);
    setBlogId(editData._id);
    setInput(editData.title);
    setSelect(editData.category);
    setEditorValue(editData.editorValue);
  };

  const handleOnUpdateButton = async () => {
    if (!inputValue || !selectValue || !editorValue) {
      return;
    }
    const payload = {
      title: inputValue,
      category: selectValue,
      editorValue: editorValue,
      _id: blogId,
    };
    const res = await api.blogEditor.editBlogForm(payload);
    if (res.data) {
      fetchAllRecords();
      setEditFAQModelState(false);
      setInput('Type Your Heading');
      setSelect('');
      setEditorValue('');
      setBlogId('');
    }
  };

  const handleOnDeleteButton = async (value) => {
    const payload = {
      id: value,
    };
    const res = await api.blogEditor.deleteBlogForm(payload);
    if (!res.data.isError) {
      setCreateFAQModelState(false);
      setEditFAQModelState(false);
      setInput('');
      setSelect('');
      setEditorValue('');
      fetchAllRecords();
    }
  };

  const handleOnInput = (value) => {
    setInput(value);
  };

  const handleOnCreateFAQ = () => {
    setInput('');
    setSelect('');
    setEditorValue('');
    setEditFAQModelState(false);
    setCreateFAQModelState(true);
  };

  const handleOnSaveButton = async () => {
    if (!inputValue) {
      return;
    }
    if (!selectValue) {
      return;
    }
    if (!editorValue) {
      return;
    }
    const payload = {
      title: inputValue,
      category: selectValue,
      editorValue: editorValue,
    };
    const res = await api.blogEditor.postBlogForm(payload);
    if (res) {
      setCreateFAQModelState(false);
      fetchAllRecords();
      setInput('');
      setSelect('');
      setEditorValue('');
    }
  };

  const fetchAllRecords = async () => {
    const res = await api.blogEditor.getBlogForm();
    if (res.data.data) {
      setFormData((prevState) => (prevState.data = res.data.data));
    }
  };

  return (
    <div className={!active ? 'hide' : ''}>
      {/* {createFAQModelState && (
        <CreateFAQModel>
          <h1>Create FAQ </h1>
          <select
            className="uk-dropdown-small"
            onChange={(e) => {
              setSelect(e.target.value);
            }}
          >
            <option>Select Category</option>

            {dropDown.map((x) => {
              return <option>{x}</option>;
            })}
          </select>

          <Input name={'somethhing'} type={'text'} defaultValue={'Type Your Heading'} onChange={handleOnInput} />

          <SettingItem title={'Privacy Policy'} subtitle={'Paste in HTML/Text of your privacy policy.'}>
            <EasyMDE
              // defaultValue={this.getSetting('privacyPolicy')}
              onChange={(v) => {
                setEditorValue(v);
              }}
            />
            <Editor />
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
        </CreateFAQModel>
      )} */}
      {/* <EasyMDE
              defaultValue={editorValue}
              onChange={(v) => {
                setEditorValue(v);
              }}
            /> */}
      {/* {editFAQModelState && (
        <EditFAQModel>
          <h1>Edit FAQ</h1>
          <select
            className="uk-dropdown-small"
            value={selectValue}
            onChange={(e) => {
              setSelect(e.target.value);
            }}
          >
            <option>Select Category</option>

            {dropDown.map((x) => {
              return <option>{x}</option>;
            })}
          </select>

          <Input name={'somethhing'} type={'text'} defaultValue={inputValue} onChange={handleOnInput} />

          <SettingItem title={'Privacy Policy'} subtitle={'Paste in HTML/Text of your privacy policy.'}>
         

            <Editor />

            <div></div>

            <div className="uk-clearfix">
              <Button
                text={'Update'}
                extraClass={'uk-float-right'}
                flat={true}
                style={'success'}
                waves={true}
                onClick={() => {
                  handleOnUpdateButton();
                }}
              />
            </div>
          </SettingItem>
        </EditFAQModel>
      )} */}

      <PageTitle
        title={'FAQ'}
        shadow={true}
        rightComponent={
          <div className={'uk-grid uk-grid-collapse'}>
            <div className={'uk-width-1-1 mt-15 uk-text-right'}>
              <Button
                text={'Create'}
                flat={false}
                small={true}
                waves={false}
                extraClass={'hover-accent'}
                onClick={() => handleOnCreateFAQ()}
              />
            </div>
          </div>
        }
      />

      <PageContent id={'teams-page-content'} padding={0} paddingBottom={0}>
        <Table
          headers={[
            <TableHeader key={0} width={'20%'} height={40} text={'ID'} padding={'8px 8px 8px 15px'} />,
            <TableHeader key={1} width={'40%'} text={'Category'} />,
            <TableHeader key={2} width={130} text={'Question'} />,
            <TableHeader key={3} width={'10%'} text={'Edit'} />,
            <TableHeader key={4} width={'10%'} text={'Delete'} />,
          ]}
        >
          {formData.length ? (
            <>
              {formData.map((item) => {
                return (
                  <TableRow>
                    <TableCell colSpan={1}>
                      <h5 style={{}}>{item._id}</h5>
                      {/* <h5 style={{}}>{item.editorValue}</h5> */}
                    </TableCell>
                    <TableCell colSpan={1}>
                      <h5 style={{}}>{item.category}</h5>
                    </TableCell>
                    <TableCell colSpan={1}>
                      <h5 style={{}}>{item.title}</h5>
                    </TableCell>
                    <TableCell colSpan={1}>
                      <Button
                        text={'Edit'}
                        style={'success'}
                        onClick={() => {
                          handleOnEditButton(item._id);
                        }}
                      />
                    </TableCell>
                    <TableCell colSpan={1}>
                      <Button
                        text={'Delete'}
                        style={'danger'}
                        onClick={() => {
                          handleOnDeleteButton(item._id);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={3}>
                <h5 style={{}}>No Questions Found</h5>
              </TableCell>
            </TableRow>
          )}
        </Table>
        {(createFAQModelState || editFAQModelState) && (
          <div>
            {createFAQModelState && <h3>Create FAQ</h3>}
            {editFAQModelState && <h3>Edit FAQ</h3>}
            <select
              className="uk-dropdown-small"
              value={selectValue}
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <option>Select Category</option>

              {dropDown.map((x) => {
                return <option>{x}</option>;
              })}
            </select>

            {/* <Input name={'somethhing'} type={'text'} value={inputValue} defaultValue={"inputValue"} onChange={handleOnInput} /> */}
            <input
              className={'md-input'}
              name={'input'}
              type={'text'}
              defaultValue={'Please Enter Tittle'}
              value={inputValue}
              onChange={(e) => {
                handleOnInput(e.target.value);
              }}
            />
            <SettingItem title={'FAQ Form'}>
              <CKEditor
                editor={ClassicEditor}
                data={editorValue}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorValue(data);
                }}
              />
              <div className="uk-clearfix">
                {createFAQModelState ? (
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
                ) : (
                  <Button
                    text={'Update'}
                    extraClass={'uk-float-right'}
                    flat={true}
                    style={'success'}
                    waves={true}
                    onClick={() => {
                      handleOnUpdateButton();
                    }}
                  />
                )}
                <Button
                  text={'close'}
                  extraClass={'uk-float-right'}
                  flat={true}
                  style={'danger'}
                  waves={true}
                  onClick={() => {
                    setCreateFAQModelState(false);
                    setEditFAQModelState(false);
                  }}
                />
              </div>
            </SettingItem>
          </div>
        )}
      </PageContent>
    </div>
  );
};

export default TempSettingsContainer;
