const express = require("express")
let members = require("../../Members")



router = express.Router();

// routes
router.get("/", (req, res) => {
    res.json(members)
});

router.get("/:name", (req, res) => {
    memberName = req.params.name
    const member = members.filter(member => member.name == memberName)
    if (member[0] == null){
        res.status(404).json("user not found")
    }
    res.status(200).json(member[0])
});

router.post("/", (req, res) => {
    
    if (!req.body.name || !req.body.age){
        return res.status(400).json({"msg":"Bad request", "details":"both name and age are must"})
    }
    
    user = {
        name: req.body.name,
        age: req.body.age
    }

    members.push(user)
    res.status(201).json(user)

});

router.delete("/:name", (req, res) => {
    const userName = req.params.name
    const user = members.filter(member => member.name === userName)
    if (user[0]==null){
        return res.status(404).json({"msg":"user not found"})
    }
    
    newMembers = members.filter(member=>{return member.name !== userName})
    members = newMembers
    res.status(200).json({"msg":"user deleted"})
});

module.exports = router