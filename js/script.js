$(document).ready(function () {  
 
    $("#cep").focusout(function () {
        if ($("#cep").val().length >= 5) {

            var cep = $("#cep").val().replace("-", "");
            
            var url = "https://viacep.com.br/ws/" + cep + "/json";
            console.log(url);
            $.ajax({
                url: url,
                type: "GET",
                dataType: "JSONP",
                data: {},
                success: function (data) {
                    console.log(data);
                    if (data != null) {                        
                        $("#rua").val(data.logradouro);
                        $("#bairro").val(data.bairro);
                        $("#cidade").val(data.localidade);
                        $("#estado").val(data.uf);
                        $("#ddd").val(data.ddd);
                    }
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });
});
