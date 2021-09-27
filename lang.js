var vdict = ['Nhật Ký', 'Trò Chơi', 'Từ mới', 'Ghi âm', 'Cài đặt'];
var edict = ['My Diary', 'Games', 'The Word', 'Record', 'Extensions'];
function Update(){
    if (localStorage.getItem("lang-e")==="vn"){
    document.querySelector("#ETOOL").innerText = "ETOOL - For A Better Future";
    document.querySelector('#b1').innerText = vdict[0];
    document.querySelector('#b2').innerText = vdict[1];
    document.querySelector('#b3').innerText = vdict[2];
    document.querySelector('#b4').innerText = vdict[3];
    document.querySelector('#b5').innerText = vdict[4];  
    } else {
        if (localStorage.getItem("lang-e")==="en"){
            document.querySelector("#ETOOL").innerText = "ETOOL - For A Better Future";
            document.querySelector('#b1').innerText = edict[0];
            document.querySelector('#b2').innerText = edict[1];
            document.querySelector('#b3').innerText = edict[2];
            document.querySelector('#b4').innerText = edict[3];
            document.querySelector('#b5').innerText = edict[4];  
        }
    }
}
