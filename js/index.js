function change() {
    var object = document.getElementById("error");
    object.style.display = "none";
    var complementary_bases = { A:"U", C:"G", G:"C", U:"A"};
    var stop_codons = ["UAG","UAA","UGA"];

    var rna = document.getElementById('targetrna').value;
    trna = rna.match(/.{1,3}/g);
    for(i=0;i<trna.length;i++){
        if(trna[i]=="UAG" ||trna[i]=="UAA" ||trna[i]=="UGA"){
            var obj = document.getElementById("error");
            obj.style.display = "block";
        }
    }
    console.log(trna)
    rna = rna.toUpperCase().replace(/[^ACGU]/g,"")
    var revrna = rna.split("").reverse().join("");
    var b = rna.split("");
    var comprna="";
    for(i=0;i<b.length;i++){
        comprna += complementary_bases[b[i]]
    }
    comprev = comprna.split("").reverse().join("");
    document.getElementById("rev").innerHTML = revrna;
    document.getElementById("comp").innerHTML = comprna;
    document.getElementById("revcomp").innerHTML = comprev;
}
