# TV Show DOM Project

A starting point for CYF's TV show DOM project

The requirements for the project are here:

https://syllabus.codeyourfuture.io/js-core-3/tv-show-dom-project/readme

## Solution

The solution to this project will be given to you after you have completed it. You will be able to find the solution here

https://github.com/CodeYourFuture/tv-show-dom-project-solution

function episodeSelectorMenu(episodeList) {
const selectBox = document.getElementById("selectBox");
const selectEpisode = document.createElement("select");
selectBox.appendChild(selectEpisode);
selectEpisode.addEventListener("change", selectFilter);
episodeList.map((episode) => {
const episodeOptions = document.createElement("option");
console.log(episodeOptions);
selectEpisode.appendChild(episodeOptions);
episodeOptions.innerText = `${episode.name} - S${episode.season}E${episode.number}`;
});
function selectFilter() {
const usersOptionValue = document.querySelector("select");
var selectedValue = usersOptionValue.value;
const filterSelectedEpisode = allEpisodes.filter((episode) => {
return episode.name.includes(selectedValue);
});
