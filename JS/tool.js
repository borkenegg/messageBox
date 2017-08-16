/**
 * Created by Administrator on 2017/8/15.
 */
function get_id(id) {
    return document.getElementById(id)?document.getElementById(id):null;
}
function get_style(str,arr) {
    if(document.all){
        return parseInt(str.currentStyle[arr]);
    }
    else {
        return parseInt(getComputedStyle(str,false)[arr])
    }
}
