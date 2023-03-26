const User = require('../models/userModel')
const Review = require('../models/ReviewModel')
const Product = require('../models/ProductModel')
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

  const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).orFail();
        return res.send(user);
    } catch(err) {
        next(err)
    }
}

  const writeReview = async (req, res, next) => {
    try {
        // get comment, rating from request.body:
        const { comment, rating } = req.body;
        // validate request:
        if (!(comment && rating)) {
            return res.status(400).send("Please fill all fields");
        }

        // create review id manually because it is needed also for saving in Product collection
        const ObjectId = require("mongodb").ObjectId;
        let reviewId = ObjectId();

        await Review.create([
            {
                _id: reviewId,
                comment: comment,
                rating: Number(rating),
                user: { _id: req.user._id, name: req.user.name + " " + req.user.lastName },
            }
        ])

        const product = await Product.findById(req.params.productId).populate("reviews");
        let prc = [...product.reviews];
        prc.push({ rating: rating });
        product.reviews.push(reviewId);
        if (product.reviews.length === 1) {
            product.rating = Number(rating);
            product.reviewsNumber = 1;
        } else {
            product.reviewsNumber = product.reviews.length;
            product.rating = prc.map((item) => Number(item.rating)).reduce((sum, item) => sum + item, 0) / product.reviews.length;
        }
        await product.save();

        res.send('Review created')
    } catch (err) {
        next(err)   
    }
}

module.exports = { getUsers, registerUser, loginUser, updateUserProfile, getUserProfile, writeReview }
