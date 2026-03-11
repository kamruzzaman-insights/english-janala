const loadLessonWords = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(res => res.json())
        .then(data => {
            removeActive();

            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            clickBtn.classList.add('active');

            displayLessonWords(data.data);
        })
}

const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    lessonButtons.forEach((btn) => {
        btn.classList.remove('active');
    });
}

const displayLessonWords = (data) => {
    const container = document.getElementById('lesson-word-show-container');
    container.innerHTML = '';

    if (data.length == 0) {
        const noWord = document.createElement('div');

        container.classList.remove(
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'lg:grid-cols-3',
            'gap-4',
            'justify-item-center'
        );

        noWord.innerHTML = `
            <p><i class="fa-solid fa-exclamation"></i></p>
            <p class='text-small text-gray-600'>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class='text-2xl font-medium'>নেক্সট Lesson এ যান</h2>
        `

        container.append(noWord);
        return;
    }

    container.classList.add(
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-3',
        'gap-4',
        'justify-item-center'
    );

    data.forEach(word => {
        const individualWord = document.createElement('div');
        individualWord.innerHTML = `
            <div class='bg-white py-6 px-12 rounded-xl shadow-sm space-y-2 text-center'>
                <h2 class='font-semibold text-xl'>${word.word ? word.word : 'শব্দটি পাওয়া যায় নি'}</h2>
                <p class='font-medium'>Meaning /Pronounciation</p>
                <h2 class='font-semibold text-xl'>${word.meaning ? word.meaning : 'শব্দের অর্থ এখনো সংযুক্ত করা হয়নি'} / ${word.pronunciation ? word.pronunciation : 'শব্দের উচ্চারন এখনো সংযুক্ত করা হয়নি'}</h2>
                <div class='flex justify-between items-center'>
                    <button id='word-id-${word.id}' onclick='loadWordDetails(${word.id})' class='p-1 bg-slate-100 rounded'><i class="fa-solid fa-info"></i></button>
                    <button class='p-1 bg-slate-100 rounded'><i class="fa-solid fa-bullhorn"></i></button>
                </div>
            </div>
        `
        container.appendChild(individualWord);
    });
}

// my_modal_5.showModal()