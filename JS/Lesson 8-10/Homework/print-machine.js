// OOP
// class User {
//     constructor(name) {
//         this.name = name;
//     } 
//     sayHi() { 
//         alert(`Hello,${this.name}!`);
//     }
// }
// let user = new User('Volodmyr');
// user.sayHi();
// user.greeting = function () {
//     let time = new Date().getHours;
//     if(time < 12) 
//     console.log('Good morning')
//     else 
//     console.log("Good evening") 
// }

class PrintMachine {
    constructor(fontSize,fontFamily,fontColor,padding) {
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.fontColor = fontColor;
        this.padding = padding;
    }
    print(text) { 
        return document.write(`
        <div style="color:${this.fontColor}; font-family:${this.fontFamily}; font-size:${this.fontSize}px; padding: ${this.padding}px">
        ${text}
        </div>`);

    }
}
let newText = new PrintMachine(25,'Segoe UI','red',15);

newText.print('Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo veniam saepe corporis perferendis. Fugiat facere voluptatibus quod consequatur tempore!');

let newText1= new PrintMachine(18,'Arial','blue',15);
newText1.print('Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nobis, consequatur quis nihil recusandae sed quidem cumque alias aliquam inventore fugit deserunt voluptates exercitationem explicabo assumenda placeat adipisci aliquid autem cupiditate numquam voluptatibus facilis. Asperiores natus amet sequi, unde laborum expedita, nulla assumenda voluptate molestiae autem voluptatum? Fuga, necessitatibus at corrupti temporibus aliquid sit amet similique tempore soluta atque voluptatum provident iste incidunt harum qui excepturi vero cum maxime ex. Necessitatibus, quo rem. Error eveniet nisi dolores. Nam aliquid voluptatem mollitia quidem necessitatibus sint. Qui vitae mollitia totam. Officiis dolore debitis quo repudiandae perspiciatis, dolorum consequuntur iste quis nisi ducimus!')

