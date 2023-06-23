var array = [
    {sual:"1) Birinci sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"1nci"},
    {sual:"2) Ikinci sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"2nci"},
    {sual:"3) Ucuncu sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"3ncu"},
    {sual:"4) Dorduncu sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"4cu"},
    {sual:"5) Besinci sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"1nci"},
    {sual:"6) Altinci sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"2nci"},
    {sual:"7) Yeddinci sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"3ncu"},
    {sual:"8) Sekkizinci sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"4cu"},
    {sual:"9) Doqquzuncu sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"1nci"},
    {sual:"10) Onuncu sual?", cvb:"1nci", cvb1:"2nci", cvb2:"3ncu", cvb3:"4cu", duz:"2nci"}
];
$(".test").hide()
$(".result1").hide()


$(".stop").click(function () {
    $(".test").hide()
    $(".result1").show()
    if (a>7) {
        $(".netice").css("color","green")
        $(".netice").append(" siz imtahandan kecdiniz!")
    }
    else{
        $(".netice").css("color","red")
        $(".netice").append("  ", " siz imtahandan kesildiniz!")
    }
})
//parolda adindi->
$(".giris").click(function () {
    if ($(".pswrd").val()=="kamran2001") {
        $(".signin").hide()
        $(".test").show()
        // $(".result1").append($(".surname").val())
    } else {
        $(".pswrd").css("borderColor","red")
    }
    $(".nm").append(
        $(".name").val()
    )
    $(".srnm").append(
        $(".surname").val()
    )
    sr()
    $(".result1 .netice").append($(".name").val())
    $(".result1 .netice").append(" ")
    $(".result1 .netice").append($(".surname").val())
})
var sira = 0;
function sr() {
    $(".question").html(
        `${array[sira].sual}`
    )
    $("#a1").html(
        `${array[sira].cvb}`
    )
    $("#a2").html(
        `${array[sira].cvb1}`
    )
    $("#a3").html(
        `${array[sira].cvb2}`
    )
    $("#a4").html(
        `${array[sira].cvb3}`
    )
}
$(".back").click(function () {
    
    if (sira<1) {
        sira==1 
    }
    else{
        sira--
    }
    sr()
    $(".answer").css("pointer-events","auto")
    $(".answer").css("background-color","#4242FF");


})
$(".next").click(function () {
    if (sira>10) {
        sira==10
    }
    else{
        sira++
    }
    sr()
    $(".answer").css("background-color","#4242FF");
    $(".answer").css("pointer-events","auto")
})
$(".saylar").click(function () {
    sira=$(this).html()
    sira--
    sr()
    $(".answer").css("background-color","#4242FF");
    $(".answer").css("pointer-events","auto");
})
var f = 60;
var h = 9;
$(".go").click(function () {
    setInterval(
        function saat() {
            f--
            $(".second").html(f)
            $(".minute").html(h)
            if (f==0) {
                
                h--
                f=60
                if (f==-1 || h==-1) {
                    $(".test").hide()
                    $(".result1").show()
                }
             
            }
        }
   ,100  )
   $(".ilkhisse").css("filter", "blur(0px)")
})

        var a = 1;
        var b = 1;
        var c = 9;


        $(".answer").click(function () {
            if (array[sira].duz == $(this).html()) {
                $(this).css("background-color","green");
                $("#b1 span").html(a++)
                $("#b3 span").html(c--)
                $(".answer").css("pointer-events","none")
                $(".saylar").eq(sira).css("background-color", "green")
            }
            else{
                $(this).css("background-color","red");
                $("#b2 span").html(b++)
                $("#b3 span").html(c--)
                $(".answer").css("pointer-events","none")
                // $(array[sira].duz).css("background-color","green");
                $(".saylar").eq(sira).css("background-color", "red")
            }
        });

        
        $(document).ready(function () {
            $(".show").click(function () {
                if ($("#UserPassword").attr("type") == "password") {
                    $("#UserPassword").attr("type", "text");
                    
                }
                else {
                    $("#UserPassword").attr("type", "password");
                }
                $(".show").toggleClass("fa-solid fa-eye-slash");
            });
        });
    