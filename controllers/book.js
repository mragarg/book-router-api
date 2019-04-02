// Create (POST)
function create(req, res){
    res.json({message: "You created books"});
}

// Retrieve (GET)
function retrieveAll(req, res){
    res.json({message: "You retreieved all"});
}

// Update (PUT)
function update(req, res){
    res.json({message: "You updated"});
}

// Delete (DELETE)
function deleteBook(req, res){
    res.json({message: "You deleted"});
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleteBook
}