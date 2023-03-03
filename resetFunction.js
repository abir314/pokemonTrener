function reset(){

    myImage = '<img src="ash.jpeg" alt="Pokemon Trainer"/>';
    newMyImage = myImage;
    forest='';
   
    
    meetCounter=0;
    buttonDisabled1='';
    buttonDisabled2='';
   
    ashsPokemon =[{
        id: 1,
        name: 'pikachu',
        imageSrc: 'pikachu.jpeg',
        abilities: [{name: 'singleThunder', power: 30}, {name: 'fullThunder', power: 60}],
        health: 100

    }];
    randomPokemns = [{
        id: 1,
        name: 'charmander',
        imageSrc: 'charmander.jpeg',
        abilities: [{name: 'singleFireball', power: 40}, {name: 'fullFireball', power: 75}],
        health: 100

        },
        {
        id: 2,
        name: 'meowth',
        imageSrc: 'meowth.png',
        abilities: [{name: 'singleScratch', power: 20}, {name: 'fullScratch', power: 45}],
        health: 100
        },
        {
        id: 3,
        name: 'arbok',
        imageSrc: 'arbok.webp',
        abilities: [{name: 'singleBite', power: 35}, {name: 'fullBite', power: 55}],
        health: 100
        }

    ];
    show();

    }