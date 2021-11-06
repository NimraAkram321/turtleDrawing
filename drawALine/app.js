function draW(){
   // const canvas=document.querySelector("#canvas");
    //if(!canvas.getContext){
    //    return;
    //}
    const ctx=canvas.getContext('2d');

    ctx.strokeStyle='red';
    ctx.lineWidth=5;
    
    //ctx.beginPath();
    ctx.moveTo(1,1);
    ctx.lineTo(1,150);
//    ctx.stroke();
    ctx.moveTo(1,150);
    ctx.lineTo(150,150);
  //  ctx.stroke();
    ctx.moveTo(1,150);
    ctx.lineTo(150,150);
 //   ctx.stroke();
    
    ctx.moveTo(150,150);
    ctx.lineTo(150,1);
   // ctx.stroke();
    
    ctx.moveTo(150,1);
    ctx.lineTo(1,1);
    ctx.stroke();
    
     
    


}
draW()