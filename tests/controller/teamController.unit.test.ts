import request from 'supertest';
import express from 'express';
import { getPlayers, getTeams } from '../../src/controller/teamController';
import { getAllTeams, getPlayersByTeamId } from '../../src/services/teamService';
import { isValidUUID } from '../../src/utils/validate';


const server = express();
server.use(express.json());
server.get('/teams', getTeams);
server.get('/teams/players/:teamId', getPlayers);

jest.mock('../../src/services/teamService.ts');
jest.mock('../../src/utils/validate.ts')

describe('team controller integration tests', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    test('GET /teams should return a list of teams', async () => {
        const mockTeams = [{id: "mock id", name: "mock team", logo: "mock url"}];
        (getAllTeams as jest.Mock).mockResolvedValue(mockTeams);

        const response = await request(server).get("/teams");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockTeams);
    });

    test("Get /players/:teamId should return players for valid team ID", async () =>{
        const teamId = "valid id";
        const mockPlayers = [{ id: "mock id", name: "mock Player" }];
        (isValidUUID as jest.Mock).mockReturnValue(true);
        (getPlayersByTeamId as jest.Mock).mockResolvedValue(mockPlayers);

        const response = await request(server).get(`/teams/players/${teamId}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockPlayers);
    });

    test("Get /players/:teamId should return error 400 when invalid team id", async ()=> {
        const teamId = "not valid id";
        (isValidUUID as jest.Mock).mockReturnValue(false);

        const response = await request(server).get(`/teams/players/${teamId}`);

        expect(response.status).toBe(400);
        expect(response.text).toBe('Invalid UUID format');
    });

    test("Get /players/:teamId should return error 500 when server error", async () => {
        const teamId = "valid id";
        (isValidUUID as jest.Mock).mockReturnValue(true);
        (getPlayersByTeamId as jest.Mock).mockRejectedValue(new Error ("Server Error"));

        const response = await request(server).get(`/teams/players/${teamId}`);

        expect(response.status).toBe(500);
        expect(response.text).toBe("Internal Server Error");
    });
});

