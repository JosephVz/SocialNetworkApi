const { User } = require('../models');

const UserCont = {
    getAllUsers(req, res) {
        User.find({})
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err));
    },

    getUserById(req, res) {
        User.findById(res.params.userId)
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err));
    },

    createUser(req, res) {
        User.findById(req.params.userId)
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err));
    },

    updateUserById(req, res) {
        User.findOneAndUpdate(req.params.id, req.body, { new: true })
        .then(userData => {
            if (!userData) {
                return res.status(404).json({ message: 'Not found' });
            }
            res.json(userData);
        })
        .catch(err => res.status(500).json(err));
    },

    deleteUserById(req, res) {
        User.findOneAndDelete(req.params.id, req.body, { new: true })
        .then(userData => {
            if (!userData) {
                return res.status(404).json({ message: 'Not found' });
            }
            res.json({ message: 'Deleted' });
        })
        .catch(err => res.status(500).json(err));
    },

    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            {$addToSet: { friends: req.body.friendId || req.params.friendId }},
            { new: true }
        )
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'Not found'});
                }
                res.json(userData);
            })
            .catch(err => res.status(500).json(err));
    },

    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            {$pull: { friends: params.friendId }},
            { new: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'Not found'});
                }
                const remove = !dbUserData.friends.includes(params.friendId);

                if (remove) {
                    res.json({ message: "Removed" });
                } else {
                    res.json(dbUserData);
                }
            })
            .catch((err) => res.status(404).json(err));
    },
};

module.exports = UserCont