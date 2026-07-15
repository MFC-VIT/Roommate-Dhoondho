import express from "express";
import { createRoommate, deleteRoommate, getRoommate, getAllRoommate, updateRoommate, getRoommateFromId } from "../Controllers/RoommateController.js";
import { rateLimiter_10min_10req, rateLimiter_10min_100req } from "../Middlewares/rateLimiter.js";
import { isAdmin } from '../Middlewares/isAdmin.js';
import { dontExecuteAtProduction } from '../Middlewares/dontExecuteAtProduction.js';
import { verifyJWT_withuserId, verifyJWTForGetRequest } from "../Middlewares/verifyJWT.js";

const router = express.Router()

router.get('/all', rateLimiter_10min_100req, getAllRoommate);
router.delete("/delete", rateLimiter_10min_100req, deleteRoommate);
router.post('/:userid', rateLimiter_10min_10req, createRoommate);
router.post('/my/:userid', rateLimiter_10min_100req, getRoommate);
router.put('/:id', rateLimiter_10min_10req, isAdmin, dontExecuteAtProduction, updateRoommate);
router.get('/:id', getRoommateFromId);

export default router;
