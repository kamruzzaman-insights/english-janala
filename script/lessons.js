const loadLessons = () => {
    toggleSpinnerOne(true);

    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => {
            displayLessons(data.data);
            toggleSpinnerOne(false);
        })
}

displayLessons = (data) => {
    data.forEach(element => {
        const lessonDiv = document.createElement("div");
        lessonDiv.innerHTML = `
            <button id="lesson-btn-${element.level_no}" onclick="loadLessonWords(${element.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book"></i>Lesson - ${element.level_no}</button>
        `
        document.getElementById("lesson-container").appendChild(lessonDiv);
    });
}

loadLessons();