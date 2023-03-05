function fightOtherTrainer(){
    myImage = '';
    buttonDisabled1 = '';
    buttonDisabled2 = 'disabled';
    forest = '';
    newMyImage = '<img src="ash.jpeg" alt="Pokemon Trainer"/>';

    fightTrainer = /*html*/`
                    ${newMyImage}${mistysImage}<br/>
                    <p>Choose one of your pokemon randomly.</p><button onclick="selectPokemon()">Choose</button>
    `;

    show();

}

function selectPokemon(){
    fightTrainer = `${newMyImage}${mistysImage}<br/> <h4>Choose one of your pokemons.</h4>`;
    for(let i = 0; i<ashsPokemon.length; i++){
        fightTrainer += /*html*/`
                    
                    <img src="${ashsPokemon[i].imageSrc}" onclick="chooseYourPokemon(${i})"/>
        `;
    }

    show();
}

function chooseYourPokemon(ashsPokemonIndex){
    //let ashsPokemonIndex = getRandomNumber(0, ashsPokemon.length-1);
    let ashsChoosenPokemon = ashsPokemon[ashsPokemonIndex];
     
    newMyImage = ashsChoosenPokemon.imageSrc;

    let mistysPokemonIndex = getRandomNumber(0, mistysPokemon.length-1);
    let mistysChosenPokemon = mistysPokemon[mistysPokemonIndex];

    let mistysPokemonImage = mistysChosenPokemon.imageSrc;


    fightTrainer = `<img src="${newMyImage}"/><img src="${mistysPokemonImage}"/><br/>
               <h4>You chose ${ashsChoosenPokemon.name} to fight against Mistys ${mistysChosenPokemon.name}.</h4>
                <button onclick="startYourBattle(${ashsPokemonIndex}, ${mistysPokemonIndex})">Commence Fight</button>`;


    show();

}
function startYourBattle (yourIndex, enemyIndex){

    let index1 = getRandomNumber(0, ashsPokemon[yourIndex].abilities.length-1);

    let ashsPokemonAbility = ashsPokemon[yourIndex].abilities[index1];
    let ashsPokemonPower = ashsPokemonAbility.power;

    let index2 = getRandomNumber(0, mistysPokemon[enemyIndex].abilities.length-1);

    let facedPokemonAbility = mistysPokemon[enemyIndex].abilities[index2];
    let facedPokemonPower = facedPokemonAbility.power;

    let ashsPokemonHealth = ashsPokemon[yourIndex].health;
    let facedPokemonHealth = mistysPokemon[enemyIndex].health;

    let winningText;
    

    if(ashsPokemonPower > facedPokemonPower) {
        ashsPokemonHealth = ashsPokemonHealth;
        facedPokemonHealth -= (ashsPokemonPower - facedPokemonPower);
        winningText = `<p>${ashsPokemon[yourIndex].name} used "${ashsPokemonAbility.name}" ability and 
                       ${mistysPokemon[enemyIndex].name} used
            "          ${facedPokemonAbility.name}" and you have won. </p><br/><h4>Go in the grass to catch more pokemons or fight again.</h4>`; 
    }

    else if (ashsPokemonPower < facedPokemonPower) {
        facedPokemonHealth = facedPokemonHealth;
        ashsPokemonHealth -= (facedPokemonPower - ashsPokemonPower);

        winningText = `<p>${ashsPokemon[yourIndex].name} used "${ashsPokemonAbility.name}" ability and 
                       ${mistysPokemon[enemyIndex].name} used
                       "${facedPokemonAbility.name}" and you have lost. </p><br/><h4>Go in the grass to catch more pokemons or fight again.</h4>`; 
    }
    else {
        winningText = `<p>${ashsPokemon[yourIndex].name} used "${ashsPokemonAbility.name}" ability and 
                       ${mistysPokemon[enemyIndex].name} used
                       "${facedPokemonAbility.name}" and no one won. </p><br/><h4>Go in the grass to catch more pokemons or fight again.</h4>`; 
    
    }
    
    fightTrainer = /*html*/` <img src="${newMyImage}"/><img src="${mistysPokemon[enemyIndex].imageSrc}"/>
                        <br/><br/><label for="ashsPokemon">${ashsPokemon[yourIndex].name} health:</label>
                        <progress id="ashsPokemon" value="${ashsPokemonHealth}" max="100"></progress><br/>
                        <label for="facedPokemon">${mistysPokemon[enemyIndex].name} health:</label>
                        <progress id="facedPokemon" value="${facedPokemonHealth}" max="100"></progress><br/>
                        ${winningText}
                        <br/><button onclick = "fightOtherTrainer()">Fight Again</button>
                        `;

    show();


}