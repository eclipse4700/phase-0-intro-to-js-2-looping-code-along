function writeCards(names, surprise) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      messages.push(message);
    }
  
    return messages;
  }

const names = ["Guadalupe", "Ollie", "Aki"];

function countDown(number) {
    while (number > 0) {
      console.log(number); // Output the current number
      number--; // Decrement the number by 1
    }
    console.log(number); // Output zero
  }

