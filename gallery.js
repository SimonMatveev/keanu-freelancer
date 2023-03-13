let videos = document.querySelectorAll(".gallery__video");
let controls = document.querySelectorAll(".gallery__controls");


for (let i = 0; i < videos.length; i++) {
    function getDuration() {
        let duration = videos[i].duration;
        let min = duration % 60;
        controls[i].textContent = Math.floor(duration / 60) + ':' + (min < 10 ? '0' : '') + Math.floor(min);
        //не уверен насчет второго Math floor возможно лучше Math round, но вроде в видео милисекунды вниз округляют
    }

    videos[i].addEventListener('click', function () {
        if (videos[i].paused) {
            videos[i].play();
            controls[i].classList.add("gallery__controls_hidden");
        } else {
            videos[i].pause();
            controls[i].classList.remove("gallery__controls_hidden");
        }
    })

    getDuration();

    videos[i].addEventListener('loadedmetadata', function () {
        getDuration();
    })
    //Скорее всего можно сделать лучше, без двойного вызова функции, 
    //но пока не вышло разобраться. Без эвентлистенера продолжительность не подгружается 
    //при первой загрузке страницы, без обычного вызова функции - при ее перезагрузке (
}
