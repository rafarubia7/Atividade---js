let nome = "Rafael";
for(let i = 0; i < 10; i++){
    if (i == 3){
        nome = "João";
    }
    if(i == 4 && nome == "João"){
        console.log("O nome é João, pode para!");
        break;
    }
}