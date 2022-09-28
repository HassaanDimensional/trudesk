import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {

  return (
    <CKEditor
      editor={ClassicEditor}
      data={'Hello my app'}
      conChange={() => {
        console.log('something');
      }}
    />
  );
};
export default Editor;
