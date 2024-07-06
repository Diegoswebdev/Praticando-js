// Executar o código quando o conteúdo da página é carregado
document.addEventListener('DOMContentLoaded', ()=>{
    // Selecionar os elementos do Dom
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Adicionar um listener de evento de clique ao botão "Add Task"
    addTaskBtn.addEventListener('click',()=>{
        // Obter o valor do camnpo de entrada e remover espeços em branco
        const taskText = taskInput.value.trim();
        
        // Verificar se o campo não está vazio
        if (taskText !==''){
            // Adionar a tarefa à lista
            addTask(taskText);
            //limpa o campo de entrada
            taskInput.value = '';
        }
    });

    // Adionar um listener de envento de precionamento de tecla ao campo de entrada
    taskInput.addEventListener('keydown', (e) =>{
        // verifica se a tecla pressioanada foi "enter"
        if(e.key === 'Enter'){
            // obter o valor do campo de entrada e remover espaços em branco
            const taskText = taskInput.value.trim();
            //verifica se o campo está vazio
            if(taskText !== ''){
                // Adicionar a tarefa à lista
                addTask(taskText);
                //limpa o campo de entrada
                taskInput.value = '';
            }
        }
    });

    // Adicionar um listener de envento de clique à lita de tarefas
    taskList.addEventListener('click', (e)=>{
        // Verifica e o elemento clicado é um botão
        if(e.target.tagName === 'BUTTON'){
            // Remove o item da lista
            e.target.parentElement.remove()
        }
    })

    // Função para adicionar uma nova tarefa à lista
    function addTask(taskText) {
        // Cria um novo elemento de lista
        const li = document.createElement('li');
        // Define o texto do item da lista
        li.textContent = taskText;
        // Cria um botão de deletar
        const deleteBtn = document.createElement('button');
        // Define o texto do botão de deletar
        deleteBtn.textContent = 'Delete';
        // Adiciona o botão de deletar ao item da lista
        li.appendChild(deleteBtn);
        // Adiciona o item da lista à lista de tarefas
        taskList.appendChild(li);
    }
});