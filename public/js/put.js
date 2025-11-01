// Script para atualizar usuário (PATCH)
document.getElementById("formPut").addEventListener("submit", async (e) => {
  e.preventDefault();
  const idVal = document.getElementById("id").value;
  const campo = document.getElementById("campo").value;
  const valor = document.getElementById("valor").value;

  const data = {};
  data[campo] = valor;

  const res = await fetch(`https://crud-jsonserver-gabriel.onrender.com/usuarios/${idVal}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Usuário atualizado!");
    e.target.reset();
  } else {
    alert("Erro ao atualizar usuário.");
  }
});
