//You can edit ALL of the code here

"use strict";

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  // Adding episodes to page

  episodeList.forEach((episode) => {
    const episodeContainer = document.querySelector(".episode-content");
    const createCard = document.createElement("div");
    createCard.setAttribute("class", "episodeCard");
    createCard.setAttribute("id", `${episode.id}`);

    //episode name
    const createEpName = document.createElement("h3");
    createEpName.innerText = episode.name;

    // summary text
    const summaryText = document.createElement("p");
    summaryText.innerHTML = episode.summary;

    // episode image
    const episodeImage = document.createElement("img");
    episodeImage.src = episode.image.medium;

    // episode code with season and number

    const epSeasonAndNum = document.createElement("h4");
    let season = episode.season.toString().padStart(2, 0);
    let episodeNum = episode.number.toString().padStart(2, 0);
    epSeasonAndNum.innerText = `S${season}E${episodeNum}`;

    //Appending to div
    rootElem.appendChild(createCard);
    createCard.appendChild(createEpName);
    createCard.appendChild(epSeasonAndNum);
    createCard.appendChild(episodeImage);
    createCard.appendChild(summaryText);
    episodeContainer.appendChild(createCard);
  });
}

window.onload = setup;
