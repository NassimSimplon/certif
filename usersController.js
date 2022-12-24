const User = require('./usersModel');

module.exports = {
    //ADD USER
    addUser: async (req, res) => {
        try {
            let { fullName, image, email, password } = req.body;
            let user = new User({
                fullName, image, email, password
            });
            await user.save();
            res.json(user);
        }
        catch (err) {
            console.log(err)
        }
    },
    //GET ALL  USERS
    getAllUsers: async (req, res) => {
        try {
            let Users = await User.find();
            res.json(Users);
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
            return;

        }
    },

    // GET USER by id
    getUserById: async (req, res) => {
        try {
            let User = await User.findById(req.params.id);
            res.json(User);
        }
        catch (err) {
            console.log(err);
        }
    },


    //UPDATE USER
    updateUser: async (req, res) => {
        try {
            let User = await User.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
            res.json(User);
        }
        catch (err) {
            console.log(err);
        }
    },
    //DELETE USER
    deleteUser: async (req, res) => {
        try {
            let User = await User.findByIdAndRemove(req.params.id);
            res.json(User);
        }
        catch (err) {
            console.log(err);
        }
    }

}