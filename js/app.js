const allPlayers = () => {
    const searchValue = document.getElementById('search-box');
    const searchcValueText = searchValue.value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchcValueText}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then((data) => console.log(data))


    searchValue.value = ''
}






























































