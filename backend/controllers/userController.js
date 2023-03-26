const User = require('../models/userModel')
const { hashPassword, comparePasswords } = require('../utils/hashPassword')
const generateAuthToken = require('../utils/generateAuthToken')

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).select('-password')
        return res.json({ users })
    }
    catch (err) {
        next(err)
    }
};

const registerUser = async (req, res, next) => {
    try {
        const { name, lastName, email, password } = req.body
        if (!name || !lastName || !email || !password) {
            return res.status(400).json({ message: 'Please fill all fields' })
        }
        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).send('User already exists')
        }
        else {
            const hashedPassword = hashPassword(password)
            const user = await User.create({
                name,
                lastName,
                email: email.toLowerCase(),
                password: hashedPassword
            });
            res
                .cookie('access_token', generateAuthToken(user._id, user.name, user.lastName, user.email, user.isAdmin), {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict'
                })
                .status(201).json({
                    success: "User created", userCreated: {
                        _id: user._id,
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email
                    },
                });
        }
    } catch (err) {
        next(err)
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password, doNotLogout } = req.body
        if (!email || !password) {
            return res.status(400).send('Please fill all fields')
        }

        const user = await User.findOne({ email }).orFail();
        if (user && comparePasswords(password, user.password)) {
            let cookieParams = {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            };

            if (doNotLogout) {
                cookieParams = { ...cookieParams, maxAge: 1000 * 60 * 60 * 24 * 7 };
            }

            return res.cookie(
                'access_token',
                generateAuthToken(
                    user._id,
                    user.name,
                    user.lastName,
                    user.email,
                    user.isAdmin,
                ),
                cookieParams
            )
                .json({
                    success: "User logged in",
                    userLoggedIn: {
                        _id: user._id,
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        doNotLogout
                    }
                });
        } else {
            return res.status(401).send('Invalid login credentials')
        }
    } catch (err) {
        next(err)
    }
};

const updateUserProfile = async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id).orFail();
      user.name = req.body.name || user.name;
      user.lastName = req.body.lastName || user.lastName;
      user.email = req.body.email || user.email;
      user.phoneNumber = req.body.phoneNumber;
      user.address = req.body.address;
      user.country = req.body.country;
      user.zipCode = req.body.zipCode;
      user.city = req.body.city;
      user.state = req.body.state;
      if (req.body.password !== user.password) {
        user.password = hashPassword(req.body.password);
      }
      await user.save();
  
      res.json({
        success: "user updated",
        userUpdated: {
          _id: user._id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      });
    } catch (err) {
      next(err);
    }
  };

module.exports = { getUsers, registerUser, loginUser, updateUserProfile }