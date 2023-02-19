
/****PLEASE DON'T MAKE CHANGES IN THIS FILE IT'S AFFECT THE CODE IF YOU NEED ANY HELP PLEASE CONTACT TO FLITS TEAM support@getflits.com ****/
(function(Flits) {
  /* To load js in all pages */
  if(Flits.Metafields.IS_SOCIAL_LOGIN_PAID && Flits.Metafields.IS_SOCIAL_LOGIN_ENABLE){
    if(window.flitsObjects.allCssJs.socialLoginJs){
        Flits.LoadStyleScript('socialLoginJs',window.flitsObjects.allCssJs.socialLoginJs.url);
    }
  }
  Flits(document).on("Flits:getShopifyProductData:complete",function(event){
    var data = event.detail;    
    Flits(data.item).find(".flits-product-image img").attr("src",data.resp.product.image.src)
  })
}(Flits));
