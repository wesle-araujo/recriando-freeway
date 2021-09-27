let yCarros = [40,96,150, 210,270,316];
let xCarros = [600,600,600,600,600,600]
let velocidadeCarros = [2,2.5,3.2, 5, 3.3, 2.3 ];
let comprimentoCarro = 50;
let alturaCarro =40;



function mostraCarro(){
  for(let i =0; i<imagemCarros.length;i++){
    image(imagemCarros[i], xCarros[i],yCarros[i], comprimentoCarro,alturaCarro);
  
  }
  

}

function movimentaCarro(){
  
  for(let i=0;i<xCarros.length;i++){
      xCarros[i]-= velocidadeCarros[i];
      //print("O carro na posição: "+i+" tem a velocidade:"+velocidadeCarros[i]);

  }
    //xCarros[0]-= velocidadeCarros[0];
    //xCarros[1]-=velocidadeCarros[1];
    //xCarros[2]-=velocidadeCarros[2];
  
}

function voltaPosicaoInicial(){
   /*if(xCarros[0]<-50){
     xCarros[0] = 600;
   }
   if(xCarros[1]<-50){
     xCarros[1] = 600;
   }
   if(xCarros[2]<-50){
     xCarros[2] = 600;
   }*/
   for(let i=0;i<imagemCarros.length;i++){
     if(passouTodaTela(xCarros[i])){
         xCarros[i] = 600;
     }
   }
  
  function passouTodaTela(xCarros){
    return xCarros<-50;
  }
  
}
