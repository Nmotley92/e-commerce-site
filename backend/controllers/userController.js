const deleteUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id).orFail();
        await user.remove();
        res.send("user removed");

    } catch (err) {
        next(err);
    }
    }
