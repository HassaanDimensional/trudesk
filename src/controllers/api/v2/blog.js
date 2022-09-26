const Models = require('../../../models');

module.exports = {
  postBlog: (req, res) => {
    console.log(req.body.input, req.body.select, req.body.editorValue);
    console.log(Models.BlogSchema.find({ }));
    // Models.BlogSchema.create({
    //     editorValue:req.body.editorValue,
    //     selecteValue:req.body.select,
    //     InputTittle:req.body.input
    // })
    return res.json({
      ok: {
        isError: false,
        message: 'done',
      },
    });
  },
};
