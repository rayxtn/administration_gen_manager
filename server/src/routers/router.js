import {Router} from "express";
 

const router = Router();

import * as controller from "../Controllers/appController.js";

//Get Methodes
router.route('/personel_data').get(controller.getPersonel)


//POST Methodes



//Delete AND Put Methodes







export default router;
