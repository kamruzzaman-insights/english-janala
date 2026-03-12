document.getElementById("search-btn").addEventListener("click", () => {
    removeActive();
    
    const searchField = document.getElementById("search-word");
    const searchValue = searchField.value.trim().toLowerCase();
    searchField.value = "";

    console.log(searchValue);

    fetch("https://openapi.programming-hero.com/api/words/all")
        .then(res => res.json())
        .then(data => {
            const allWords = data.data;
            // console.log(allWords);

            const filterWords = allWords.filter(word => word.word.toLowerCase().includes(searchValue));
            console.log(filterWords);

            displayLessonWords(filterWords);
        });
});