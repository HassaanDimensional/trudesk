var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
  editorValue: { type: String, required: true, default: '' },
  category: { type: String, required: true, default: '' },
  title: { type: String, required: true, default: '' },
});

module.exports = mongoose.model('blogSchema',blogSchema);
