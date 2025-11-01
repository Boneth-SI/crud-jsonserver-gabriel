// Script para listar usuários e buscar por CPF
const url = "https://crud-jsonserver-gabriel.onrender.com/usuarios";
const lista = document.getElementById("lista");
const buscaCPF = document.getElementById("buscaCPF");
const buscarBtn = document.getElementById("buscarBtn");

async function carregarUsuarios(filtroCPF = "") {
  let endpoint = url;
  if (filtroCPF) endpoint += `?cpf=${encodeURIComponent(filtroCPF)}`;

  try {
    const res = await fetch(endpoint);
    const data = await res.json();

    lista.innerHTML = data.length
      ? data.map(u => `
        <div class="usuario">
          <p><b>${u.nome} ${u.sobrenome}</b></p>
          <p>CPF: ${u.cpf} — RG: ${u.rg}</p>
          <p>Email: ${u.email} — Telefone: ${u.telefone}</p>
          <p>${u.rua} — ${u.bairro} — ${u.cidade}/${u.estado}</p>
        </div>
      `).join("")
      : "<p>Nenhum usuário encontrado.</p>";
  } catch (err) {
    lista.innerHTML = "<p>Erro ao carregar usuários.</p>";
  }
}

buscarBtn.addEventListener("click", () => carregarUsuarios(buscaCPF.value.trim()));
// Carrega todos inicialmente
carregarUsuarios();
