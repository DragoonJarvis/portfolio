/*let pokemon = Object.create()
pokemon.ID = 0
pokemon.y = 2
*/
let pokeball1, pokeball2, pokeball3
let player, npcOak;
let textbox
let choice
let song



function setup() {
    song = loadSound('audio/oakLabMusic.mp3')
    song.play
    new Canvas(500, 500);
    world.gravity.y = 0;
    
    {   //Player
        player = new Sprite(width / 2, height / 2, 100)
        player.collider = 'd';
        player.rotationLock = true
        player.img = 'images/red.png'
        player.scale = .35
    }

    {   //walls
        wallLeft = new Sprite(-10, height / 2, 10, height, 'static')
        wallRight = new Sprite(width + 10, height / 2, 10, height, 'static')
    }

    {   //Oak
        npcOak = new Sprite(width / 2, height / height + 50, 300)
        npcOak.collider = 's';
        npcOak.rotationLock = true
        npcOak.img = 'images/oak.png'
        npcOak.scale = .25
    }

    {   //pokeballs

        pokeball1 = new Sprite(100, 350, 30);
        pokeball1.color = 'green';
        pokeball2 = new Sprite(200, 350, 30);
        pokeball2.color = 'blue';
        pokeball3 = new Sprite(150, 350, 30);
        pokeball3.color = 'red';
    }

    {   //Text Box
        textbox = new Sprite()
        textbox.collider = 's'
        textbox.w = width
        textbox.h = height / 5
        textbox.y = height - textbox.h / 2
        console.log(textbox.h)
        textbox.textSize = width / 25;
        textbox.text = 'Choose your Pokemon!'
        //textbox = new Sprite (width%width, height, width, height/5)
    }
}


function draw() {
    
    background('gray');
    
    function ChoosePokemon(choiceNum, color) {
        textbox.color = color
        pokeball1.remove();
        pokeball2.remove();
        pokeball3.remove();
        choice = choiceNum
    }

    {   //movement
        if (kb.pressing('a')) player.vel.x = -5;
        else if (kb.pressing('d')) player.vel.x = 5;
        else player.vel.x = 0;

        if (kb.pressing('s')) player.vel.y = 5;
        else if (kb.pressing('w')) player.vel.y = -5;
        else player.vel.y = 0;
    }


    {   // Updating Text

        if (player.overlaps(pokeball1)) {
            ChoosePokemon(1, 'green')
        }
        if (player.overlaps(pokeball2)) {
            ChoosePokemon(2, 'blue')
        }
        if (player.overlaps(pokeball3)) {
            ChoosePokemon(3, 'red')
        }

        if (choice === 1) {
            textbox.text = "You Chose Bulbasaur!";
            if (player.collides(npcOak)) {
                textbox.text = "You chose Bulbasaur, The Grass Type! Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
            }

        }

        if (choice === 2) {
            textbox.text = "You Chose Squirtle!";

            if (player.collides(npcOak)) {

                textbox.text = "Shoots water at prey while in the water. Withdraws into its shell when in danger."
            }
        }
        if (choice === 3) {
            textbox.text = "You Chose Charmander!";
            if (player.collides(npcOak)) {

                textbox.text = "The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places."
            }
        }


    }
}

