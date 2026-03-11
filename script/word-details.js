const loadWordDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
        .then(res => res.json())
        .then(data => displayWordDetails(data.data))
}

displayWordDetails = (wordDetails) => {
    // console.log(wordDetails);
    const wordDetailsContainer = document.getElementById("word-details-container");
    wordDetailsContainer.innerHTML = "";

    let synonymsHTML = "";
    wordDetails.synonyms.forEach(syn => {
        synonymsHTML += `<span class="px-3 py-1 bg-blue-300 rounded">${syn}</span>`
    })

    const detailsWord = document.createElement("div");
    detailsWord.innerHTML = `
        <div>
            <h2 class="text-2xl font-semibold mb-2">${wordDetails.word}(<i class="fa-solid fa-microphone-lines"></i>:${wordDetails.pronunciation})</h2>
            <h3 class="font-semibold mb-1">Meaning</h3>
            <h2 class="text-2xl font-semibold font-bangla mb-2">${wordDetails.meaning}</h2>
            <h3 class="font-semibold mb-1">Example</h3>
            <p class="mb-2">${wordDetails.sentence}</p>
            <h3 class="text-2xl">সমার্থক শব্দ গুলো</h3>

            <div class="flex flex-row flex-wrap gap-2 text-center">${synonymsHTML}</div>
        </div>
    `
    wordDetailsContainer.appendChild(detailsWord);

    my_modal_5.showModal();
}