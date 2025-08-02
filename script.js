// script.js

// Simpan pesan deface dari form Kontak
function kirimPesan() {
  const user = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const script = document.getElementById("script").value;

  if (user && email && pass && script) {
    let data = JSON.parse(localStorage.getItem("pesanDeface")) || [];
    data.push({ user, email, pass, script });
    localStorage.setItem("pesanDeface", JSON.stringify(data));
    alert("Pesan deface berhasil dikirim!");
    document.getElementById("formKontak").reset();
  } else {
    alert("Harap isi semua field!");
  }
}

// Login Admin
function loginAdmin() {
  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;

  if (user === "admin" && pass === "admin") {
    window.location.href = "admin.html#dashboard";
  } else {
    alert("Username atau password salah!");
  }
}

// Tampilkan pesan di Admin Panel
function tampilPesan() {
  if (window.location.hash === "#dashboard") {
    const list = document.getElementById("listPesan");
    let data = JSON.parse(localStorage.getItem("pesanDeface")) || [];
    if (data.length === 0) {
      list.innerHTML = "<p>Tidak ada pesan masuk</p>";
    } else {
      list.innerHTML = "";
      data.forEach((p, i) => {
        list.innerHTML += `
          <div style="border:1px solid #ccc; padding:10px; margin:5px;">
            <b>${i + 1}. ${p.user}</b> (${p.email})<br>
            <small>Password: ${p.pass}</small><br>
            <pre>${p.script}</pre>
          </div>
        `;
      });
    }
  }
}