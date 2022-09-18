 var product_list = document.querySelectorAll(".as-imagegrid-item-title")
 var names_arr = new Array();
 [...product_list].forEach((el) => {
 var names = el.firstChild.nodeValue; 
 var name = names.trim();
 names_arr.push(name);
 });
 console.log(names_arr);