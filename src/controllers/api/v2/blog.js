const Models = require('../../../models');

module.exports = {
  postBlog: async (req, res) => {
    // console.log(req.body.input, req.body.select, req.body.editorValue);
    console.log('req.body====>', req.body);
    // console.log(Models.BlogSchema);
    const response = await Models.BlogSchema.create({
      editorValue: req.body.editorValue,
      category: req.body.category,
      title: req.body.title,
    });
    if (response) {
      return res.json({
        ok: {
          isError: false,
          message: 'Success',
        },
      });
    } else {
      res.json({
        ok: {
          isError: true,
          message: 'falure',
        },
      });
    }
  },

  getBlog: async (req, res) => {
    const response = await Models.BlogSchema.find();
    if (response) {
      return res.json({
        data: {
          isError: false,
          data: response,
          message: 'Success ',
        },
      });
    } else {
      return res.json({
        data: {
          isError: true,
          data: [],
          message: 'failure',
        },
      });
    }
  },

  deleteBlog: async (req, res) => {
    const response = await Models.BlogSchema.deleteOne({ _id: req.body.id });
    return res.json({
      data: {
        isError: !response.acknowledged,
      },
    });
  },

  editBlog: async (req, res) => {
    console.log(req.body);
    const response = await Models.BlogSchema.findByIdAndUpdate({ _id: req.body._id }, req.body);

    // const response = await Models.BlogSchema.updateOne({ _id: req.body._id },req.body);
    console.log(response);
    return res.json({
      data: {
        isError: false,
        msg: 'Success',
      },
    });
    // const response = await Models.BlogSchema.deleteOne({ _id: req.body.id });
  },
};
