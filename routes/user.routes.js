const { Router } = require('express');


const {
    usersGet,
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
} = require('../controllers/user.controller');

const router = Router();

router.get('/', usersGet);
router.get('/:id', userGet);
router.post('/', userPost);
router.put('/:id', userPut);
router.patch('/', userPatch);
router.delete('/', userDelete);

module.exports = router;
