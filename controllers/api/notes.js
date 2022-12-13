const Note = require('../../models/note');

module.exports = {
    index,
    show,
    create
  };
  

async function index(req, res) {
const notes = await Note.find({user: req.user._id});
res.json(notes);
}

async function show(req, res) {
const note = await Note.findById(req.params.id);
res.json(note);
}

async function create(req, res){
    try {
        const note = await Note.create(req.body);
        note.user = req.user._id
        note.save();
        res.json(note);
    } catch {
        res.status(404);
    }
}
