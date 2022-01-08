let botao = $('#button')
$('.video').addClass('none')

botao.on('click', function(){
  let data = $("#data").val()
    $.ajax({url:`//api.nasa.gov/planetary/apod?api_key=Uv1ybujgihcL6691DwmkOI09LI7ZZyHTXGit8h13&date=${data}`,     
        success: function(result){ 
        $(".mostra-img").css("display","flex")        
        $('.descricao').text(result.explanation)         
        $('.titulo').text(result.title)
        $('#imagem').attr('src', result.url)
        }   
         })
     })