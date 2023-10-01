



// Communities Routes
// Community - Get - Render all communities on a page
app.get('/communities', catchAsync (async (req, res) => {
    const communities = await Community.find({})
    res.json({ communities })
}))

// Community - Get - Sends a success message when a New Community post is rendered
app.get('/communities/new', (req,res) => {
    res.json({ success: true, message: 'Rendering new community post' });
})

// Community - Post - Creates a new Community post for the Community Main Page
app.post('/communities', catchAsync (async (req,res) => {
    const community = new Community(req.body.community)
    // community.author = req.user._id
    const savedCommunity = await community.save();
    res.json({ savedCommunity })
}))

// Community - Get - Shows an individual Community group with all of the discussion posts
app.get('/communities/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const communityDiscussionRenderAll = await Community.findById(id)
    res.json({ communityDiscussionRenderAll })
}))

// Community - Get - Sends a success message when a New discussion post is rendered within that community
app.get('/communities/:id/new', (req,res) => {
    res.json({ success: true, message: 'Rendering new community discussion post' });
})

// Community - Post - Creates a new individual discussion post within that community post
app.post('/communities/:id', catchAsync (async (req,res) => {
    const communityDiscussion = new Discussion(req.body.discussion)
    // communityDiscussion.author = req.user._id
    const savedCommunityDiscussion = await communityDiscussion.save();
    res.json({ savedCommunityDiscussion })
}))

// Community - Get - Renders a edit Community or Community Discussion form; also grabs the current data and populates the form with it
app.get('/communities/:id/edit', catchAsync (async (req, res) => {
    const { id } = req.params
    const communityEdit = await Community.findById(id)
    const communityDiscussionEdit = await Discussion.findById(id)
    // Flash error message if not the author of resource or they cannot edit it
    res.json({ communityEdit, communityDiscussionEdit })
}))

// Community - Put - Updates the edited Community or Community Discussion with the new one submitted by the edit form
app.put('/communities/:id', catchAsync (async (req, res) => {
    const { id } = req.params
    const communityUpdate = await Community.findByIdAndUpdate(id, { ...req.body.community }, { new: true })
    const communityDiscussionUpdate = await Discussion.findByIdAndUpdate(id, { ...req.body.discussion }, { new: true })
    // Flash success message
    res.json({ communityUpdate, communityDiscussionUpdate })
}))

// Community - Delete - Deletes the individual community discussion post or the whole community
app.delete('/communities/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const communityDelete = await Community.findByIdAndDelete(id)
    const communityDiscussionDelete = await Discussion.findByIdAndDelete(id)
    // Flash success message
    res.json({ communityDelete, communityDiscussionDelete })
}))

// Community Discussion - Get - Displays the individual discussion post with all the data stored in the database
app.get('/communities/:id/discussion/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const communityDiscussionRender = await Discussion.findById(id)
    // Flash error message if not a resource
    res.json({ communityDiscussionRender })
}))

// Community Discussion - Get - Renders an edit form for the Community Discussion Post
app.get('/communities/:id/discussion/edit', catchAsync (async (req, res) => {
    const { id } = req.params
    const communityDiscussionEdit = await Discussion.findById(id)
    // Flash error message if not the author of resource or they cannot edit it
    res.json({ communityDiscussionEdit })
}))

// Community Discussion - Put - Updates the Community Discussion post with the updated data from the edit form
app.put('/communities/:id/discussion/:id', catchAsync (async (req, res) => {
    const { id } = req.params
    const communityDiscussionUpdate = await Discussion.findByIdAndUpdate(id, { ...req.body.discussion }, { new: true })
    // Flash success message
    res.json({ communityDiscussionUpdate })
}))

// Community Discussion - Delete - Deletes the Community Discussion post along with all the comments
app.delete('/communities/:id/discussion/:id', catchAsync (async (req,res) => {
    const { id } = req.params
    const communityDiscussionDelete = await Discussion.findByIdAndDelete(id)
    // Flash success message
    res.json({ communityDiscussionDelete })
}))