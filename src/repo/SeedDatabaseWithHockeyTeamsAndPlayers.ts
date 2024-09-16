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
                name: "Johan Larsson",
                position: "Forward",
                number: 29,
                picture: "https://gallerix.se/gallery/6/7/8/6/43360-800.jpg", 
                team: undefined,
            },
            {
                name: "Jacob Nilsson",
                position: "Forward",
                number: 24,
                picture: "https://cdn.ramses.nu/sports/player/portrait/1000/qQ9-cc7a6PnYc-1661791901.jpg",
                team: undefined,
            },
            {
                name: "Niklas Olausson",
                position: "Defenseman",
                number: 7,
                picture: "https://cdn.ramses.nu/sports/player/portrait/1000/qQ9-694cZP9xo-1597492016.jpg", 
                team: undefined,
            },
            {
                name: "Gustaf Lindvall",
                position: "Goalie",
                number: 30,
                picture: "https://cdn.ramses.nu/sports/player/portrait/1000/qQ9-41ce9umRA-1662532058.jpg",
                team: undefined,
            },
            {
                name: "Joakim Lindström",
                position: "Forward",
                number: 19,
                picture: "https://imengine.gota.infomaker.io/?uuid=cfbe1023-37fd-5b01-8833-c132298dd4fc&width=960&height=640&type=preview&source=false&q=90&z=100&x=0.000&y=0.000&crop_w=1.000&crop_h=1.000&function=cropresize",
                team: undefined,
            },
            {
                name: "Fredrik Forsberg",
                position: "Defenseman",
                number: 44,
                picture: "https://cdn.ramses.nu/sports/player/portrait/1000/qQ9-22516woJU-1659518308.jpg",
                team: undefined,
            },
            {
                name: "Max Veronneau",
                position: "Forward",
                number: 16,
                picture: "https://cdn.ramses.nu/sports/player/portrait/300/qYG-7SUm7qdE4-1631543865.jpg",
                team: undefined,
            },
            {
                name: "Lukas Vejdemo",
                position: "Forward",
                number: 43,
                picture: "https://cdn.ramses.nu/sports/player/portrait/300/qQ9-066cXFash-1675847016.png",
                team: undefined,
            },
            {
                name: "Oskar Lang",
                position:"Forward",
                number: 20,
                picture: "https://cdn.ramses.nu/sports/player/portrait/300/qRh-zjYQOz7H-1667833515.jpg",
                team: undefined,
            },
        ];
        const djurgardenPlayer: Player[] = [
            {
                name: "Jacob Josefson",
                position: "Forward",
                number: 90,
                picture: "https://cdn.ramses.nu/sports/player/portrait/1000/qUu-9eSGzgt62-1629448996.png",
                team: undefined,
            },
            {
                name: "Loui Eriksson",
                position: "Forward",
                number: 22,
                picture: "https://cdn.ramses.nu/sports/player/portrait/1000/qbT-5EP2J82LE-1669038651.jpg",
                team: undefined,
            },
            {
                name: "Marcus Högström",
                position: "Defenseman",
                number: 5,
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pVVDj8HT4A1LSJcHqWe9NqFFzv2P1xWG8w&s",
                team: undefined,
            },
            {
                name: "Tobias Enström",
                position: "Defenseman",
                number: 6,
                picture: "https://d2a3o6pzho379u.cloudfront.net/119394.jpg",
                team: undefined,
            },
            {
                name: "Johan Mattsson",
                position: "Goalie",
                number: 31,
                picture: "https://hockeysverige.se/wp-content/uploads/2024/03/Johan-Mattsson_.jpg",
                team: undefined,
            },
            {
                name: "Joel Lundqvist",
                position: "Forward",
                number: 20,
                picture: "https://cdn.ramses.nu/sports/player/portrait/300/qV2-8Y5Ww49mh-1661792266.jpg",
                team: undefined,
            },
            {
                name: "William Eklund",
                position: "Forward",
                number: 14,
                picture: "https://images.aftonbladet-cdn.se/v2/images/6fb3d365-f9b8-4558-9c5c-1319593105bf?fit=crop&format=auto&h=1856&q=50&w=1900&s=8f0377ab61d74d8752a3dd16af8fc27850d21f3c",
                team: undefined,
            },
            {
                name: "Viktor Liljegren",
                position: "Defenseman",
                number: 7,
                picture: "https://cdn.ramses.nu/sports/player/portrait/300/qRh-105b4RgAU-1664811129.jpg",
                team: undefined,
            },
            {
                name: "Hampus Lindholm",
                position: "Defenseman",
                number: 4,
                picture: "https://static.bonniernews.se/images/dd/2c/dd2c3d44d2354986a5d25cc5facaab70/16x9/original.jpg",
                team: undefined,
            },
        ];
        const aikPlayer: Player[] = [
            {
                name: "Marcus Krüger",
                position: "Forward",
                number: 16,
                picture: "https://images.stream.schibsted.media/users/ab_/images/b99601d1fe711fdbbd2e4f955c693356.jpg?t[]=800q50",
                team: undefined,
            },
            {
                name: "Johan Larsson",
                position: "Forward",
                number: 15,
                picture: "https://i0.wp.com/magasinethockey.se/wp-content/uploads/2019/11/BB191113BB702-scaled.jpg?resize=1080%2C675&ssl=1",
                team: undefined,
            },
            {
                name: "David Lilja",
                position: "Defenseman",
                number: 5,
                picture: "https://cdn.ramses.nu/sports/player/portrait/1000/qWX-7Szklgs7n-1663072365.jpeg",
                team: undefined,
            },
            {
                name: "Filip Hållander",
                position: "Forward",
                number: 27,
                picture: "https://cdn1-photos.shl.se/photos/23/12/2ef150ab-053f-44a1-b8bb-ec819e18ebf1FTPpreparedBB231209OW012.jpg?ixlib=js-3.8.0&w=1920&h=1080&auto=format&fp-debug=0&fp-y=0.5&fp-x=0.5&crop=focalpoint&fit=crop&s=d6a0cfdb9d129303c278eda8c225cf1c",
                team: undefined,
            },
            {
                name: "Emil Larsson",
                position: "Defenseman",
                number: 4,
                picture: "https://cdn.ramses.nu/sports/player/portrait/300/qQ9-e51brlPJ3-1668071629.jpg",
                team: undefined,
            },
            {
                name: "Linus Hultström",
                position: "Goalie",
                number: 31,
                picture: "https://cdn.ramses.nu/sports/player/portrait/1000/qQ9-f73es3Alq-1662384837.jpg",
                team: undefined,
            },
            {
                name: "Hugo Gustafsson",
                position: "Forward",
                number: 20,
                picture: "https://cdn.ramses.nu/sports/player/portrait/300/qV2-6mVrAt0Pd-1628692617.jpg",
                team: undefined,
            },
            {
                name: "Axel Holmström",
                position: "Forward",
                number: 10,
                picture: "https://images.aftonbladet-cdn.se/v2/images/3000d8d7-d250-4444-91ca-85c13ce2cc27?fit=crop&format=auto&h=1267&q=50&w=1900&s=5bf8c735a606417e7e7db111ed3e798ea4e08454",
                team: undefined,
            },
            {
                name: "Olle Alsing",
                position: "Defenseman",
                number: 8,
                picture: "https://cdn.ramses.nu/sports/player/portrait/200/qRh-1LnnTK3Li-1664812632.jpg",
                team: undefined,
            },
        ];
        await seedHockeyTeam("Brynäs IF", "https://idrottsforlaget.se/wp-content/uploads/2015/08/brynas-logo.png", brynasPlayer);
        await seedHockeyTeam("Djurgårdens IF", "https://i.pinimg.com/736x/d1/e1/81/d1e18123c5602bd72d0d52e73c11dff5.jpg", djurgardenPlayer);
        await seedHockeyTeam("AIK", "https://cdn-ha-photos.imgix.net/photos/18/03/e04a339f61eb8ddc5d5f3ed727088fd1/thumb_640.jpg?ixlib=js-3.8.0&w=1920&h=1080&auto=format&fp-debug=0&fp-y=0.5&fp-x=0.5&crop=focalpoint&fit=crop&s=096e18cd35dc3bb04c5750d2fbcb1330", aikPlayer);
        console.log("seeding complete");
        

    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await AppDataSource.destroy();
    }
}