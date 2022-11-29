const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

// Mostrar Menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Fechar Menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Mudar Tema
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Preencher Tabela Pagamentos
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymantStatus}</td>
                        <td class="${
                        order.shipping ===
                            'Recusado' ? 'danger' :
                        order.shipping === 
                            'Pendente' ? 'warning': 
                            'success'}">
                        ${order.shipping}</td>
                        <td class="primary">Detalhes</td>
                        `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})
