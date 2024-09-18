import { Request, Response } from 'express';
import { getAllTeams, getPlayersByTeamId } from '../services/teamService';
import { isValidUUID} from '../utils/validate'

export const getTeams = async (_: Request, res: Response) => {
    try {
        const teams = await getAllTeams();
        res.json(teams);
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const getPlayers = async (req: Request, res: Response) => {

    const teamId = req.params.teamId; 

    if (!isValidUUID(teamId)) {
        return res.status(400).send('Invalid UUID format');
      }

    try {
        const players = await getPlayersByTeamId(teamId);
        res.json(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).send('Internal Server Error');
    }
}