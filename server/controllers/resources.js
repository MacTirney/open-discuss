




// Resources Routes
// Resource - Get - Render all resources on a page
app.get('/resources', catchAsync (async (req, res) => {
    const resources = await Resource.find({})
    res.json({ success: true, message: 'Resource found', resources });
}))

// Resource - Get - Sends a success message when a New resource post is rendered
app.get('/resources/new', (req,res) => {
    res.json({ success: true, message: 'Rendering new resource post' });
})

// Resource - Post - Create a new resource post for the resources page
app.post('/resources', catchAsync (async (req,res) => {
    const resource = new Resource(req.body.resource)
    // resource.author = req.user._id
    const savedResource = await resource.save();
    res.json({ savedResource })
}))

// Resource - Get - Shows an individual resource post with comments
app.get('/resources/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const resourceRender = await Resource.findById(id)
    // Populate Comments
    // Populate Author
    res.json({ resourceRender })
}))

// Resource - Get - Renders a edit resource form; also grabs the current data and populates the form with it
app.get('/resources/:id/edit', catchAsync (async (req, res) => {
    const { id } = req.params
    const resourceEdit = await Resource.findById(id)
    res.json({ resourceEdit })
}))

// Resource - Put - Updates the edited resource with the new one submitted by the edit form
app.put('/resources/:id', catchAsync (async (req, res) => {
    const { id } = req.params
    const resourceUpdate = await Resource.findByIdAndUpdate(id, { ...req.body.resource }, { new: true })
    res.json({ resourceUpdate })
}))

// Resource - Delete - Deletes the individual resource
app.delete('/resources/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const resourceDelete = await Resource.findByIdAndDelete(id)
    res.json({ resourceDelete })
}))