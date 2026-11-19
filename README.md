# MVP-FRONTEND

# A Taverna do Hank

**Gerenciador de campanhas de RPG de mesa — Multi-Sistema**

A Taverna do Hank é uma aplicação web desenvolvida para auxiliar mestres e jogadores na organização de campanhas de RPG de mesa. A proposta é reunir ferramentas de gerenciamento de personagens, criaturas, guildas, eventos e documentos em uma única plataforma.

O projeto possui suporte inicial a três sistemas: **D&D 5e, Ordem Paranormal e Tormenta20**, com formulários e configurações adaptados às características de cada um.

## Funcionalidades

### Implementadas no código

- **Campanhas:** criação, edição, exclusão e seleção de campanhas, com separação por sistema.
- **Personagens:** cadastro e gerenciamento de fichas com atributos, progressão e controle de recursos específicos de cada sistema.
- **Bestiário:** cadastro, edição, exclusão, pesquisa e filtragem de criaturas.
- **Integração Open5e:** consulta e importação de criaturas do SRD de D&D 5e.
- **Guildas:** gerenciamento de organizações e controle de reputação.
- **Eventos:** registro de acontecimentos e histórico da campanha.
- **Rolador de dados:** suporte a d4, d6, d8, d10, d12, d20 e d100, com modificadores.
- **Documentos do mestre:** armazenamento e gerenciamento de arquivos PDF, XLS e XLSX.
- **Backup:** exportação e restauração dos dados estruturados em JSON.
- **Interface:** navegação por módulos, temas claro e escuro e identidade visual adaptada ao sistema selecionado.

### Em desenvolvimento

- Testes funcionais e correções dos módulos existentes.
- Aprimoramento da organização e manutenção do código.
- Ampliação das ferramentas de gerenciamento do mestre.
- Desenvolvimento de recursos para gerenciamento de combates.
- Estudo de mapas táticos e integração entre jogadores e mestres.

## Tecnologias

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilização e identidade visual |
| JavaScript | Lógica e funcionalidades |
| Tailwind CSS | Interface e responsividade |
| Lucide Icons | Ícones da interface |
| LocalStorage | Persistência dos dados estruturados |
| IndexedDB | Armazenamento de documentos |
| Fetch API | Integração com Open5e |

A aplicação utiliza tecnologias nativas do navegador e bibliotecas carregadas por CDN, sem exigir um servidor de aplicação ou banco de dados externo na versão atual.

## Como executar

**Requisitos:** navegador moderno, Visual Studio Code e extensão Live Server.

1. Faça o download ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Localize o arquivo HTML principal.
4. Clique com o botão direito no arquivo e selecione **Open with Live Server**.
5. A aplicação será aberta no navegador.

É necessária conexão com a internet para carregar as bibliotecas externas e realizar consultas à API Open5e.

## Armazenamento dos dados

A versão atual utiliza armazenamento local do navegador:

- **LocalStorage:** campanhas, personagens, criaturas, guildas, eventos e preferências.
- **IndexedDB:** documentos enviados para a área do mestre.

Os dados ficam associados ao navegador e ao dispositivo utilizados. Ainda não existe sincronização em nuvem ou compartilhamento entre diferentes usuários.

O backup JSON contempla os dados estruturados, mas não inclui os documentos armazenados no IndexedDB.

## Situação atual

A Taverna do Hank encontra-se em fase de desenvolvimento. A implementação já possui uma interface estruturada e diferentes módulos de gerenciamento, com operações de cadastro, edição, exclusão, consulta e armazenamento local.

Alguns recursos ainda precisam de validação funcional e aprimoramento. A tela de login, por exemplo, é atualmente demonstrativa: não realiza autenticação real nem gerencia contas de usuários.

O foco das próximas etapas é validar os recursos existentes e evoluir gradualmente a aplicação.

## Observações

O projeto organiza informações de diferentes sistemas de RPG e busca respeitar os direitos autorais e as licenças aplicáveis aos conteúdos utilizados. A integração externa implementada utiliza dados disponibilizados pela Open5e.

---

**A Taverna do Hank — Um espaço para organizar suas campanhas e aventuras.**
