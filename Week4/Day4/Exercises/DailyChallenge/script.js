class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time}s of ${this.title}.`)
    }
};

const newVideo = new Video("Daf Hayomi", "Daf Hayomi Channel", "1800");
newVideo.watch();

const newVideotwo = new Video("Halacha Yomit", "Halacha Yomit Channel", "600");



