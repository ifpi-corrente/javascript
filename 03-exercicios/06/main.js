function impar(x,y){
  var maior;
  var menor;
  if(x>=y){
    maior=x;
    menor=y; 
  }else{
    maior=y;
    menor=x;
  }
  for(i=menor; i<=maior; i++){
    if(i%2!=0){
      console.log(i);
    }

  }
}

impar(12,5);