# summary
* `npm init`
* `npm i express`
* `npm i -D nodemon`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index",
    "dev": "nodemon index"
  }
```

* `npm run dev`

* *for creating a static website* -->
we can store all the html, css, javascript files in public and express will take care of rendering them

```javascript
const express = require("express");
const path = require("path")


app = express()

const PORT = process.env.PORT || 5000

// middleware to set static folder for serving html files
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () => console.log("SERVER STARTED"))
```

* using middlewares
example:-
```javascript
const logger = (req, res, next) => {
    console.log("Hello from middleware");
    next();
};
.
.
.
app.use(logger)
```

* to get a path parameter
`req.params.<param_name>`

* creating routes
examples
```javascript
app.get("/api/members", (req, res) => {
    res.json(members)
});
```
```javascript
app.get("/api/members/:name", (req, res) => {
    memberName = req.params.name
    const member = members.filter(member => member.name == memberName)
    if (member[0] == null){
        return res.status(404).json("user not found")
    }
    res.status(200).json(member[0])
})
```

* starting server
```javascript
app.listen(PORT, ()=>console.log("SERVER RUNNING..."))
```

* to access members of request body
`req.body.<member_name>`

* to deal with rendering templates we can use express-handlebars
`npm -i express-handlebars`