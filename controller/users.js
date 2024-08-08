const User = require("../model/uses");


async function getUsers(req, res) {
    const users = await User.find({});
    if (!users) {
        throw new Error("server error, failed to fetch users.")
    }
    res.send(JSON.stringify(users));
}


async function getUserDetailById(req, res) {
    const { id } = req.params;
    const user = await User.findById({ _id: id });
    // console.log(user);

    if (!user) {
        res.status(404).json({ error: "server error, could not found user data." })
    }
    res.status(200).json({ user });
}


async function editUserDetail(req, res) {
    const { email, name, phone, website } = req.body;
    const { id } = req.params;
    const result = await User.findByIdAndUpdate({ _id: id }, { name: name, email: email, phone: phone, website: website });
    if (!result) {
        res.status(404).json({
            error: "server error, please try again later.",
        });
    }

    res.status(200).json({ message: "user data updated successfully." });
}

async function deleteUser(req, res) {
    const { id } = req.params;
    const result = await User.deleteOne({ _id: id });
    if (!result) {
        res.status(404).json({
            error: "server error, please try again later.",
        });
    }
    res.status(200).json({ message: "user data is deleted successfully." });
}



module.exports = {
    getUsers,
    editUserDetail,
    getUserDetailById,
    deleteUser,
}