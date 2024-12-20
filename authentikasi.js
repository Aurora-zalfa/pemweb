//buat fungsi
//nilai username
//nilai password nya
//cek username dan password
//benar beri alert berhasil login
//username dan password kosong di berikan alert
//username dan password salah di berikan alert
//maka akan diberikan alert username dan password salah

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "atmin" && password == "123456"){
        alert("Berhasil login");
        window.location="index.html";
        return false;
    }
    else if(username =="" || password ==""){
        alert("username dan password tidak bolleh kosong");
    }
    else{
        alert("username dan password salah")
    }
}
