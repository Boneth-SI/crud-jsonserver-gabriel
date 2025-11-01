// Script para criar usuário (POST)
document.getElementById("formPost").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    email: document.getElementById("email").value,
    idade: document.getElementById("idade").value,
    telefone: document.getElementById("telefone").value,
    rua: document.getElementById("rua").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
    rg: document.getElementById("rg").value,
    cpf: document.getElementById("cpf").value
  };

  const res = await fetch("https://crud-jsonserver-gabriel.onrender.com/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Usuário cadastrado!");
    e.target.reset();
  } else {
    alert("Erro ao cadastrar usuário.");
  }
});
