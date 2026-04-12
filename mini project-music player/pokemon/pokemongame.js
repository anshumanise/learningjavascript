// Score tracking variables
let score1 = 0;
let score2 = 0;

const fightBtn = document.getElementById('fight');

async function handleFight() {
    // 1. Generate random IDs (IDs 1 to 1010 are generally safe for the modern PokeAPI)
    const id1 = Math.floor(Math.random() * 1000) + 1;
    const id2 = Math.floor(Math.random() * 1000) + 1;

    try {
        // 2. Fetch details for both random Pokémon
        const [data1, data2] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`).then(res => res.json()),
            fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`).then(res => res.json())
        ]);

        // 3. Update UI for both players
        updatePlayer('player1', data1);
        updatePlayer('player2', data2);

        // 4. Game logic: Compare base experience
        const exp1 = data1.base_experience || 0;
        const exp2 = data2.base_experience || 0;

        if (exp1 > exp2) {
            score1++;
            document.getElementById('p1_score').innerText = `Score: ${score1} (Winner!)`;
            document.getElementById('p2_score').innerText = `Score: ${score2}`;
        } else if (exp2 > exp1) {
            score2++;
            document.getElementById('p2_score').innerText = `Score: ${score2} (Winner!)`;
            document.getElementById('p1_score').innerText = `Score: ${score1}`;
        } else {
            // Draw scenario
            document.getElementById('p1_score').innerText = `Score: ${score1} (Draw)`;
            document.getElementById('p2_score').innerText = `Score: ${score2} (Draw)`;
        }

    } catch (error) {
        console.error("Battle error:", error);
    }
}

function updatePlayer(playerId, data) {
    const playerDiv = document.getElementById(playerId);
    
    // Update basic info: name, experience, and sprite
    playerDiv.querySelector('#name').innerText = data.name.toUpperCase();
    playerDiv.querySelector('#experience').innerText = `Exp: ${data.base_experience || 'N/A'}`;
    playerDiv.querySelector('#img').innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}" />`;
    
    // Update abilities list
    const abilitiesList = playerDiv.querySelector('#abilities');
    abilitiesList.innerHTML = '<li><b>Abilities</b></li>'; // Reset list header
    data.abilities.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item.ability.name;
        abilitiesList.appendChild(li);
    });
}

fightBtn.addEventListener('click', handleFight);
