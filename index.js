//For the final project you will be creating an automated version of the classic card game WAR! 
//There are many versions of the game WAR. In this version there are only 2 players.
//You do not need to do anything special when there is a tie in a round.
//Think about how you would build this project and write your plan down. 
//Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
//You do not need to accept any user input, when you run your code, 
//the entire game should play out instantly without any user input inside of your browser's console.

//Deal 26 Cards to each Player from a Deck of 52 cards.
//Iterate through the turns where each Player plays a Card.
//The Player who played the higher card is awarded a point.
//Ties result in zero points for both Players.
//After all cards have been played, display the score and declare the winner.

// creating 1st class name card 

class Card{
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }
}


// creating 2nd class name Deck

class Deck{
    constructor() {
        this.cards = [];
        this.suits = ['Heart', 'Spade', 'Diamond', 'Club'];
        this.names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    }


//using loop to create a deck, each suit has 13 cards 
createDesk(){
    for (let i = 0; i < this.suits.length; i++) {
        for (let n = 0; n < this.names.length; n++){
            this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]))
        }
    }

    return this.cards

}


    

//shuffling the deck of cards 

shuffleDeck(){
    const shuffleDeck = [];
    for (let i = 0; i < 52; i++){
        let randomPoistion = Math.floor((this.cards.length - i)* Math.random());
        let randomItem = this.cards.splice 
        (randomPoistion, 1);
        shuffleDeck.push(randomItem);
    }

    return shuffleDeck;
 
}
    

// this function deals 26 cards to each of the two players 

dealDeck(players, shuffledDeck) {
     let dealingCards1 = shuffledDeck.splice(0, 26);
     for (let i = 0 ; i < dealingCards1.length; i++){
          players[0].hands.push(dealingCards1[i]);
     }

      let dealingCards2 = shuffledDeck.splice(0, 26);
      for (let i = 0; i < dealingCards2.length; i++){
        players[1].hands.push(dealingCards2[i]);
      }
  }
}






      //Creting a class for players, including properties of name, points 
     class Players {
        constructor(name) {
            this.name = name;
            this.points = 0;
            this.hands = [];
        }
      }

      // creating a menu
      class Game{
        constructor(){
            this.players = [];
        }
      

      // to start the war we need to enter names for both palyers and push these two players to an array
      start(){
        alert('Welcome to the Game of War')
        let player1 = prompt("Please enter first player's name: ");
        let player2 = prompt("Please enter second player's name: ")
        this.players.push(new Players(player1));
        this.players.push(new Players(player2));
        alert(`Declare War!! ${player1} ${player2}`);
       
       //Creating a new deck to shuffle the Cards
       let myDeck = new Deck();
       myDeck.createDesk();
       let shuffledDeck = myDeck.shuffleDeck();
       // dealing the shuffled cards to each of the two players
       myDeck.dealDeck(this.players, shuffledDeck);
       this.playGame();
       this.endGame();
      } 

    playGame(){
        let player1 = this.players[0];
        let player2 = this.players[1];

        let roundWinner = '';
        let turn = 0;

        while (player1.hands.length !== 0 && player2.hands.length !==0){
     //usimg pop method to remove and create a new array for the last item in the array
            let player1Card = player1.hands.pop()[0];
            let player2Card = player2.hands.pop()[0];

            //using if, else if, else condition to declare the winner.
            
            if (player1Card.value > player2Card.value) {
                roundWinner = player1.name;
                player1.points += 1;
                console.log('Turn:', (turn += 1), '\nPlayer1 card: ', player1Card.suit, player1Card.name
                , '\nPlayer2 card: ', player2Card.suit, player2Card.name, "\nThe winner of the round is: ", roundWinner);

            }
            
            else if (player2Card.value > player1Card.value) {
                roundWinner = player2.name;
                player2.points += 1;
                console.log('Turn:', (turn += 1), '\nPlayer1 card: ', player1Card.suit, player1Card.name,
                '\nPlayer2 card: ', player2Card.suit, player2Card.name, "\nThe winner of the round is: ", roundWinner);

            
            } else{
                console.log('Turn:', (turn += 1), '\nThe Cards for both players are: ', player1Card.suit, player1Card.name, "\nIt is tie for this round");
            }
        }
    }

        endGame(){
        let gameWinner = "";
        let player1 = this.players[0];
        let player2 = this.players[1];
        let WinnerPoints = 0;
     
     // if player1 points more then player2 point, then the winner will be player1 

     if (player1.points > player2.points){
        gameWinner = player1.name;
        WinnerPoints = player1.points;
        alert('Game Over!' + '\n' + gameWinner + 'won the game!\nFINAL SCORES:\n' + player1.name + ': ' +
        player1.points + '\n' + player2.name + ': '
        + player2.points + '\nThank you for playing');

        //vice versa 

            } else if (player2.points > player1.points){
                   gameWinner = player2.name;
                   WinnerPoints = player2.points;
                   alert('GAME OVER!' + '\n' + gameWinner + 'won the game!\nFINAL SCORES:\n' + player1.name + ': '
                   + player1.points + '\n' + player2.name + ': ' + player2.points + '\nTHANK you for playing');
    
            } else {
            alert('GAME OVER \nTIED GAME\nFINAL SCORES:\n' + 
            player1.name + ': ' + player1.points + '\n' + 
            player2.nmae + ': ' + player2.points + '\nTHANK you for playing');
            }
    
        }

 }

    let game = new Game();
    game.start();