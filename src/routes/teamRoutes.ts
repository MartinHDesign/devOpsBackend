import { Router } from 'express';
import { getPlayers, getTeams } from '../controller/teamController';

const router = Router();

router.get('/teams', getTeams);

router.get('/players/:teamId', getPlayers);

export default router;