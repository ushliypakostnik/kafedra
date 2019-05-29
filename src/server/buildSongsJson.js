const fs = require('fs-extra');
const path = require('path');
const currentProcessPath = process.cwd();
const relPath = __dirname.split(currentProcessPath)[1].split('\\').join('/');
const absPath = path.resolve(__dirname, '..', 'audio');

fs.readdir(absPath, {
    withFileTypes: true
}, (err, files) => {
    if (err) throw err;

    const dirs = files.filter((file) => file.isDirectory());
    const promises = dirs.map((file) => new Promise((resolve, reject) => {

        const mp3sPath = path.resolve(absPath, file.name);
        const folderRelPath = relPath + '/' + file.name;
        const year = file.name.split('[')[1].split('] ')[0];
        const album = file.name.split('] ')[1];

        fs.readdir(mp3sPath, (err, songFiles) => {
            if (err) throw err;

            resolve(songFiles.map((songFile) => {
                return {
                    album: album,
                    year: year*1,
                    title: songFile.split('.mp3')[0],
                    url: folderRelPath + '/' + songFile
                };
            }));
        });
    }));

    Promise.all(promises).then((dirsResults) => {
        const plainDirsResults = dirsResults.reduce((acc, v) => {
            Array.prototype.push.apply(acc, v);
            return acc;
        }, []);
        const data = JSON.stringify({songs: plainDirsResults});

        fs.writeFile(absPath + '/songs.json', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
});
