const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(data => displayLessons(data.data))
}

displayLessons = (data) => {
    data.forEach(element => {
        console.log(element);
        const lessonDiv = document.createElement("div");
        lessonDiv.innerHTML = `
            <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book"></i>Lesson - ${element.level_no}</button>
        `
        document.getElementById("lesson-container").appendChild(lessonDiv);
    });
}

loadLessons();