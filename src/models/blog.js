var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
  //   owner: { type: mongoose.Schema.Types.ObjectId, ref: 'accounts' },
  //   date: { type: Date, required: true },
  //   deleted: { type: Boolean, default: false, required: true }
  editorValue: { type: String, required: true, default: '' },
  selecteValue: { type: String, required: true, default: '' },
  InputTittle: { type: String, required: true, default: '' },
});

module.exports = mongoose.model('blogSchema',blogSchema);
