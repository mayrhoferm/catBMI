function displayResult(catform)
{

    var n = catform.name.value;
    var c = catform.circumfence.value;
    var lim = catform.lim.value;

    if(n == null || n == ""){
        alert("Please enter your cat's name!");
        catform.name.focus() ;
        return false;
    }else if(c==null || c == ""){
        alert("Please enter your cat's circumfence of the chest!");
        catform.circumfence.focus() ;
        return false;
    }else if(lim==null||lim==""){
        alert("Please enter your cat's LIM (length of 13/16)!");
        catform.lim.focus() ;
        return false;
    }else{
        var m = n + "'s BMI is"

        var result = (((c/0.7067) - lim)/0.9156)-lim;

        if(result >= 12 && result <=30){
            m+= " in the average BMI range";
        }
        if(result < 12){
            m+= " below average BMI";
        }
        if(result > 30){
        m+= " above average BMI"
        }

    var output = n+"'s BMI is: " + result.toFixed(2) + "<br>" + m;

    document.getElementById("updateArea").innerHTML = output;
    }
}

