function goInForest(){
    // meetCounter = 0;
     
     myImage = '';
     buttonDisabled1 = 'disabled'
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
 else forest = '<h3>There are no more pokemons. Start again! <br/><br/><button onclick="reset()">Reset</button></h3>'
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
                 <p>Choose one of your pokemon randomly.</p><button onclick="choosePokemon(${index})">Choose</button>`;
     }
     else forest = '<h3>There are no more pokemons. Start again! <br/><br/><button onclick="reset()">Reset</button></h3>'


     show();


 }

 function choosePokemon(index){

     let pokemonIndex = getRandomNumber(0, ashsPokemon.length-1);
     console.log(pokemonIndex, index);
     
     let choosenPokemon = ashsPokemon[pokemonIndex];
     
     newMyImage = choosenPokemon.imageSrc;

     forest = `<img src="${newMyImage}"/><img src="${randomPokemns[index].imageSrc}"/><br/>
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
         winningText = `<p>Your pokemon used "${ashsPokemonAbility.name}" ability and the enemy pokemon used
             "${facedPokemonAbility.name}" and you have won. Wait for the next encounter.</p>`; 
     }

     else if (ashsPokemonPower < facedPokemonPower) {
         facedPokemonHealth = facedPokemonHealth;
         ashsPokemonHealth -= (facedPokemonPower - ashsPokemonPower);

         winningText = `<p>Your pokemon used "${ashsPokemonAbility.name}" ability and the enemy pokemon used
             "${facedPokemonAbility.name}" and you have lost. Wait for the next encounter.</p>`; 
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