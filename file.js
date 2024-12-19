let Usuarios = [];
let encontrado;

let paragrafo = "";


function cadastroUsuario() {
    let cadUsuarios = document.getElementById('usernameINPT').value;
    let cadSenha = document.getElementById('passwordINPT').value;
    let cadEmail = document.getElementById('emailINPT').value;
    let cadastroUsuario = { cadUsuarios, cadSenha, cadEmail }
    if (cadastroUsuario != null) {
        Usuarios.push(cadastroUsuario)
        console.log(Usuarios)
        alert("Cadastro realizado, seja bem-vindo!")
    }
    else {
        alert("Não foi possível realizar o cadastro")
    }
}

function editarUsuario() {
    if (encontrado != null){
        encontrado.cadSenha  = document.getElementById("editPasswordINPT").value;
        encontrado.cadEmail  = document.getElementById("editEmailINPT").value;
    }
    else {
        alert("Usuário não encontrado");
    }
}

function deletarUsuario() {
    let email = document.getElementById("DELemailINPT").value;
    for (let p = 0; p < Usuarios.length; p++){
        if (Usuarios[p].cadEmail == email){
            Usuarios.splice(p, 1);
            break;    
        }
        alert ("deletado com sucesso")
    }
}

function listarUsuario() {
    let lista = document.getElementById('listar');
    paragrafo = "";
    for(let cadastroUsuario of Usuarios){
        paragrafo += 
        "Usuário: " + cadastroUsuario.cadUsuarios + "<br>" +
        "Senha: " + cadastroUsuario.cadSenha + "<br>" +
        "Email: " + cadastroUsuario.cadEmail + "<br>---------------------<br>";
    }
    lista.innerHTML = paragrafo;
}

function buscarUsuario(){
    encontrado = null;
    let cadUsuario = document.getElementById("editUsernameINPT").value;
    for (let p = 0; p < Usuarios.length; p++){
        if (Usuarios[p].cadUsuarios == cadUsuario){
            encontrado = Usuarios[p];
            break;
        }
    }
    if (encontrado != null){
        document.getElementById("editPasswordINPT").value = encontrado.cadSenha;
        document.getElementById("editEmailINPT").value = encontrado.cadEmail;
    }
    else {
        alert("Usuário não encontrado");
    }

}



function cadastrar() {
    EsconderTodas()
    DesmarcarTodos()
    document.getElementById('botaoCadastrar').classList.add('button-selecionado')
    document.getElementById('cadastro').style.display = 'block'
}


function editar() {
    EsconderTodas()
    DesmarcarTodos()
    document.getElementById('botaoEditar').classList.add('button-selecionado')
    document.getElementById('editar').style.display = 'block'
}

function deletar() {
    EsconderTodas()
    DesmarcarTodos()
    document.getElementById('botaoDeletar').classList.add('button-selecionado')
    document.getElementById('deletar').style.display = 'block'
}


function listar() {
    EsconderTodas();
    DesmarcarTodos();
    document.getElementById('botaoListar').classList.add('button-selecionado');
    document.getElementById('listar').style.display = 'block';
    document.getElementById('listar').innerHTML = paragrafo;
    listarUsuario();
}

function EsconderTodas() {
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'
}

function DesmarcarTodos() {
    document.getElementById('botaoCadastrar').classList.remove('button-selecionado')
    document.getElementById('botaoEditar').classList.remove('button-selecionado')
    document.getElementById('botaoDeletar').classList.remove('button-selecionado')
    document.getElementById('botaoListar').classList.remove('button-selecionado')

}






