import request from 'supertest';
import express from 'express';
import { getPlayers, getTeams } from '../../src/controller/teamController';
import { getAllTeams } from '../../src/services/teamService';


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

        const response = await request(server).get('/teams');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockTeams);
    });
});

