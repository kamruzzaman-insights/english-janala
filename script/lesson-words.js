const loadLessonWords = (id) => {
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(res => res.json())
        .then(data => displayLessonWords(data.data))
}

const displayLessonWords = (data) => {

    const container = document.getElementById('lesson-word-show-container');
    container.innerHTML = '';

    container.classList.add(
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-3',
        'gap-4',
        'justify-item-center'
    );
    console.log(data);

    data.forEach(word => {
        console.log(word);
        const wordDiv = document.createElement('div');

        wordDiv.innerHTML = `
            <div class='bg-white py-6 px-12 rounded-xl shadow-sm space-y-2 text-center'>
                <h2 class='font-semibold text-xl'>${word.word}</h2>
                <p class='font-medium'>Meaning /Pronounciation</p>
                <h2 class='font-semibold text-xl'>${word.meaning} / ${word.pronunciation}</h2>
                <div class='flex justify-between items-center'>
                    <button><i class="fa-solid fa-info"></i></button>
                    <button><i class="fa-solid fa-bullhorn"></i></button>
                </div>
            </div>
        `
        container.appendChild(wordDiv);
    });
}