const xhr = new XMLHttpRequest();

function pesquisar(){
    const user = document.getElementById("buscar").value
    xhr.open("GET", "https://api.github.com/users/" + user + "/repos")

// xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var info = false
//         const obj = JSON.parse(this.responseText)
//         document.getElementById('tabela').innerHTML = "";
//         document.getElementById('infos').innerHTML = "";
//         for (var i = 0; i < obj.length; i++) {
//             document.getElementById('tabela').innerHTML += "<tr><td><img src='img/" + obj[i].language + ".png'> </img></td> <div id='conteudo'><td> Nome: " + obj[i].name + " </td><td>Linguagem: " + obj[i].language + "</td><td><a target='_blank'href='" + obj[i].html_url + "'>Link: " + obj[i].html_url + "</a></td> <td>Clonar: <button  onclick='clone(this)'> " + obj[i].clone_url + "</button></td></tr>";
//             if(info == false){
//             document.getElementById('infos').innerHTML += "<img src=" + obj[i].owner.avatar_url+ "> <p>" + obj[i].owner.login + "</p>"
//             info = true;
//             }
//         }
//     }
// }

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var info = false
        const obj = JSON.parse(this.responseText)
        document.getElementById('tabela').innerHTML = "";
        document.getElementById('infos').innerHTML = "";
        for (var i = 0; i < obj.length; i++) {
            var rato ="git clone "
            document.getElementById('tabela').innerHTML += "<tr><td><img src='img/" + obj[i].language + ".png'> </img></td> <div id='nomes'><td> Nome: " + obj[i].name + " </td></div><td> Descrição: " + obj[i].description + " </td><td>Linguagem mais usada: " + obj[i].language + "</td><td><a target='_blank' href='https://github.com/"+obj[i].owner.login+"/"+obj[i].name+"/commits/"+obj[i].default_branch+"'>Commits</a></td><td><a target='_blank' href='https://github.com/"+obj[i].owner.login+"/"+obj[i].name+"/branches/'>Branches</a></td><td><a target='_blank'href='" + obj[i].html_url + "'>Link: " + obj[i].html_url + "</a></td> <td>Clonar: <button  onclick='clone(this)'> " + rato + obj[i].clone_url + "</button></td></tr>";
            if(info == false){
            document.getElementById('infos').innerHTML += "<img src=" + obj[i].owner.avatar_url+ "> <a id='nomeuser' target='_blank' href='https://github.com/"+obj[i].owner.login+"'>" + obj[i].owner.login + "</a> <div> <a target='_blank' href='https://github.com/"+obj[i].owner.login+"?tab=following'>Seguindo</a> <a target='_blank' href='https://github.com/"+obj[i].owner.login+"?tab=followers'>Seguidores</a></div>"
            info = true;
            }
        }
    }
}
xhr.send()

function envia(obj) {
    localStorage['obj'] = JSON.stringify(obj)
    console.log(obj)
}

}

function clone(btn) {
    var input = document.createElement("input");
    input.value = btn.innerText;
    console.log(btn.innerText)
    input.id = "input";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}