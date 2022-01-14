Catalogo de Filmes


A ideia é ter uma tabela principal e uma auxiliar, por exemplo:
Games, livros ou filmes pode ter uma tabela auxiliar de categorias.
A de petshop, uma tabela auxiliar do tutor do animal.
Precisa ter autenticação com usuario e senha.
Será feito com NodeJS no servidor, provendo informações em uma API Rest no formato JSON
e no Front será feito com Angular 8+.

Trabalho Individual
Monorepo -> API + FRONT = 2 diretorios de projetos em um repositorio
Evitar usar Bootstrap, mas não é uma regra.
Preferir usar Flex + SASS, pra praticar.
Tem que ter:
- Tela de login com usuario e senha;
- Layout do painel (topo, menus, rodapé e afins)
- Formulário para manter os dados do cadastro
- Listagem com os dados dos cadastros (Botão pra adicionar novo registro)
- Bonus Game: Paginação, filtro e orderação.

Sugestão de campos:
Tabela auxiliar (genero)
 - id auto increment not null primary key
 - nome varchar (30) not null
 - created_at
 - updated_at

Tabela principal (filmes)
- id auto increment not null primary key
- nome varchar (30) not null
- sinopse text not null
- ano_lancamento date not_null
- faturamento decimal(10, 2) 
- poster varchar(100) not_null
- genero_id int(11) not null 
- created_at
- updated_at

Tabela de usuário
- id auto increment not null primary key
- nome varchar (30) not null
- email varchar(100) not null
- senha varchar(100) not null
- created_at
- updated_at


