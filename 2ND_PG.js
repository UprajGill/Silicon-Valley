var array=[];
slice1=document.getElementById("slice1").value;
slice2=document.getElementById("slice2").value;
slice3=document.getElementById("slice3").value;
slice4=document.getElementById("slice4").value;
slice5=document.getElementById("slice5").value;
slice6=document.getElementById("slice6").value;
slice7=document.getElementById("slice7").value;
slice8=document.getElementById("slice8").value;
size=document.getElementById("size").value;
array.push("Your Order Contains:");
array.push("Slice 1:",slice1);
array.push(",Slice 2:",slice2);
array.push(",Slice 3:",slice3);
array.push(",Slice 4:",slice4);
array.push(",Slice 5:",slice5);
array.push(",Slice 6:",slice6);
array.push(",Slice 7:",slice7);
array.push(",Slice 8:",slice8);
array.push(",Size:",size);


function confirm(){
    document.getElementById("textbox").innerHTML=array;
}
