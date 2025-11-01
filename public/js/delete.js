// Script para excluir usuário (DELETE)
document.getElementById("formDelete").addEventListener("submit", async (e) => {
  e.preventDefault();
  const idVal = document.getElementById("id").value;

  const res = await fetch(`https://crud-jsonserver-gabriel.onrender.com/usuarios/${idVal}`, {
    method: "DELETE"
  });

  if (res.ok) {
    alert("Usuário excluído!");
    e.target.reset();
  } else {
    alert("Erro ao excluir usuário.");
  }
});
