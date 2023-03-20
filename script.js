const form = document.querySelector('form');
const table = document.querySelector('table');

let data = [];

// função para renderizar a tabela
function renderTable() {
  table.innerHTML = `
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Telefone</th>
      <th>Ações</th>
    </tr>
  `;
  
  data.forEach((item, index) => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const emailCell = row.insertCell();
    const phoneCell = row.insertCell();
    const actionsCell = row.insertCell();
    
    nameCell.innerHTML = item.name;
    emailCell.innerHTML = item.email;
    phoneCell.innerHTML = item.phone;
    actionsCell.innerHTML = `
      <button onclick="edit(${index})">Editar</button>
      <button onclick="remove(${index})">Excluir</button>
    `;
  });
}

// função para criar um novo item na tabela
function create() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  
  if (!name || !email || !phone) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  
  const item = { name, email, phone };
  data.push(item);
  renderTable();
  form.reset();
}

// função para editar um item na tabela
function edit(index) {
  const item = data[index];
  const name = prompt('Novo nome:', item.name);
  const email = prompt('Novo email:', item.email);
  const phone = prompt('Novo telefone:', item.phone);
  
  if (!name || !email || !phone) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  
  item.name = name;
  item.email = email;
  item.phone = phone;
  renderTable();
}

// função para remover um item da tabela
function remove(index) {
  if (confirm('Tem certeza que deseja excluir este item?')) {
    data.splice(index, 1);
    renderTable();
  }
}
// inicializa a tabela com alguns dados
data.push({ name: 'Maria', email: 'maria@example.com', phone: '123456789' });
data.push({ name: 'João', email: 'joao@example.com', phone: '987654321' });
renderTable();