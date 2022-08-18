import * as fs from 'fs';
import * as path from 'path';

const main = async () => {
    const rom = fs.readFileSync('./src/pokemon.gb');

    const core = require('./build/Release/retro');

    core.retro_set_environment(core.environment);

    const system = new core.retro_system_info();
    core.retro_get_system_info(system);
    console.log(system);

    const game = new core.retro_game_info();
    const gameData = core.malloc_int(rom.length);
    for (let i = 0; i < rom.length; i++){
        gameData[i] = rom[i];
    }

    game.data = gameData;
    game.size = rom.length;

    console.log(game);
};


main().catch(err => {
    console.error(err);
    process.exit(-1);
})