function dis(val){
    document.getElementById("result").value += val
}
function myfunction(event){
    if (event.key=="0" || event.key=="1"|| event.key=="2"|| event.key=="3" || event.key=="4" ||
        event.key=="5"|| event.key=="6" || event.key=="7"||event.key=="8" ||event.key=="9"||
        event.key=="/"||event.key=="-"||event.key=="+"||event.key=="*")
        document.getElementById("result").value +=Event.key;
}
var cal=document.getElementById("calcu");
cal.onkeyup=function(event){
    if (event.keycode===13){
        console.log("enter");
        let x=document.getElementById("result").value;
        console.log(x);
        solve();

    }

}
 function solve(){
    let x=document.getElementById("result").value;
    let y=math.evaluate(x);
    document.getElementById("result").value=y;
 }
 function clr(){
    document.getElementById("result").value=""
 }