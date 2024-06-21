import inquirer from "inquirer";

class Player{
    name:string;
    fuel:number =100;
    constructor(name:string){
        this.name = name ;
    }
    fuelDecrease(){
        let fule = this.fuel - 25
        this.fuel = fule
    }
    fuelIcrease(){
        this.fuel = 100
    }
}
class opponent{
    name:string;
    fuel:number =100;
    constructor(name:string){
        this.name = name ;
    }
    fuelDecrease(){
        let fule = this.fuel - 25
        this.fuel = fule
    }

}
let Players = await inquirer.prompt([
    {
        type:"input",
        name:"name",
        message:"Please enter your name:"
    }
])
let opponents =await inquirer.prompt([
    {
        type: "list",
        name : "select",
        message: "select your opponent",
        choices:["Nove","Apex","Frost","Zephyr"]
    },

])
let  Player1 = new Player(Players.name)
let  opponent1 = new opponent(opponents.select)

do{
    //Nove
    if(opponents.select === "Nove"){
        let ask = await inquirer.prompt([
            {
                type:"list",
                name:"opt",
                message:"What would you like to do?",
                choices:["Attact","Drink portion","Run for your life."]
            }
        ])
        if(ask.opt == "Attact"){
            let num = Math.floor(Math.random()*2)
            if(num > 0){
                Player1.fuelDecrease()
                console.log(`${Player1.name} fuel is ${Player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(Player1.fuel <= 0){
                    console.log("You loose, Better luck next time");
                    process.exit()
                    
                }
                
            }
            if(num <= 0){
                opponent1.fuelDecrease()
                console.log(`${Player1.name} fuel is ${Player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(opponent1.fuel <= 0){
                    console.log("You Win");
                    process.exit()
                
            }
        }
        if (ask.opt === "Drink portion"){
Player1.fuelIcrease()
console.log(`You drink health portion your fule is ${Player1.fuel}`);

        }
        if(ask.opt === "Run for your life." ){
            console.log("You loose, Better luck next time");
            process.exit()
        }
    }

}
//Apex
if(opponents.select === "Apex"){
    let ask = await inquirer.prompt([
        {
            type:"list",
            name:"opt",
            message:"What would you like to do?",
            choices:["Attact","Drink portion","Run for your life."]
        }
    ])
    if(ask.opt == "Attact"){
        let num = Math.floor(Math.random()*2)
        if(num > 0){
            Player1.fuelDecrease()
            console.log(`${Player1.name} fuel is ${Player1.fuel}`);
            console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
            if(Player1.fuel <= 0){
                console.log("You loose, Better luck next time");
                process.exit()
                
            }
            
        }
        if(num <= 0){
            opponent1.fuelDecrease()
            console.log(`${Player1.name} fuel is ${Player1.fuel}`);
            console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
            if(opponent1.fuel <= 0){
                console.log("You Win");
                process.exit()
            
        }
    }
    if (ask.opt === "Drink portion"){
Player1.fuelIcrease()
console.log(`You drink health portion your fule is ${Player1.fuel}`);

    }
    if(ask.opt === "Run for your life." ){
        console.log("You loose, Better luck next time");
        process.exit()
    }
}

}
//Frost
if(opponents.select === "Frost"){
    let ask = await inquirer.prompt([
        {
            type:"list",
            name:"opt",
            message:"What would you like to do?",
            choices:["Attact","Drink portion","Run for your life."]
        }
    ])
    if(ask.opt == "Attact"){
        let num = Math.floor(Math.random()*2)
        if(num > 0){
            Player1.fuelDecrease()
            console.log(`${Player1.name} fuel is ${Player1.fuel}`);
            console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
            if(Player1.fuel <= 0){
                console.log("You loose, Better luck next time");
                process.exit()
                
            }
            
        }
        if(num <= 0){
            opponent1.fuelDecrease()
            console.log(`${Player1.name} fuel is ${Player1.fuel}`);
            console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
            if(opponent1.fuel <= 0){
                console.log("You Win");
                process.exit()
            
        }
    }
    if (ask.opt === "Drink portion"){
Player1.fuelIcrease()
console.log(`You drink health portion your fule is ${Player1.fuel}`);

    }
    if(ask.opt === "Run for your life." ){
        console.log("You loose, Better luck next time");
        process.exit()
    }
}

}
//Zepnyr
if(opponents.select === "Zepnyr"){
    let ask = await inquirer.prompt([
        {
            type:"list",
            name:"opt",
            message:"What would you like to do?",
            choices:["Attact","Drink portion","Run for your life."]
        }
    ])
    if(ask.opt == "Attact"){
        let num = Math.floor(Math.random()*2)
        if(num > 0){
            Player1.fuelDecrease()
            console.log(`${Player1.name} fuel is ${Player1.fuel}`);
            console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
            if(Player1.fuel <= 0){
                console.log("You loose, Better luck next time");
                process.exit()
                
            }
            
        }
        if(num <= 0){
            opponent1.fuelDecrease()
            console.log(`${Player1.name} fuel is ${Player1.fuel}`);
            console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
            if(opponent1.fuel <= 0){
                console.log("You Win");
                process.exit()
            
        }
    }
    if (ask.opt === "Drink portion"){
Player1.fuelIcrease()
console.log(`You drink health portion your fule is ${Player1.fuel}`);

    }
    if(ask.opt === "Run for your life." ){
        console.log("You loose, Better luck next time");
        process.exit()
    }
}

}

}
while(true)