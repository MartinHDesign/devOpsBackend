import { Player } from "../entities/Player";
import { Teams } from "../entities/Teams";
import AppDataSource from "./ConnectToDatabase";


export async function seedHockeyTeam(teamName:string, logoUrl:string, listOfPlayers:Player[]) {
    const teamRepository = AppDataSource.getRepository(Teams);
    const playerRepository = AppDataSource.getRepository(Player);

    const team = teamRepository.create({
        name: teamName,
        logo: logoUrl,
    });
    
    const savedTeam = await teamRepository.save(team);

    for (const player of listOfPlayers) {
        player.team = savedTeam;
    }

    await playerRepository.save(listOfPlayers);
}

export async function seedDatabase() {
    
    try {
        await AppDataSource.initialize();
        

        const brynasPlayer: Player[] = [
            {
                name: "Erik Källgren",
                position: "Goalkeeper",
                number: 31,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F571f6062-5fdd-4617-9c10-159009763f32Erik%20Kllgren.png?ixlib=js-3.8.0&w=156&s=c115992368a66af6810db8fab7d267c2", 
                team: undefined,
            },
            {
                name: "Ludvig Persson",
                position: "Goalkeeper",
                number: 32,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F8b8e1ac3-5f63-429a-abec-8f69c9874980Ludvig%20Persson.png?ixlib=js-3.8.0&w=156&s=6c93222e9053385df073730e67b0eb48",
                team: undefined,
            },
            {
                name: "Bobby Trivigno",
                position: "Forward",
                number: 8,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F0bde5b2b-d856-43c8-822d-64655a146224Bobby%20Trivigno.png?ixlib=js-3.8.0&w=156&s=507e2acabda5928d71598d79f6451d90", 
                team: undefined,
            },
            {
                name: "Johan Larsson",
                position: "Forward",
                number: 10,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F4c11bf4f-5bc2-482a-9d0c-097ce72073f4Johan%20Larsson.png?ixlib=js-3.8.0&w=156&s=8cf3b9e7f9a0bdeef3b9c603b9e07d24",
                team: undefined,
            },
            {
                name: "Jordan Schroeder",
                position: "Forward",
                number: 11,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F2354007f-df0b-463d-b470-4840b9637764Jordan%20Schroeder.png?ixlib=js-3.8.0&w=156&s=faf3eb4bf73d54519b3bdba72ca9d207",
                team: undefined,
            },
            {
                name: "Anton Rödin",
                position: "Forward",
                number: 18,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F654ed1ba-8b92-441d-97e2-ef1ba51f0245Anton%20Rdin.png?ixlib=js-3.8.0&w=156&s=661f307e97fd15bf3a796d9819e59138",
                team: undefined,
            },
            {
                name: "Anton Johannesson",
                position: "Defenseman",
                number: 2,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F220c19d7-bbb7-4444-90e9-a9233d0f9929Anton%20Johannesson.png?ixlib=js-3.8.0&w=156&s=8dbfe468ba726887b1042a8d256ba3c8",
                team: undefined,
            },
            {
                name: "Christian Djoos",
                position: "Defenseman",
                number: 3,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2Fc4ae058a-a9cd-4c2e-87c8-cd8a2d53bdd3Christian%20Djoos.png?ixlib=js-3.8.0&w=156&s=7f322e510a9de90e9e9c242d63b42e92",
                team: undefined,
            },
            {
                name: "Theo Lindstein",
                position:"Defenseman",
                number: 4,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2Ffbbe511a-bc1f-4dcf-90bd-52bec1bae66bTheo%20Lindstein.png?ixlib=js-3.8.0&w=156&s=de59a2846b0b51745c537399063b1a11",
                team: undefined,
            },
        ];
        const modoPlayer: Player[] = [
            {
                name: "Lassi Lehtinen",
                position: "Goalkeeper",
                number: 30,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F612404f3-6e8a-4019-9d43-6b3243dd9635Lassi%20Lehtinen.png?ixlib=js-3.8.0&w=156&s=1033816d81559577a2eefa6955c092d2",
                team: undefined,
            },
            {
                name: "Olle Eriksson Ek",
                position: "Goalkeeper",
                number: 31,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F2cd94086-b86e-4a54-ad1c-0fadfc7a83abOlle%20Eriksson%20Ek.png?ixlib=js-3.8.0&w=156&s=c0c38fe9f2e0b5cfa1d9852ea2ff478b",
                team: undefined,
            },
            {
                name: "Sampo Ranta",
                position: "Forward",
                number: 10,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F3b81d9a6-3ea0-49f6-9c9e-46ff2e2180fcSampo%20Ranta.png?ixlib=js-3.8.0&w=156&s=8967cb56166bef0fd8252be8c6968132",
                team: undefined,
            },
            {
                name: "Alexander True",
                position: "Forward",
                number: 11,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2Fa1c39244-b039-4ca7-a4ba-e7efe92c2a59Alexander%20True.png?ixlib=js-3.8.0&w=156&s=6a920953bb071f7753cb6d50f211e639",
                team: undefined,
            },
            {
                name: "Riley Woods",
                position: "Forward",
                number: 17,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F9f94bd73-db01-4dd1-afca-ea9bb065288eRiley%20Woods.png?ixlib=js-3.8.0&w=156&s=5ac8debbd27240141afedbc10aa57897",
                team: undefined,
            },
            {
                name: "Adam Pettersson",
                position: "Forward",
                number: 22,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2Fa9607766-4c27-4b2c-980f-5b4032eb6ec1Adam%20Pettersson.png?ixlib=js-3.8.0&w=156&s=d43d59132e359096b6e4f47163a7afd7",
                team: undefined,
            },
            {
                name: "David Rundblad",
                position: "Defenseman",
                number: 2,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F9141f8e1-fe7e-4ced-93fa-8d88f45dd2afDavid%20Rundblad.png?ixlib=js-3.8.0&w=156&s=a8145ac773b4d4e16805f948bb6c395e",
                team: undefined,
            },
            {
                name: "Paul LaDue",
                position: "Defenseman",
                number: 6,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2Fe301d7e6-b683-4474-bcef-3088295eafeePaul%20LaDue.png?ixlib=js-3.8.0&w=156&s=7dcb2a4c09ffe1a634c26b9bbec85aa8",
                team: undefined,
            },
            {
                name: "Pontus Näsén",
                position: "Defenseman",
                number: 7,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F62f46fce-18f5-41a2-9b76-c5b1793ca5b0Pontus%20Nasen.png?ixlib=js-3.8.0&w=156&s=b7fc418573451c4fe4b0d941f5a8792a",
                team: undefined,
            },
        ];
        const leksandPlayer: Player[] = [
            {
                name: "Jakob Hellsten",
                position: "Goalkeeper",
                number: 37,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F0a49746e-d865-4723-91be-2142208b0a64Jakob%20Hellsten.png?ixlib=js-3.8.0&w=156&s=1b7c80f8e46ecca516bb8c324247752e",
                team: undefined,
            },
            {
                name: "Mantas Armalis",
                position: "Goalkeeper",
                number: 40,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F46389d3a-f091-499c-9958-493dffc9f20bMantas%20Armalis.png?ixlib=js-3.8.0&w=156&s=14bf865fabd39f227683b6b7df663d02",
                team: undefined,
            },
            {
                name: "Marcus Karlberg",
                position: "Forward",
                number: 7,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F2b521e5f-3c08-49e4-8a80-3d74ac7ae084Marcus%20Karlberg.png?ixlib=js-3.8.0&w=156&s=35cbc16f7d9a6edea3b1be7a6ad021a8",
                team: undefined,
            },
            {
                name: "Patrik Zackrisson",
                position: "Forward",
                number: 9,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2Feb4a1f3d-6a3c-4d07-b90a-c7733d7d743cPatrik%20Zackrisson.png?ixlib=js-3.8.0&w=156&s=f8b0b991e3578f7a3ebea703cb3ed455",
                team: undefined,
            },
            {
                name: "Martin Karlsson",
                position: "Forward",
                number: 1,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2Fab7c070a-d3a4-4948-b4e8-de16ffd9831cMartin%20Karlsson.png?ixlib=js-3.8.0&w=156&s=f8e64a1f06f22f95162749cec83dee58",
                team: undefined,
            },
            {
                name: "Kalle Östman",
                position: "Forward",
                number: 12,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F5cd44743-27b6-4885-a188-f2fef65d412dKalle%20stman.png?ixlib=js-3.8.0&w=156&s=37400ed3a8c82690aafd5f0179e31932",
                team: undefined,
            },
            {
                name: "Fred Nilsson",
                position: "Defenseman",
                number: 3,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2Ff5e99cf5-b3e9-4fe7-baff-c48572280bc8Fred%20Nilsson.png?ixlib=js-3.8.0&w=156&s=7c4cd6b3220d63a17fa33204eda68200",
                team: undefined,
            },
            {
                name: "Lucas Lagerberg",
                position: "Defenseman",
                number: 4,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F479155d9-9a6e-4026-a231-ddb14ef0b3c4Lucas%20Lagerberg.png?ixlib=js-3.8.0&w=156&s=3f99ac50e32dffcbf55ae86430d8f3fa",
                team: undefined,
            },
            {
                name: "Alexander Lundqvist",
                position: "Defenseman",
                number: 6,
                picture: "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2Fb2b56dc3-1973-4633-85b8-62afed307d8eAlexander%20Lundqvist.png?ixlib=js-3.8.0&w=156&s=4d1b11bd2478d5ee44622a887eed4a6f",
                team: undefined,
            },
        ];
        await seedHockeyTeam("Brynäs IF", "https://idrottsforlaget.se/wp-content/uploads/2015/08/brynas-logo.png", brynasPlayer);
        await seedHockeyTeam("MoDo", "https://idrottsforlaget.se/wp-content/uploads/2015/08/modo-hockey-logo.png", modoPlayer);
        await seedHockeyTeam("Leksand IF", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YlJHjiYKiogI4ONvpp4T7r6bJw0utGSe4w&s", leksandPlayer);
        console.log("seeding complete");
        

    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await AppDataSource.destroy();
    }
}