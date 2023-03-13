
# API REST todo-list

API Rest simples de uma todo-list feita com Node.js, Fastify e Prisma


## Instalação

Como rodar o projeto na sua máquina 

### 1. Clone o repositório.
```bash
  git clone https://github.com/sergiohdljr/todo-list.git
```
### 2. Instale as dependências 
```bash
  cd todo-list/server/
  npm install 
```
### 3. Iniciando o Servidor
```bash
  npm run dev
```
o servidor agora vai estar rodando na porta `http://localhost:3333`

    
## Usando a API

Você pode acessar a API do servidor usando os seguintes endpoints: 

### `GET`
- `/task`: Retorna todas as tarefas registradas.
- `/completedTasks`: Retorna todas as tarefas completas registradas.

### `POST`
- `/createTask`: Registra uma nova tarefa.
  - Body:
    - `task: String (required)`: Tarefa que deseja registar.

### `PUT`
- `toggleCompleteTask/:id`: Toggle de completa ou incompleta tarefa `id`.
  - Params:
    - `id: String (required)`: id da tarefa que você deseja efetuar a operação.
    
- `EditTask/:id`: Editar titulo de tarefas já registradas.
   - Params: 
     - `id: String (required)`: id da tarefa que você deseja efetuar a operação.
   - Body: 
     - `taskTitle: String(required)`: Novo titulo da tarefa que você deseja modificar.
     
### `DELETE`

- `/deleteTask/:id`: Deleta a tarefa específica de acordo com seu `id`.
  - Params:
    - `id: String (required)`: id da tarefa que você deseja efetuar a operação.
- `/deleteCompletedTasks`: Deleta todas as tarefas registradas cujo estejam marcadas com completas
