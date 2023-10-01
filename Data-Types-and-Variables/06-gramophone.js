function gramophone(albumName, bandName, songName) {
    let duaration = (bandName.length * albumName.length * songName.length / 2);
    let rotation = Math.ceil(duaration / 2.5);
    console.log(`The plate was rotated ${rotation} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');