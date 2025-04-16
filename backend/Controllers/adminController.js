const AdminModel = require("../Models/adminModel");

const sendAdmin = (req, res) => {
    AdminModel.find()
        .then((admins) => {
            res.status(200).json(admins);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

module.exports = { sendAdmin };
