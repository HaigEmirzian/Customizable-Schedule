function class_check(){
    var table_js =  document.getElementById("schedule");
    var class_PEP111 = document.getElementById("PEP111_verify");
    var class_CS115 =  document.getElementById("CS115_verify");
    var class_MA124 = document.getElementById("MA124_verify");
    var class_CAL105 = document.getElementById("CAL105_verify");
    var class_CS146 = document.getElementById("CS146_verify");

    if (class_PEP111.checked == false){
        table_js.rows[3].cells[2].style.visibility = "hidden";
        table_js.rows[3].cells[4].style.visibility = "hidden";
        table_js.rows[5].cells[1].style.visibility = "hidden";
        table_js.rows[5].cells[5].style.visibility = "hidden";
        }
    else if (class_PEP111.checked == true){
        table_js.rows[3].cells[2].style.visibility = "visible";
        table_js.rows[3].cells[4].style.visibility = "visible";
        table_js.rows[5].cells[1].style.visibility = "visible";
        table_js.rows[5].cells[5].style.visibility = "visible";
        }
    if (class_CS115.checked == false){
        table_js.rows[3].cells[1].style.visibility = "hidden";
        table_js.rows[3].cells[3].style.visibility = "hidden";
        table_js.rows[3].cells[5].style.visibility = "hidden";
        }
    else if (class_CS115.checked == true){
        table_js.rows[3].cells[1].style.visibility = "visible";
        table_js.rows[3].cells[3].style.visibility = "visible";
        table_js.rows[3].cells[5].style.visibility = "visible";
        }

    if (class_MA124.checked == false){
        table_js.rows[2].cells[1].style.visibility = "hidden";
        table_js.rows[2].cells[3].style.visibility = "hidden";
        table_js.rows[2].cells[5].style.visibility = "hidden";
        table_js.rows[7].cells[2].style.visibility = "hidden";
        table_js.rows[7].cells[4].style.visibility = "hidden";
        }
    else if (class_MA124.checked == true){
        table_js.rows[2].cells[1].style.visibility = "visible";
        table_js.rows[2].cells[3].style.visibility = "visible";
        table_js.rows[2].cells[5].style.visibility = "visible";
        table_js.rows[7].cells[2].style.visibility = "visible";
        table_js.rows[7].cells[4].style.visibility = "visible";
        }

    if (class_CAL105.checked == false){
        table_js.rows[5].cells[2].style.visibility = "hidden";
        table_js.rows[5].cells[4].style.visibility = "hidden";
        }
    else if(class_CAL105.checked == true){
        table_js.rows[5].cells[2].style.visibility = "visible";
        table_js.rows[5].cells[4].style.visibility = "visible";
        }
    if (class_CS146.checked == false){
        table_js.rows[8].cells[2].style.visibility = "hidden";
        table_js.rows[8].cells[4].style.visibility = "hidden";
        }
    else if (class_CS146.checked == true){
        table_js.rows[8].cells[2].style.visibility = "visible";
        table_js.rows[8].cells[4].style.visibility = "visible";
        }
}

function color_check(){
    var table_js =  document.getElementById("schedule");

    table_js.rows[3].cells[2].style.backgroundColor = document.getElementById("PEP111_color").value;
    table_js.rows[3].cells[4].style.backgroundColor = document.getElementById("PEP111_color").value;
    table_js.rows[5].cells[1].style.backgroundColor = document.getElementById("PEP111_color").value;
    table_js.rows[5].cells[5].style.backgroundColor = document.getElementById("PEP111_color").value;

    table_js.rows[3].cells[1].style.backgroundColor = document.getElementById("CS115_color").value;
    table_js.rows[3].cells[3].style.backgroundColor = document.getElementById("CS115_color").value;
    table_js.rows[3].cells[5].style.backgroundColor = document.getElementById("CS115_color").value;

    table_js.rows[2].cells[1].style.backgroundColor = document.getElementById("MA124_color").value;
    table_js.rows[2].cells[3].style.backgroundColor = document.getElementById("MA124_color").value;
    table_js.rows[2].cells[5].style.backgroundColor = document.getElementById("MA124_color").value;
    table_js.rows[7].cells[2].style.backgroundColor = document.getElementById("MA124_color").value;
    table_js.rows[7].cells[4].style.backgroundColor = document.getElementById("MA124_color").value;

    table_js.rows[5].cells[2].style.backgroundColor = document.getElementById("CAL105_color").value;
    table_js.rows[5].cells[4].style.backgroundColor = document.getElementById("CAL105_color").value;

    table_js.rows[8].cells[2].style.backgroundColor = document.getElementById("CS146_color").value;
    table_js.rows[8].cells[4].style.backgroundColor = document.getElementById("CS146_color").value;

}
