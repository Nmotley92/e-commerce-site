import RoutesUserChat from "../../frontend/src/components/user/RoutesUserChat";





//admin
router.use(verifyIsAdmin);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;