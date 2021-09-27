let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;




function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30 );
}



function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
      yAtor-=3;
    
  }
  if (keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
            yAtor+=3;   
      }
     
    
  }
  
}

function verificaColisao(){
  
  for (let i =0;i < imagemCarros.length;i++){
      colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro, alturaCarro, xAtor,yAtor,15);
    if(colisao){
      voltaAtor();
      somDaColisao.play();
      if(pntsMaiorQueZero()){
        meusPontos--;
      }
      
    }
  }
  
}

function voltaAtor(){
  yAtor=366;
}

function incluiPontos(){
  textAlign(CENTER);
  fill(color(255,240,60));
  textSize(25);
  text (meusPontos, width/5, 27);
  
}

function marcaPontos(){
  if(yAtor<15){
    meusPontos++;
    somDoPonto.play();
    voltaAtor();
  }
}

function pntsMaiorQueZero(){
   return meusPontos>0;
        
      
}

function podeSeMover(){
    return yAtor<366;
}
  
