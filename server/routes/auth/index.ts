import {Router} from 'express';
import loginRouter from './login';
import registerRouter from './register';
// import tokenRouter from './token';

const router = Router ();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
// router.use('/token', tokenRouter);

export default router;