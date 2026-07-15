import express from "express";
import { createRoom, deleteRoom, getRoom, getAllRoom, updateRoom,getRoomFromId } from "../Controllers/RoomController.js";
import { rateLimiter_10min_10req, rateLimiter_10min_100req } from "../Middlewares/rateLimiter.js";
import { isAdmin } from '../Middlewares/isAdmin.js';
import { dontExecuteAtProduction } from '../Middlewares/dontExecuteAtProduction.js';
import { verifyJWT_withuserId, verifyJWTForGetRequest } from "../Middlewares/verifyJWT.js";

const router = express.Router()

router.get('/all', rateLimiter_10min_100req, getAllRoom);
router.delete("/delete", rateLimiter_10min_100req, deleteRoom);
router.post('/:userid', rateLimiter_10min_10req,  createRoom);
router.post('/my/:userid', rateLimiter_10min_100req, getRoom);
router.put('/:id', rateLimiter_10min_10req, updateRoom);
router.get('/:id', getRoomFromId);

export default router;
