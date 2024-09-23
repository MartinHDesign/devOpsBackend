import { Teams } from "../entities/Teams";
import { getAllTeams } from "../services/teamService"

export const teamsExistsInDatabase = async ():Promise<boolean> => {
    try {
        const teams:Teams[] = await getAllTeams();
        return (teams.length > 0)
    } catch (error) {
        return false
    }
    
}