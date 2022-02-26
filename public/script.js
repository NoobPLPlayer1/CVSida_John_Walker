
function loadProjectViewObject(projectList, title, image, desc, popup)
{
    let text = 
    '<div class="box projectbox">' +
        '<div class="image_full">' +
            '<img class="project_image" src="./Images/' + image + '">' +
        '</div>' +
        '<div class="project_text">' +
            '<h1>' + title + '</h1>'+
            '<p>' + desc + '</p>' +
            (popup != null ? '<div class="button" onclick="Show(\'popup_window\');Show(\'projects\');" value="Show" id="check">Läs mer</div>' : '') +
        '</div>'+
    '</div>';
    projectList.innerHTML += text;
}

function loadLanguages(lang){
    var element = document.getElementById("lang");
    addListElement(element, lang)
}
function loadEducation(lang){
    var element = document.getElementById("edu");
    addListElement(element, lang)
}
function addListElement(parent, lang){
    var add = "<li>";
    if(lang.Ref != null){
        add += "<a href='";
        add += lang.Ref;
        add +="'>"
        add += lang.Text;
        add += "</a>";
    }
    else {
        add += lang.Text;
    }
    add += "</li>";
    parent.innerHTML += add;
}

function Show(id) {
    document.getElementById(id).style.visibility = 'visible';
}
function Hide(id) {
    document.getElementById(id).style.visibility = 'hidden';
}

function loadPopup(popup)
{
    var target = "./Content/" + popup + ".txt";
    readTextFile(target, function(text){
        document.getElementById("project_view").innerHTML = text;
        
    });
}

function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
function readTextFile(file, callback) {     
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/txt");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function addProjectViews(projectList, popupList)
{
    readJsonFile("./data.json", function(text){
        var list = JSON.parse(text);
        var k = -1;
        list.Projects.forEach(element => {
            loadProjectViewObject(projectList, element.Title, element.Image, element.Desc, element.Popup);
            if(element.Popup != null && popupList != null) {
                loadPopup(element.Popup);
            }
        });
        list.Languages.forEach(element => {
            loadLanguages(element)
        });
        list.Education.forEach(element => {
            loadEducation(element)
        });
    });
}

addProjectViews(document.getElementById('project_list'), document.getElementById('projects'));