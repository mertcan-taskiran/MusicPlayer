class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Experience", "Ludovico Einaudi", "1.jpg", "experience.mp3"),
    new Music("Fairy Tail", "Alexander Rybak", "2.jpg", "fairy-tail.mp3"),
    new Music("Roundtable Rival", "Lindsey Stirling", "3.jpg", "roundtable-rival.mp3")
];