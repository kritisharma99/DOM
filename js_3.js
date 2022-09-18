//fetch Nav element
let parent_of_topics = document.getElementsByClassName("accordion-homepage");
// create section tag
let sub_child_sec = parent_of_topics.createElement("section");
sub_child_sec.className="parent selected";
//create h3 tag
const sub_child_h3 = document.createElement("h3");
sub_child_h3.role="button";
sub_child_h3.textContent="My New FAQ";
//Append to respective parents
sub_child_sec.appendChild(sub_child_h3);
//parent_of_topics is HTML collection we can't append directly to it we need to use item property to fetch 0th item of nav
parent_of_topics.item(0);
//then add
parent_of_topics.item(0).appendChild(sub_child_sec);
