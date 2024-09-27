// Membuat elemen form menggunakan DOM
const form = document.createElement('form');
const tulis = document.getElementById("Forms Kuis")

// Buat judul
const title = document.createElement('h2');
title.textContent = "Form Kuis";
document.body.appendChild(title);

// Event 1: Membuat elemen input untuk Nama
const namaLabel = document.createElement('label');
namaLabel.innerText = 'Nama: ';
const namaInput = document.createElement('input');
namaInput.type = 'text';
namaInput.id = 'nama';
form.appendChild(namaLabel);
form.appendChild(namaInput);
form.appendChild(document.createElement('br'));

// Event 2: Membuat elemen input untuk NIM
const nimLabel = document.createElement('label');
nimLabel.innerText = 'NIM: ';
const nimInput = document.createElement('input');
nimInput.type = 'text';
nimInput.id = 'nim';
form.appendChild(nimLabel);
form.appendChild(nimInput);
form.appendChild(document.createElement('br'));

// Event 3: Membuat dropdown Program Studi
const prodiLabel = document.createElement('label');
prodiLabel.innerText = 'Program Studi: ';
const prodiSelect = document.createElement('select');
prodiSelect.id = 'prodi';

const prodiOptions = ['PGSD', 'PGPAUD', 'PKP', 'SIK', 'LK'];
prodiOptions.forEach((prodi) => {
    const option = document.createElement('option');
    option.value = prodi;
    option.innerText = prodi;
    prodiSelect.appendChild(option);
});

form.appendChild(prodiLabel);
form.appendChild(prodiSelect);
form.appendChild(document.createElement('br'));

// Event 4: Membuat radio button untuk jenis kelamin
const jkLabel = document.createElement('label');
jkLabel.innerText = 'Jenis Kelamin: ';
form.appendChild(jkLabel);

const jenisKelamin = ['Laki-laki', 'Perempuan'];
jenisKelamin.forEach((jk) => {
    const jkInput = document.createElement('input');
    jkInput.type = 'radio';
    jkInput.name = 'jenisKelamin';
    jkInput.value = jk;
    jkInput.id = jk;

    const jkLabel = document.createElement('label');
    jkLabel.innerText = jk;
    form.appendChild(jkInput);
    form.appendChild(jkLabel);
});

form.appendChild(document.createElement('br'));

// Event 5: Membuat checkbox untuk hobi
const hobiLabel = document.createElement('label');
hobiLabel.innerText = 'Hobi: ';
form.appendChild(hobiLabel);

const hobiOptions = ['Olahraga', 'Membaca', 'Menulis', 'Bermain Musik'];
hobiOptions.forEach((hobi) => {
    const hobiInput = document.createElement('input');
    hobiInput.type = 'checkbox';
    hobiInput.name = 'hobi';
    hobiInput.value = hobi;
    hobiInput.id = hobi;

    const hobiLabel = document.createElement('label');
    hobiLabel.innerText = hobi;
    form.appendChild(hobiInput);
    form.appendChild(hobiLabel);
});

form.appendChild(document.createElement('br'));

// Tombol Submit
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.innerText = 'Submit';
form.appendChild(submitButton);

// Menambahkan form ke dalam body
document.body.appendChild(form);

// Event ketika form disubmit
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const prodi = document.getElementById('prodi').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked')?.value;
    const hobiList = Array.from(document.querySelectorAll('input[name="hobi"]:checked')).map(hobi => hobi.value); 

    alert(`Nama: ${nama}\nNIM: ${nim}\nProgram Studi: ${prodi}\nJenis Kelamin: ${jenisKelamin}\nHobi: ${hobiList.join(', ')}`);
});

