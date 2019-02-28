/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Dragonstone","Rains of Castamere","Winter is Here","Light of the Seven"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links=[
    "http://moviesinfo.ir/images/series/tt0944947.jpg",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/8/85/Lannister_shield.png/revision/latest?cb=20151129115806&path-prefix=lt",
    "https://cdn.europosters.eu/image/750/posters/game-of-thrones-winter-is-here-jon-i49289.jpg",
    "https://upload.wikimedia.org/wikipedia/en/d/d1/Game_of_Thrones_Season_6.jpeg"
];
var artists=["Ramin Djawadi","The Nationak","Ramin Djawadi","Ramin Djawadi"];
var songLengths=["5:06","2:42","2:54","9:49"];
var songLinks=["https://www.youtube.com/watch?v=vomq7hPTVng",
"https://www.youtube.com/watch?v=ECewrAld3zw",
"https://www.youtube.com/watch?v=nmMaZXAahCs",
"https://www.youtube.com/watch?v=w9PXLTLuuSE"
];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
songs.forEach(function(song) {
$("#songs").append("<p>" + song + "</p>");
});

images_links.forEach(function(image) {
$("#images").append("<img src= '" + image + "' />");
});

artists.forEach(function(artist) {
$("#artists").append("<p>" + artist + "</p>");
});

songLengths.forEach(function(length) {
$("#lengths").append("<p>" + length + "</p>");
});

songLinks.forEach(function(link) {
$("#links").append("<a href= '" + link + "' >"+ "Listen" + "</a>");
});

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();





}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.

songs.push($("#song").val());


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
console.log(songs);
