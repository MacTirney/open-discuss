const Discussion = require()

// Discussion - Get - Sends the Discussion Data to the Front end to be rendered and displayed
module.exports.index = async (req, res) => {
    const discussions = await Discussion.find({})
    res.json({ discussions })
}


module.exports.newDiscussion = 


app.get('/discussions', catchAsync (async (req, res) => {
    const discussions = await Discussion.find({})
    res.json({ discussions })
}))

// Discussion - Get - Sends a success message when a New discussion post is rendered
app.get('/discussions/new', (req,res) => {
    res.json({ success: true, message: 'Rendering new discussion post' });
})


// Discussion - Post - Creates a new individual discussion post either associated with a community or no community
app.post('/discussions', catchAsync (async (req,res) => {
    const discussion = new Discussion(req.body.discussion)
    const savedDiscussion = await discussion.save();
    res.json({ savedDiscussion })
}))

// Discussion - Get - Displays an individual discussion posts data
app.get('/discussions/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const discussionRender = await Discussion.findById(id)
    res.json({ discussionRender })
}))

// Discussion - Get - Populates an Edit form to allow for the user that made the discussion post to edit it
app.get('/discussions/:id/edit', catchAsync (async (req, res) => {
    const { id } = req.params
    const discussionEdit = await Discussion.findById(id)
    res.json({ discussionEdit })
}))

// Discussion - Put - Updates the discussion post with the updated data that was submitted from the edit form
app.put('/discussions/:id', catchAsync (async (req, res) => {
    const { id } = req.params
    const discussionUpdate = await Discussion.findByIdAndUpdate(id, { ...req.body.discussion }, { new: true })
    res.json({ discussionUpdate })
}))

// Discussion - Delete - Deletes the discussion and associated data / comments 
app.delete('/discussions/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const discussionDelete = await Discussion.findByIdAndDelete(id)
    res.json({ discussionDelete })
}))







