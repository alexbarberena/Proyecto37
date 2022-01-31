class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    //escribe aquí el código para cambiar el color de fondo 
    background("blue")

    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    textSize(20)
    fill("white")
    text("Resultado del Cuestionario",200,50);
    //llama aquí a getContestantInfo( )
    Contestant.getPlayerInfo()

    //escribe la condición para comprobar si contestantInfor no está indefinido 
    if(allContestants !== undefined){
      fill("yellow");
      textSize(20);
      text("¡El concursante que esta corecto, esta coloreado de color verde!",130,230);


    }
    //escribe aquí el código para agregar una nota
    var displayPosition=300;
      for(var plr in allContestants)
      {

          var correctAns ="2";
          if(correctAns === allContestants[plr].answer)
            {
              fill("Green")

            }
          else
            {
      
                fill("red");
            }
         
         displayPosition+=20
         text("     ",120,displayPosition);
         textSize(15); 
    
         //console.log(allContestants[plr].name);
         text(allContestants[plr].name +": "+ allContestants[plr].answer, 120, displayPosition);
      
    //escribe el código para resaltar al concursante que respondió correctamente
    
  }

}
}
