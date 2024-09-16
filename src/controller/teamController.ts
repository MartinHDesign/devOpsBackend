import { Request, Response } from 'express';
import { getAllTeams, getPlayersByTeamId } from '../services/teamService';

export const getTeams = async (req: Request, res: Response) => {
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
    try {
        const players = await getPlayersByTeamId(teamId);
        res.json(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).send('Internal Server Error');
    }
}