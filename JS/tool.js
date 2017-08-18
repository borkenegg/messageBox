/**
 * Created by Administrator on 2017/8/15.
 */
function get_id(id) {
    return document.getElementById(id)?document.getElementById(id):null;
}
function getStyle(obj,attr){
    if(document.all){
        return parseInt(obj.currentStyle[attr]);
    }
    else{
        return parseInt(getComputedStyle(obj)[attr]);
    }
}

//function moving(){
//    clearInterval(timer);
//    timer=setInterval(function() {
//        var top_val = getStyle(message, "top");
//        console.log(top_val);
//        if (top_val > 146) {
//            top_val += 5;
//        }else{
//            clearInterval(timer);
//        }
//        message.style.top=top_val+"px";
//    },17);
//}



//function moving(top_val,color){
    if(document.all){
        event.cancelBubble=true;
    }else{
        event.stopPropagation();
    }

//
//
//    message.style.top=top_val+"px";
//    content.style.backgroundColor=color;
//}