import { Player } from '../entities/Player';
import { Teams } from '../entities/Teams';
import AppDataSource from '../repo/ConnectToDatabase';

export const getAllTeams = async (): Promise<Teams[]> => {
    try {
        const teamRepository = AppDataSource.getRepository(Teams);
        return await teamRepository.find();
    } catch (error) {
        console.error('Error fetching teams from database:', error);
        throw error;
    }
};

export const getPlayersByTeamId = async (teamId: string): Promise<Player[]> => {
    try {
        const playerRepository = AppDataSource.getRepository(Player);
        const players = await playerRepository
            .createQueryBuilder("player")
            .leftJoinAndSelect("player.team", "team")
            .where("team.id = :teamId", { teamId })
            .getMany();
            
        return players;

    } catch (error) {
        throw error;
    }
}