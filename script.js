const tombol = document.getElementsByTagName('button')[0];

tombol.onclick = function () {
    const nama = document.getElementById('inputNama').value;
    const nim = document.getElementById('inputNim').value;
    const prodi = document.getElementById('inputProdi').value;
    const alamat = document.getElementById('inputAlamat').value;

    const tempatData = document.getElementById('isi-data');
    const isi = document.createElement('p');
    isi.innerHTML = 'Nama : '+ nama +'<br>NIM : ' + nim + '<br>Program Studi : '+ prodi + '<br>Alamat : ' + alamat;
    tempatData.append(isi);
}