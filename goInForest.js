function goInForest(){
    // meetCounter = 0;

    fightTrainer='';
     
     myImage = '';
     buttonDisabled1 = 'disabled';
     buttonDisabled2 = '';
     facePokemons();
    }

 function facePokemons(){
     //clearTimeout(meetPokemons);

     //forest = '';

     newMyImage = '<img src="ash.jpeg" alt="Pokemon Trainer"/>';
     
     if(randomPokemns.length>0){
     let index = getRandomNumber(0, randomPokemns.length-1);
     let facedPokemon = randomPokemns[index];

     forest = /*html*/`
         ${newMyImage}<img src="${facedPokemon.imageSrc}"/><br/>
         <button onclick="catchPokemon(${index}) " >Catch</button>
         <button onclick="fightPokemon(${index})">Fight</button>
     `;
 
 }
 else forest = '<h3>There are no more pokemons. Start again! Or fight another pokemon trainer. <br/><br/><button onclick="reset()">Reset</button></h3>'
     show();
     
 }

 function catchPokemon(index){
     
 
     ashsPokemon.push(randomPokemns[index]);
     let caughtPokemon = randomPokemns[index].name;
     forest = `<h3>You caught ${caughtPokemon}. Wait for the next encounter.</h3>`;

     let newRandomPokemons = randomPokemns.filter(x => x.name !== caughtPokemon);
     randomPokemns = newRandomPokemons;

     show();

     meetPokemons = setTimeout(function nextEncounter(){facePokemons();}, 2000);

 }

 
 function fightPokemon(index){

     if(randomPokemns.length>0){
    

     forest = `${newMyImage}<img src="${randomPokemns[index].imageSrc}"/><br/>
                 <p>Choose one of your pokemons.</p><button onclick="selectYourPokemon(${index})">Choose</button>`;
     }
     else forest = '<h3>There are no more pokemons. Start again! Or fight another pokemon trainer. <br/><br/><button onclick="reset()">Reset</button></h3>'


     show();


 }

 function selectYourPokemon(index){
    forest = `${newMyImage}<img src="${randomPokemns[index].imageSrc}"/><br/> <p>Choose one of your pokemons.<p>`;
    for(let i = 0; i<ashsPokemon.length; i++){
        forest += /*html*/`
                    
                    <img src="${ashsPokemon[i].imageSrc}" onclick="choosePokemon(${index}, ${i})"/>
        `;
    }

    show();
}

 function choosePokemon(index, pokemonIndex){

     //let pokemonIndex = getRandomNumber(0, ashsPokemon.length-1);
     //console.log(pokemonIndex, index);
     
     let choosenPokemon = ashsPokemon[pokemonIndex];
     
     newMyImage = choosenPokemon.imageSrc;

     forest = `<img src="${newMyImage}"/><img src="${randomPokemns[index].imageSrc}"/><br/>
                <h4>Your pokeball randomly chose ${choosenPokemon.name} to fight against ${randomPokemns[index].name}.</h4>
                 <button id="startBattleButtonId" onclick="startBattle(${pokemonIndex}, ${index})">Commence Fight</button>`;


     show();



 }



 function startBattle(ashsPokemonIndex, facedPokemonIndex){




     let index1 = getRandomNumber(0, ashsPokemon[ashsPokemonIndex].abilities.length-1);

     let ashsPokemonAbility = ashsPokemon[ashsPokemonIndex].abilities[index1];
     let ashsPokemonPower = ashsPokemonAbility.power;

     let index2 = getRandomNumber(0, randomPokemns[facedPokemonIndex].abilities.length-1);

     let facedPokemonAbility = randomPokemns[facedPokemonIndex].abilities[index2];
     let facedPokemonPower = facedPokemonAbility.power;

     let ashsPokemonHealth = ashsPokemon[ashsPokemonIndex].health;
     let facedPokemonHealth = randomPokemns[facedPokemonIndex].health;

     let winningText;
     

     if(ashsPokemonPower > facedPokemonPower) {
         ashsPokemonHealth = ashsPokemonHealth;
         facedPokemonHealth -= (ashsPokemonPower - facedPokemonPower);
         winningText = `<p>${ashsPokemon[ashsPokemonIndex].name} used "${ashsPokemonAbility.name}" ability and 
                        ${randomPokemns[facedPokemonIndex].name} used
             "          ${facedPokemonAbility.name}" and you have won. </p><br/><h4>Wait for the next encounter.</h4>`; 
     }

     else if (ashsPokemonPower < facedPokemonPower) {
         facedPokemonHealth = facedPokemonHealth;
         ashsPokemonHealth -= (facedPokemonPower - ashsPokemonPower);

         winningText = `<p>${ashsPokemon[ashsPokemonIndex].name} used "${ashsPokemonAbility.name}" ability and 
                        ${randomPokemns[facedPokemonIndex].name} used
                        "${facedPokemonAbility.name}" and you have lost. </p><br/><h4>Wait for the next encounter.</h4>`; 
     }
     
     forest = /*html*/` <img src="${newMyImage}"/><img src="${randomPokemns[facedPokemonIndex].imageSrc}"/>
                         <br/><br/><label for="ashsPokemon">${ashsPokemon[ashsPokemonIndex].name} health:</label>
                         <progress id="ashsPokemon" value="${ashsPokemonHealth}" max="100"></progress>
                         <label for="facedPokemon">${randomPokemns[facedPokemonIndex].name} health:</label>
                         <progress id="facedPokemon" value="${facedPokemonHealth}" max="100"></progress><br/><br/>
                         ${winningText}`;

     show();

     

     meetPokemons = setTimeout(function nextEncounter(){facePokemons();}, 6000);
 }