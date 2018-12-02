const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()
app.use(fileUpload())

// Serve the form in the web directory
app.use('/', express.static('web'))

// Upload a file to this route
app.post('/api/file', (req, res, next) => {
    // If no file was uploaded
    if (Object.keys(req.files).length ==0) {
        return res.status(400).send("No files were uploaded")
    }

    // Get the file from the request
    const upfile = req.files.upfile

    // Send back file metadata as JSON
    res.json({name: upfile.name, type: upfile.mimetype, size: upfile.data.length})
})

app.listen(8080, console.log("App listening on port 8080"))