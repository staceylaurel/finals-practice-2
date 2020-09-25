import { Router } from 'express';
import { generateHash } from "../../utils/passwords";
import { createToken } from "../../utils/tokens";
import db from "../../db";

const router = Router();

router.post('/', async (req: any, res) => {

   const newUser = req.body
   newUser.password = generateHash(newUser.password)
   
    try{
        const results = await db.users.insert(newUser); // a whole user    
        const token = createToken({userid: results.insertId});
        res.json(token);

    }catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "post path broken at auth register.ts",
            error,
        });
    };
});

export default router;
