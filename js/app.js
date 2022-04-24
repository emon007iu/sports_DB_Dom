const allPlayers = () => {
    const searchValue = document.getElementById('search-box');
    const searchcValueText = searchValue.value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchcValueText}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => showPlayerDetails(data.player))


    // searchValue.value = ''
}

const showPlayerDetails = (players) => {
    for(const player of players){
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card border mb-4">
                <div class="pro-pic">
                    <img class="w-100" src="${player.strThumb}" alt="" srcset="">
                </div>
                <div class="card-body p-3">
                    <h2>Name: ${player.strPlayer}</h2>
                    <h5>Country: ${player.strNationality}</h5>
                    <p>${player.strKit}</p>
                    <div class="allbutton">
                        <button class="btn btn-danger">Delete</button>
                        <button onclick= "details('${player.idPlayer}')" class="btn btn-success ms-3"><Details></Details></button>
                    </div>
                </div>
            </div> `;
        parent.appendChild(div);
    }
    
}


const details = (id) => {
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then(response => response.json())
    .then((data) => setDetails(data.players[0]))
}


const setDetails = (info) => {
    console.log(info);
    document.getElementById('details-container').innerHTML = `
        <div>
            <h1>Name: ${info.strPlayer}</h1>
        </div>
    `;
}






















































