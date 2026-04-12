console.log("JS Loaded");
const songs = [
    { 
        id: 1, 
        name: "Neon City Night", 
        artist: "Sleepless", 
        img: "https://picsum.photos/id/145/300/300", 
        genre: "Pop", 
        source: "https://cdn.pixabay.com/audio/2022/10/14/audio_9939f77c85.mp3" 
    },
    { 
        id: 2, 
        name: "Classic Rock Anthem", 
        artist: "Midnight Riders", 
        img: "https://picsum.photos/id/158/300/300", 
        genre: "Rock", 
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
    },
    { 
        id: 3, 
        name: "Smooth Coffee Jazz", 
        artist: "The Lounge Trio", 
        img: "https://picsum.photos/id/225/300/300", 
        genre: "Jazz", 
        source: "https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a7315b.mp3" 
    },
    { 
        id: 4, 
        name: "Garage Punk", 
        artist: "The Distortions", 
        img: "https://picsum.photos/id/107/300/300", 
        genre: "Rock", 
        source: "https://upload.wikimedia.org/wikipedia/commons/d/d4/The_Epic_Rock.mp3" 
    },
    { 
        id: 5, 
        name: "Lo-Fi Dreams", 
        artist: "Cloud Nine", 
        img: "https://picsum.photos/id/327/300/300", 
        genre: "Pop", 
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
];

let currentSongIndex = 0;
let playlists = JSON.parse(localStorage.getItem("playlists")) || {};
let currentPlaylist = null;

// ---------------- THEME TOGGLE ----------------
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
}


// ---------------- SAVE PLAYLIST ----------------
function savePlaylists() {
    localStorage.setItem("playlists", JSON.stringify(playlists));
}

// ---------------- SHOW SONGS + FILTER ----------------
function showSongs(filterGenre = "all") {
    const allSongsSection = document.getElementById('all-songs');
    allSongsSection.innerHTML = '';

    const filterHeading = document.createElement('h3');
    filterHeading.textContent = "Filter by Genre";
    allSongsSection.appendChild(filterHeading);

    const select = document.createElement('select');
    ["all", "Pop", "Rock", "Jazz"].forEach(g => {
        const opt = document.createElement('option');
        opt.value = g;
        opt.textContent = g;
        select.appendChild(opt);
    });

    select.value = filterGenre;
    select.onchange = (e) => showSongs(e.target.value);
    allSongsSection.appendChild(select);

    const heading = document.createElement('h2');
    heading.textContent = "All Songs";
    allSongsSection.appendChild(heading);

    const listDiv = document.createElement('div');

    const filtered = filterGenre === "all"
        ? songs
        : songs.filter(s => s.genre === filterGenre);

    filtered.forEach(song => {
        const btn = document.createElement('button');
        btn.className = "song-item-btn";
        btn.textContent = `${song.name} - ${song.artist}`;
        btn.onclick = () => renderCurrentSong(song.id);
        listDiv.appendChild(btn);
    });

    allSongsSection.appendChild(listDiv);
}

// ---------------- SONG CARD ----------------
function renderCurrentSong(songId) {
    const song = songs.find(s => s.id === songId);
    currentSongIndex = songs.indexOf(song);

    const cardSection = document.getElementById('song-card');

    cardSection.innerHTML = `
        <div class="main-card-content">
            <img src="${song.img}" alt="${song.name}">
            <h2>${song.name}</h2>
            <p>${song.artist}</p>

            <audio controls autoplay src="${song.source}"></audio>

            <div>
                <button onclick="prevSong()">Prev</button>
                <button onclick="nextSong()">Next</button>
            </div>

            <button onclick="addtoPlaylist(${song.id})">
                Add to Playlist
            </button>
        </div>
    `;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    renderCurrentSong(songs[currentSongIndex].id);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    renderCurrentSong(songs[currentSongIndex].id);
}

// ---------------- PLAYLIST ----------------
function createPlaylist() {
    const input = document.getElementById('playlist-name-input');
    const name = input.value.trim();

    if (name && !playlists[name]) {
        playlists[name] = [];
        savePlaylists();
        renderPlaylists();
        input.value = "";
    } else {
        alert("Invalid or duplicate name!");
    }
}

function renderPlaylists() {
    const pDiv = document.getElementById('playlist');

    pDiv.innerHTML = `
        <h3>Create Playlist</h3>
        <input type="text" id="playlist-name-input" placeholder="Enter playlist name">
        <button onclick="createPlaylist()">Create</button>

        <h3>All Playlists</h3>
        <div id="playlist-list"></div>
    `;

    const list = document.getElementById('playlist-list');

    Object.keys(playlists).forEach(name => {
        const btn = document.createElement('button');
        btn.textContent = name;

        btn.onclick = () => {
            currentPlaylist = name;
            renderPlaylistSongs(name);
        };

        list.appendChild(btn);
    });
}

// ---------------- ADD SONG ----------------
function addtoPlaylist(songId) {
    if (!currentPlaylist) {
        alert("Select a playlist first!");
        return;
    }

    const song = songs.find(s => s.id === songId);

    if (!playlists[currentPlaylist].some(s => s.id === songId)) {
        playlists[currentPlaylist].push(song);
        savePlaylists();
        alert("Added!");
    } else {
        alert("Already exists!");
    }
}

// ---------------- REMOVE SONG ----------------
function removeFromPlaylist(name, index) {
    playlists[name].splice(index, 1);
    savePlaylists();
    renderPlaylistSongs(name);
}

// ---------------- SHOW PLAYLIST SONGS ----------------
function renderPlaylistSongs(name) {
    const pDiv = document.getElementById('playlist');
    const list = playlists[name];

    let html = `<h3>${name}</h3>`;

    if (list.length === 0) {
        html += `<p>No songs</p>`;
    }

    list.forEach((s, index) => {
        html += `
            <div>
                <button onclick="renderCurrentSong(${s.id})">${s.name}</button>
                <button onclick="removeFromPlaylist('${name}', ${index})">❌</button>
            </div>
        `;
    });

    html += `<br><button onclick="renderPlaylists()">Back</button>`;
    pDiv.innerHTML = html;
}

// ---------------- INIT ----------------

document.addEventListener("DOMContentLoaded", function () {

    // Theme button
    const toggleBtn = document.getElementById('toggle-section');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }

    // Initial load
    showSongs();
    renderPlaylists();

});