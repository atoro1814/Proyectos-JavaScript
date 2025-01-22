// Write code below 💖

function mean(viewsArray){
    let totalViews = 0;
    for(let i = 0; i < viewsArray.length; i++){
      totalViews = totalViews + viewsArray[i] ;
  
    }
    return totalViews / viewsArray.length;
  }
  
  function median(viewsArray){
    const listaOrdenada = viewsArray.sort((a,b) => a - b);
  
    if (listaOrdenada.length % 2 == 0){
      let pos_ini = (listaOrdenada.length / 2) - 1 ;
      let pos_fin = listaOrdenada.length / 2;
  
      return (listaOrdenada[pos_ini] + listaOrdenada[pos_fin]) / 2;
    }else{
      const posMitad = Math.floor(listaOrdenada.length / 2) ;
      return listaOrdenada[posMitad];
      
    }
  }
  
  const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
  const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
  const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];
  
  
  console.log(mean(recentTikTokViews));
  console.log(median(recentTikTokViews));

  console.log(mean(recentInstagramViews));
  console.log(median(recentInstagramViews));

  console.log(mean(recentYouTubeViews));
  console.log(median(recentYouTubeViews));