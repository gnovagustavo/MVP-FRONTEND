// ===================================================================
// 1. DEFINIÇÃO ESTRUTURAL DOS 3 SISTEMAS PRINCIPAIS
// ===================================================================
const SYSTEM_CONFIG = {
  dnd: {
    id: 'dnd',
    nome: 'D&D 5e',
    subtituloPersonagens: 'Aventureiros, classes, níveis e atributos clássicos (D&D 5e).',
    subtituloCriaturas: 'Monstros e ameaças de D&D 5e (Personalizadas + SRD Open5e).',
    hasPublicApi: true,
    apiLabel: 'Consultar SRD (Open5e)',
    personagem: {
      classeLabel: 'Classe / Subclasse',
      classePlaceholder: 'Ex: Guerreiro (Campeão), Mago',
      subinfoLabel: 'Raça / Espécie',
      subinfoPlaceholder: 'Ex: Humano, Elfo Alto, Anão',
      progLabel: 'Nível',
      progUnit: '',
      progMin: 1,
      progMax: 20,
      progDefault: 1,
      progStep: 1,
      hpLabel: 'Pontos de Vida (PV)',
      recursoLabel: 'Espaços de Magia / DV',
      defesaLabel: 'Classe de Armadura (CA)',
      ataqueLabel: 'Bônus de Ataque / Prof.',
      atributos: [
        { key: 'for', label: 'Força', def: 10, isModDirect: false },
        { key: 'des', label: 'Destreza', def: 10, isModDirect: false },
        { key: 'con', label: 'Constituição', def: 10, isModDirect: false },
        { key: 'int', label: 'Inteligência', def: 10, isModDirect: false },
        { key: 'sab', label: 'Sabedoria', def: 10, isModDirect: false },
        { key: 'car', label: 'Carisma', def: 10, isModDirect: false }
      ]
    },
    criatura: {
      ndLabel: 'Nível de Desafio (ND / CR)',
      ndPlaceholder: 'Ex: 1/4, 2, 10',
      tipoLabel: 'Tipo de Criatura',
      tipos: ['Aberração', 'Besta', 'Celestial', 'Constructo', 'Dragão', 'Elemental', 'Fada', 'Gigante', 'Humanoide', 'Ínfero', 'Limo', 'Monstruosidade', 'Morto-Vivo', 'Planta'],
      defesaLabel: 'Classe de Armadura (CA)',
      hpLabel: 'Pontos de Vida (PV)',
      deslocamentoLabel: 'Deslocamento',
      deslocamentoPlaceholder: 'Ex: 9m, voo 18m',
      atributos: [
        { key: 'for', label: 'FOR', def: 10 },
        { key: 'des', label: 'DES', def: 10 },
        { key: 'con', label: 'CON', def: 10 },
        { key: 'int', label: 'INT', def: 10 },
        { key: 'sab', label: 'SAB', def: 10 },
        { key: 'car', label: 'CAR', def: 10 }
      ]
    }
  },
  ordem_paranormal: {
    id: 'ordem_paranormal',
    nome: 'Ordem Paranormal',
    subtituloPersonagens: 'Agentes da Ordo Realitas, NEX, Sanidade (SAN) e Pontos de Esforço (PE).',
    subtituloCriaturas: 'Entidades do Outro Lado e ameaças (Cadastro local personalizado).',
    hasPublicApi: false,
    apiLabel: 'Sem API Oficial Pública',
    personagem: {
      classeLabel: 'Classe / Trilha',
      classePlaceholder: 'Ex: Combatente (Aniquilador), Ocultista',
      subinfoLabel: 'Origem / Patente',
      subinfoPlaceholder: 'Ex: Investigador · Operador',
      progLabel: 'NEX',
      progUnit: '%',
      progMin: 0,
      progMax: 99,
      progDefault: 5,
      progStep: 5,
      hpLabel: 'Pontos de Vida (PV)',
      recursoLabel: 'Pontos de Esforço (PE)',
      extraStatLabel: 'Sanidade (SAN)',
      defesaLabel: 'Defesa',
      ataqueLabel: 'Teste de Ataque',
      atributos: [
        { key: 'agi', label: 'Agilidade (AGI)', def: 1, isModDirect: true },
        { key: 'for', label: 'Força (FOR)', def: 1, isModDirect: true },
        { key: 'int', label: 'Intelecto (INT)', def: 1, isModDirect: true },
        { key: 'pre', label: 'Presença (PRE)', def: 1, isModDirect: true },
        { key: 'vig', label: 'Vigor (VIG)', def: 1, isModDirect: true }
      ]
    },
    criatura: {
      ndLabel: 'VD (Valor de Desafio)',
      ndPlaceholder: 'Ex: 20, 80, 180, 320',
      tipoLabel: 'Elemento Principal',
      tipos: ['Sangue', 'Morte', 'Conhecimento', 'Energia', 'Medo', 'Realidade (Ameaça Humana/Animal)'],
      defesaLabel: 'Defesa',
      hpLabel: 'Pontos de Vida (PV)',
      deslocamentoLabel: 'Deslocamento / Enigma do Medo',
      deslocamentoPlaceholder: 'Ex: 9m · Enigma: Destruir o espelho',
      atributos: [
        { key: 'agi', label: 'AGI', def: 2 },
        { key: 'for', label: 'FOR', def: 2 },
        { key: 'int', label: 'INT', def: 1 },
        { key: 'pre', label: 'PRE', def: 2 },
        { key: 'vig', label: 'VIG', def: 2 }
      ]
    }
  },
  tormenta20: {
    id: 'tormenta20',
    nome: 'Tormenta20',
    subtituloPersonagens: 'Heróis de Arton, Nível, Pontos de Mana (PM) e atributos modificadores.',
    subtituloCriaturas: 'Ameaças de Arton e da Tormenta (Cadastro local personalizado).',
    hasPublicApi: false,
    apiLabel: 'Sem API Oficial Pública',
    personagem: {
      classeLabel: 'Classe / Multiclasse',
      classePlaceholder: 'Ex: Paladino, Arcanista, Bucaneiro',
      subinfoLabel: 'Raça / Divindade',
      subinfoPlaceholder: 'Ex: Qareen · Wynna',
      progLabel: 'Nível',
      progUnit: '',
      progMin: 1,
      progMax: 20,
      progDefault: 1,
      progStep: 1,
      hpLabel: 'Pontos de Vida (PV)',
      recursoLabel: 'Pontos de Mana (PM)',
      defesaLabel: 'Defesa',
      ataqueLabel: 'Ataque Principal',
      atributos: [
        { key: 'for', label: 'Força', def: 0, isModDirect: true },
        { key: 'des', label: 'Destreza', def: 0, isModDirect: true },
        { key: 'con', label: 'Constituição', def: 0, isModDirect: true },
        { key: 'int', label: 'Inteligência', def: 0, isModDirect: true },
        { key: 'sab', label: 'Sabedoria', def: 0, isModDirect: true },
        { key: 'car', label: 'Carisma', def: 0, isModDirect: true }
      ]
    },
    criatura: {
      ndLabel: 'ND (Nível de Desafio)',
      ndPlaceholder: 'Ex: 1/2, 3, 12, S+',
      tipoLabel: 'Tipo de Ameaça',
      tipos: ['Animal', 'Constructo', 'Espírito', 'Humanoide', 'Monstro', 'Morto-Vivo', 'Lefeu (Tormenta)'],
      defesaLabel: 'Defesa',
      hpLabel: 'Pontos de Vida (PV)',
      deslocamentoLabel: 'Deslocamento',
      deslocamentoPlaceholder: 'Ex: 9m (6q)',
      atributos: [
        { key: 'for', label: 'FOR', def: 2 },
        { key: 'des', label: 'DES', def: 1 },
        { key: 'con', label: 'CON', def: 2 },
        { key: 'int', label: 'INT', def: -2 },
        { key: 'sab', label: 'SAB', def: 1 },
        { key: 'car', label: 'CAR', def: 0 }
      ]
    }
  }
};

// ===================================================================
// 2. ESTADO PERSISTENTE E GERADOR DE ID ÚNICO
// ===================================================================
const esc = t => String(t ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = prefix => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

function loadInitialState() {
  const savedSistema = localStorage.getItem('rpg_sistema_ativo');
  const sistemaAtivo = SYSTEM_CONFIG[savedSistema] ? savedSistema : 'ordem_paranormal';

  let personagens = JSON.parse(localStorage.getItem('rpg_personagens'));
  if (!Array.isArray(personagens)) {
    personagens = [
      {
        id: 'op-1',
        sistema: 'ordem_paranormal',
        campanhaId: '',
        nome: 'Agente Tristan',
        classe: 'Combatente (Operações Especiais)',
        subinfo: 'Militar · Agente Especial',
        progresso: 15,
        pv: 32,
        pvMax: 32,
        recurso: 12,
        recursoMax: 12,
        extraStat: 18,
        extraStatMax: 18,
        defesa: 18,
        ataque: '+6',
        atributos: { agi: 3, for: 2, int: 1, pre: 1, vig: 2 }
      },
      {
        id: 'dnd-1',
        sistema: 'dnd',
        campanhaId: '',
        nome: 'Thalion Vaeril',
        classe: 'Mago (Evocação)',
        subinfo: 'Elfo Alto',
        progresso: 3,
        pv: 20,
        pvMax: 20,
        recurso: 6,
        recursoMax: 6,
        defesa: 13,
        ataque: '+5',
        atributos: { for: 8, des: 14, con: 14, int: 17, sab: 12, car: 10 }
      },
      {
        id: 't20-1',
        sistema: 'tormenta20',
        campanhaId: '',
        nome: 'Valen Korr',
        classe: 'Paladino de Khalmyr',
        subinfo: 'Humano · Khalmyr',
        progresso: 2,
        pv: 26,
        pvMax: 26,
        recurso: 8,
        recursoMax: 8,
        defesa: 19,
        ataque: '+7',
        atributos: { for: 3, des: 0, con: 2, int: 0, sab: 1, car: 3 }
      }
    ];
  } else {
    personagens = personagens.map(p => ({
      ...p,
      sistema: SYSTEM_CONFIG[p.sistema] ? p.sistema : 'ordem_paranormal',
      campanhaId: p.campanhaId || '',
      progresso: p.progresso ?? p.nex ?? 5,
      pv: p.pv ?? 20,
      pvMax: p.pvMax ?? p.pv ?? 20,
      recurso: p.recurso ?? p.pe ?? 10,
      recursoMax: p.recursoMax ?? p.recurso ?? p.pe ?? 10,
      extraStatMax: p.extraStatMax ?? p.extraStat ?? 15,
      atributos: p.atributos || { agi: 1, for: 1, int: 1, pre: 1, vig: 1 }
    }));
  }

  let criaturas = JSON.parse(localStorage.getItem('rpg_criaturas'));
  if (!Array.isArray(criaturas)) criaturas = [];

  let faccoes = JSON.parse(localStorage.getItem('rpg_faccoes'));
  if (!Array.isArray(faccoes)) {
    faccoes = [
      { id: 'f-op-1', sistema: 'ordem_paranormal', campanhaId: '', nome: 'Ordo Realitas', descricao: 'Organização secreta dedicada a combater o paranormal.', reputacao: 50 },
      { id: 'f-dnd-1', sistema: 'dnd', campanhaId: '', nome: 'Os Harpistas', descricao: 'Rede clandestina que promove a igualdade e combate tiranos.', reputacao: 25 },
      { id: 'f-t20-1', sistema: 'tormenta20', campanhaId: '', nome: 'Academia Arcana', descricao: 'Principal instituição de estudos mágicos de Arton.', reputacao: 15 }
    ];
  } else {
    faccoes = faccoes.map(f => ({
      ...f,
      sistema: SYSTEM_CONFIG[f.sistema] ? f.sistema : 'ordem_paranormal',
      campanhaId: f.campanhaId || ''
    }));
  }

  let eventos = JSON.parse(localStorage.getItem('rpg_eventos'));
  if (!Array.isArray(eventos)) {
    eventos = [];
  } else {
    eventos = eventos.map(ev => ({
      ...ev,
      sistema: SYSTEM_CONFIG[ev.sistema] ? ev.sistema : 'ordem_paranormal',
      campanhaId: ev.campanhaId || ''
    }));
  }

  let campanhas = JSON.parse(localStorage.getItem('rpg_campanhas'));
  if (!Array.isArray(campanhas)) {
    campanhas = [];
  } else {
    campanhas = campanhas.filter(c => SYSTEM_CONFIG[c.sistema]);
  }

  let campanhaAtivaId = localStorage.getItem('rpg_campanha_ativa') || '';
  const campValida = campanhas.find(c => c.id === campanhaAtivaId);
  if (!campValida) {
    campanhaAtivaId = '';
  }

  return {
    sistemaAtivo: campValida ? campValida.sistema : sistemaAtivo,
    campanhaAtivaId,
    personagens,
    criaturas,
    faccoes,
    eventos,
    campanhas
  };
}

let state = loadInitialState();

function saveState() {
  localStorage.setItem('rpg_sistema_ativo', state.sistemaAtivo);
  localStorage.setItem('rpg_campanha_ativa', state.campanhaAtivaId);
  localStorage.setItem('rpg_personagens', JSON.stringify(state.personagens));
  localStorage.setItem('rpg_criaturas', JSON.stringify(state.criaturas));
  localStorage.setItem('rpg_faccoes', JSON.stringify(state.faccoes));
  localStorage.setItem('rpg_eventos', JSON.stringify(state.eventos));
  localStorage.setItem('rpg_campanhas', JSON.stringify(state.campanhas));
  atualizarContadoresAbas();
}

function getSysConfig() {
  return SYSTEM_CONFIG[state.sistemaAtivo] || SYSTEM_CONFIG.ordem_paranormal;
}

function pertenceAoContextoAtual(item) {
  const itemSistema = item.sistema || 'ordem_paranormal';
  const itemCampanha = item.campanhaId || '';
  return itemSistema === state.sistemaAtivo && itemCampanha === state.campanhaAtivaId;
}

function atualizarContadoresAbas() {
  const pCount = state.personagens.filter(pertenceAoContextoAtual).length;
  const crCount = state.criaturas.filter(pertenceAoContextoAtual).length;
  const fCount = state.faccoes.filter(pertenceAoContextoAtual).length;
  const evCount = state.eventos.filter(pertenceAoContextoAtual).length;

  document.getElementById('badge-count-personagens').textContent = pCount;
  document.getElementById('badge-count-criaturas').textContent = crCount;
  document.getElementById('badge-count-faccoes').textContent = fCount;
  document.getElementById('badge-count-eventos').textContent = evCount;
}

// ===================================================================
// 3. TROCA DE SISTEMA E GERENCIAMENTO MULTI-CAMPANHA (SEM SOBRESCRITA)
// ===================================================================
function trocarSistema(novoSistema, preservarCampanhaId = null) {
  if (!SYSTEM_CONFIG[novoSistema]) return;
  state.sistemaAtivo = novoSistema;

  if (preservarCampanhaId !== null) {
    state.campanhaAtivaId = preservarCampanhaId;
  } else {
    // Se a campanha ativa pertence a outro sistema, vai para o Modo Livre do novo sistema sem apagar nenhuma campanha
    const campAtual = state.campanhas.find(c => c.id === state.campanhaAtivaId);
    if (!campAtual || campAtual.sistema !== novoSistema) {
      state.campanhaAtivaId = '';
    }
  }

  saveState();
  aplicarIdentidadeSistema();
  atualizarFiltrosCriaturas();
  renderCampanhas();
  renderPersonagens();
  renderCriaturas();
  renderFaccoes();
  renderEventos();
  renderMestre();
}

function aplicarIdentidadeSistema() {
  const cfg = getSysConfig();
  document.documentElement.dataset.sistema = cfg.id;
  document.getElementById('sistema-select').value = cfg.id;

  document.getElementById('titulo-personagens').textContent = `Personagens — ${cfg.nome}`;
  document.getElementById('subtitulo-personagens').textContent = cfg.subtituloPersonagens;

  document.getElementById('titulo-criaturas').textContent = `Criaturas & Bestiário — ${cfg.nome}`;
  document.getElementById('subtitulo-criaturas').textContent = cfg.subtituloCriaturas;

  const btnApi = document.getElementById('btn-consultar-api');
  const btnApiLabel = document.getElementById('btn-consultar-api-label');
  const banner = document.getElementById('api-status-banner');

  if (cfg.hasPublicApi) {
    btnApi.classList.remove('hidden');
    btnApiLabel.textContent = cfg.apiLabel;
    banner.classList.add('hidden');
  } else {
    btnApi.classList.add('hidden');
    banner.className = 'rounded-xl p-3.5 text-xs flex items-center gap-2.5 border bg-slate-900/90 border-slate-700 text-slate-300';
    banner.innerHTML = `<i data-lucide="info" class="w-4 h-4 text-indigo-400 shrink-0"></i><span><strong>${cfg.nome}:</strong> Este sistema não possui API oficial pública gratuita. Utilize o cadastro de criaturas personalizadas abaixo (os dados ficam salvos localmente no navegador).</span>`;
    banner.classList.remove('hidden');
  }
  lucide.createIcons();
}

function renderCampanhas() {
  const cfg = getSysConfig();
  const sel = document.getElementById('campanha-select');
  sel.innerHTML = '';

  // Opção livre do sistema atual
  sel.add(new Option(`Modo Livre (${cfg.nome} — Sem campanha)`, ''));

  // Exibe TODAS as campanhas criadas, agrupadas por sistema, para que nenhuma desapareça
  const grupos = [
    { sys: 'dnd', label: 'Campanhas — D&D 5e' },
    { sys: 'ordem_paranormal', label: 'Campanhas — Ordem Paranormal' },
    { sys: 'tormenta20', label: 'Campanhas — Tormenta20' }
  ];

  grupos.forEach(g => {
    const listaGrupo = state.campanhas.filter(c => c.sistema === g.sys);
    if (listaGrupo.length > 0) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = g.label;
      listaGrupo.forEach(c => {
        const opt = new Option(`${c.nome} [${SYSTEM_CONFIG[c.sistema].nome}]`, c.id);
        optgroup.appendChild(opt);
      });
      sel.appendChild(optgroup);
    }
  });

  const ativa = state.campanhas.find(x => x.id === state.campanhaAtivaId);
  if (!ativa) {
    state.campanhaAtivaId = '';
  }
  sel.value = state.campanhaAtivaId;

  const countPill = document.getElementById('campanha-count-pill');
  countPill.textContent = `${state.campanhas.length} campanha(s) salva(s)`;

  const badge = document.getElementById('campanha-badge');
  const desc = document.getElementById('campanha-desc');
  badge.textContent = ativa ? `${cfg.nome} · ${ativa.nome}` : `${cfg.nome} · Modo Livre`;
  desc.textContent = ativa ? ativa.descricao : '';
  desc.classList.toggle('hidden', !ativa || !ativa.descricao);

  document.getElementById('btn-edit-campanha').classList.toggle('hidden', !ativa);
  document.getElementById('btn-del-campanha').classList.toggle('hidden', !ativa);
  document.getElementById('header-sub').textContent = ativa ? `${cfg.nome} / ${ativa.nome}` : cfg.nome;
}

function selecionarCampanha(id) {
  if (!id) {
    state.campanhaAtivaId = '';
    saveState();
    renderCampanhas();
    renderPersonagens();
    renderCriaturas();
    renderFaccoes();
    renderEventos();
    renderMestre();
    return;
  }

  const camp = state.campanhas.find(c => c.id === id);
  if (!camp) return;

  // Sincroniza automaticamente o sistema caso a campanha selecionada seja de outro sistema
  if (camp.sistema !== state.sistemaAtivo) {
    trocarSistema(camp.sistema, camp.id);
  } else {
    state.campanhaAtivaId = camp.id;
    saveState();
    renderCampanhas();
    renderPersonagens();
    renderCriaturas();
    renderFaccoes();
    renderEventos();
    renderMestre();
  }
}

function openModalCampanha(isEdit = false) {
  const form = document.getElementById('form-campanha');
  form.reset();

  const campAtiva = isEdit ? state.campanhas.find(c => c.id === state.campanhaAtivaId) : null;
  document.getElementById('c-edit-id').value = campAtiva ? campAtiva.id : '';
  document.getElementById('modal-campanha-titulo').textContent = campAtiva ? 'Editar Campanha' : 'Nova Campanha';
  document.getElementById('btn-submit-campanha').textContent = campAtiva ? 'Salvar Alterações' : 'Criar e Selecionar';

  if (campAtiva) {
    document.getElementById('c-nome').value = campAtiva.nome;
    document.getElementById('c-descricao').value = campAtiva.descricao || '';
  }

  const targetSys = campAtiva ? campAtiva.sistema : state.sistemaAtivo;
  const radios = document.querySelectorAll('input[name="c-sistema"]');
  radios.forEach(r => { r.checked = (r.value === targetSys); });

  document.getElementById('modal-campanha').classList.remove('hidden');
}

function salvarCampanha(e) {
  e.preventDefault();
  const editId = document.getElementById('c-edit-id').value.trim();
  const nome = document.getElementById('c-nome').value.trim();
  const descricao = document.getElementById('c-descricao').value.trim();
  const radioChecked = document.querySelector('input[name="c-sistema"]:checked');
  const sistemaEscolhido = radioChecked ? radioChecked.value : state.sistemaAtivo;

  if (!nome) return;

  if (editId) {
    const idx = state.campanhas.findIndex(c => c.id === editId);
    if (idx !== -1) {
      const sistemaAntigo = state.campanhas[idx].sistema;
      state.campanhas[idx] = {
        ...state.campanhas[idx],
        nome,
        descricao,
        sistema: sistemaEscolhido
      };

      // Atualiza o sistema dos itens vinculados se o usuário mudou o sistema da campanha
      if (sistemaAntigo !== sistemaEscolhido) {
        state.personagens.forEach(p => { if (p.campanhaId === editId) p.sistema = sistemaEscolhido; });
        state.criaturas.forEach(cr => { if (cr.campanhaId === editId) cr.sistema = sistemaEscolhido; });
        state.faccoes.forEach(f => { if (f.campanhaId === editId) f.sistema = sistemaEscolhido; });
        state.eventos.forEach(ev => { if (ev.campanhaId === editId) ev.sistema = sistemaEscolhido; });
      }

      saveState();
      trocarSistema(sistemaEscolhido, editId);
      showToast(`Campanha "${nome}" atualizada!`);
    }
  } else {
    const nova = {
      id: uid('camp'),
      nome,
      descricao,
      sistema: sistemaEscolhido,
      criadaEm: new Date().toISOString()
    };
    // Adiciona ao array existente sem sobrescrever nenhuma campanha anterior
    state.campanhas = [...state.campanhas, nova];
    saveState();
    trocarSistema(sistemaEscolhido, nova.id);
    showToast(`Campanha "${nova.nome}" criada (${SYSTEM_CONFIG[sistemaEscolhido].nome})!`);
  }

  closeModal('modal-campanha');
  document.getElementById('form-campanha').reset();
}

function deletarCampanha() {
  const cid = state.campanhaAtivaId;
  if (!cid) return;
  excluirDocsDaCampanha(cid).catch(() => {});
  state.campanhas = state.campanhas.filter(c => c.id !== cid);
  state.personagens = state.personagens.filter(p => p.campanhaId !== cid);
  state.criaturas = state.criaturas.filter(cr => cr.campanhaId !== cid);
  state.faccoes = state.faccoes.filter(f => f.campanhaId !== cid);
  state.eventos = state.eventos.filter(ev => ev.campanhaId !== cid);
  state.campanhaAtivaId = '';
  saveState();
  selecionarCampanha('');
  showToast('Campanha e seus dados vinculados foram removidos.');
}

// ===================================================================
// 4. PERSONAGENS (ADAPTAÇÃO REAL + CONTROLE DINÂMICO DE PV/PE/PM/SAN)
// ===================================================================
function formatarAtributo(val, isModDirect) {
  const num = parseInt(val, 10) || 0;
  if (isModDirect) {
    return num >= 0 ? `+${num}` : `${num}`;
  }
  const mod = Math.floor((num - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

function ajustarStatusPersonagem(id, campo, delta) {
  const p = state.personagens.find(x => x.id === id);
  if (!p) return;

  if (campo === 'pv') {
    p.pv = Math.max(0, (p.pv || 0) + delta);
    if (p.pv > (p.pvMax || p.pv)) p.pvMax = p.pv;
  } else if (campo === 'recurso') {
    p.recurso = Math.max(0, (p.recurso || 0) + delta);
    if (p.recurso > (p.recursoMax || p.recurso)) p.recursoMax = p.recurso;
  } else if (campo === 'extraStat') {
    p.extraStat = Math.max(0, (p.extraStat ?? 0) + delta);
    if (p.extraStat > (p.extraStatMax || p.extraStat)) p.extraStatMax = p.extraStat;
  }

  saveState();
  renderPersonagens();
}

function openModalPersonagem(editId = null) {
  const cfg = getSysConfig();
  const pCfg = cfg.personagem;
  const p = editId ? state.personagens.find(x => x.id === editId) : null;

  document.getElementById('p-edit-id').value = p ? p.id : '';
  document.getElementById('modal-personagem-titulo').textContent = p ? `Editar Ficha: ${p.nome}` : 'Nova Ficha de Personagem';
  document.getElementById('modal-personagem-sub').textContent = `Sistema: ${cfg.nome}`;

  const attrsHtml = pCfg.atributos.map(attr => {
    const val = p && p.atributos && p.atributos[attr.key] !== undefined ? p.atributos[attr.key] : attr.def;
    return `
      <div>
        <label class="block text-[10px] text-slate-400 mb-1">${attr.label}</label>
        <input type="number" id="p-attr-${attr.key}" value="${val}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
    `;
  }).join('');

  const extraStatHtml = pCfg.extraStatLabel ? `
    <div>
      <label class="block text-xs font-medium text-slate-400 mb-1">${pCfg.extraStatLabel}</label>
      <input type="number" id="p-extrastat" min="0" value="${p ? (p.extraStat ?? 15) : 15}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
    </div>
  ` : '';

  document.getElementById('personagem-campos-dinamicos').innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="sm:col-span-2">
        <label class="block text-xs font-medium text-slate-400 mb-1">Nome do Personagem</label>
        <input type="text" id="p-nome" value="${p ? esc(p.nome) : ''}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">${pCfg.classeLabel}</label>
        <input type="text" id="p-classe" value="${p ? esc(p.classe) : ''}" placeholder="${pCfg.classePlaceholder}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">${pCfg.subinfoLabel}</label>
        <input type="text" id="p-subinfo" value="${p ? esc(p.subinfo || '') : ''}" placeholder="${pCfg.subinfoPlaceholder}" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">${pCfg.progLabel} ${pCfg.progUnit ? `(${pCfg.progUnit})` : ''}</label>
        <input type="number" id="p-progresso" min="${pCfg.progMin}" max="${pCfg.progMax}" value="${p ? p.progresso : pCfg.progDefault}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">${pCfg.hpLabel}</label>
        <input type="number" id="p-pv" min="0" value="${p ? p.pv : 20}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">${pCfg.recursoLabel}</label>
        <input type="number" id="p-recurso" min="0" value="${p ? p.recurso : 10}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
      ${extraStatHtml}
    </div>

    <div class="border-t border-slate-800 pt-3">
      <p class="text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Atributos (${cfg.nome})</p>
      <div class="grid grid-cols-3 gap-2.5 mb-3">
        ${attrsHtml}
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">${pCfg.defesaLabel}</label>
          <input type="number" id="p-defesa" value="${p ? p.defesa : 12}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">${pCfg.ataqueLabel}</label>
          <input type="text" id="p-ataque" value="${p ? esc(p.ataque) : '+2'}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
        </div>
      </div>
    </div>
  `;

  document.getElementById('modal-personagem').classList.remove('hidden');
}

function salvarPersonagem(e) {
  e.preventDefault();
  const cfg = getSysConfig();
  const pCfg = cfg.personagem;
  const editId = document.getElementById('p-edit-id').value;

  const atributos = {};
  pCfg.atributos.forEach(attr => {
    atributos[attr.key] = parseInt(document.getElementById(`p-attr-${attr.key}`).value, 10) || 0;
  });

  const pvVal = parseInt(document.getElementById('p-pv').value, 10) || 0;
  const recVal = parseInt(document.getElementById('p-recurso').value, 10) || 0;
  const extraVal = pCfg.extraStatLabel ? (parseInt(document.getElementById('p-extrastat').value, 10) || 0) : undefined;

  const dados = {
    id: editId || uid('pers'),
    sistema: state.sistemaAtivo,
    campanhaId: state.campanhaAtivaId,
    nome: document.getElementById('p-nome').value.trim(),
    classe: document.getElementById('p-classe').value.trim(),
    subinfo: document.getElementById('p-subinfo').value.trim(),
    progresso: parseInt(document.getElementById('p-progresso').value, 10) || pCfg.progDefault,
    pv: pvVal,
    pvMax: pvVal,
    recurso: recVal,
    recursoMax: recVal,
    extraStat: extraVal,
    extraStatMax: extraVal,
    defesa: parseInt(document.getElementById('p-defesa').value, 10) || 10,
    ataque: document.getElementById('p-ataque').value.trim() || '+0',
    atributos
  };

  if (editId) {
    const idx = state.personagens.findIndex(x => x.id === editId);
    if (idx !== -1) state.personagens[idx] = dados;
    showToast(`Ficha de ${dados.nome} atualizada!`);
  } else {
    state.personagens.push(dados);
    showToast(`Ficha de ${dados.nome} criada em ${cfg.nome}!`);
  }

  saveState();
  renderPersonagens();
  closeModal('modal-personagem');
}

function renderPersonagens() {
  const cfg = getSysConfig();
  const pCfg = cfg.personagem;
  const container = document.getElementById('grid-personagens');
  container.innerHTML = '';

  const lista = state.personagens.filter(pertenceAoContextoAtual);
  if (lista.length === 0) {
    container.innerHTML = `<p class="text-slate-500 text-sm italic col-span-3">Nenhum personagem cadastrado em ${cfg.nome} neste contexto.</p>`;
    return;
  }

  lista.forEach(p => {
    const attrsHtml = pCfg.atributos.map(attr => {
      const val = p.atributos && p.atributos[attr.key] !== undefined ? p.atributos[attr.key] : attr.def;
      const displayMain = formatarAtributo(val, attr.isModDirect);
      const displaySub = attr.isModDirect ? '' : `<span class="text-[11px] font-bold text-slate-400">${val}</span>`;
      return `
        <div class="bg-slate-800 border border-slate-700 rounded-xl py-2.5 px-1 flex flex-col items-center justify-center shadow-sm">
          ${displaySub}
          <span class="text-xl font-black text-slate-100">${displayMain}</span>
          <span class="text-[9px] text-slate-400 uppercase font-semibold mt-0.5 text-center">${attr.label.split(' ')[0]}</span>
        </div>
      `;
    }).join('');

    const recursoShort = state.sistemaAtivo === 'ordem_paranormal' ? 'PE' : (state.sistemaAtivo === 'tormenta20' ? 'PM' : 'Magia/DV');
    const defesaShort = state.sistemaAtivo === 'dnd' ? 'CA' : 'Defesa';
    const pvPct = p.pvMax ? Math.min(100, Math.round((p.pv / p.pvMax) * 100)) : 100;
    const recPct = p.recursoMax ? Math.min(100, Math.round((p.recurso / p.recursoMax) * 100)) : 100;

    const sanControlHtml = pCfg.extraStatLabel ? `
      <div class="flex items-center justify-between text-xs pt-1.5 border-t border-slate-800/80">
        <span class="text-slate-400 uppercase tracking-wide text-[10px]">SAN <strong class="text-purple-400 text-sm ml-1">${p.extraStat ?? 0}</strong></span>
        <div class="flex gap-1">
          <button onclick="ajustarStatusPersonagem('${p.id}', 'extraStat', -1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition">-1</button>
          <button onclick="ajustarStatusPersonagem('${p.id}', 'extraStat', 1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition">+1</button>
        </div>
      </div>
    ` : '';

    const card = document.createElement('div');
    card.className = 'bg-slate-900 text-slate-100 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl relative transition-colors duration-300';
    card.innerHTML = `
      <div class="flex justify-between items-start gap-2">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-12 h-12 shrink-0 bg-slate-800 rounded-full flex items-center justify-center border-2 border-indigo-500/30 text-indigo-400">
            <i data-lucide="user" class="w-6 h-6"></i>
          </div>
          <div class="min-w-0">
            <h3 class="font-bold text-lg leading-tight text-slate-100 truncate">${esc(p.nome)}</h3>
            <span class="inline-block mt-1 px-2.5 py-0.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-full text-[10px] font-bold uppercase tracking-wider truncate max-w-full">${esc(p.classe)}</span>
            ${p.subinfo ? `<p class="text-[11px] text-slate-400 mt-0.5 truncate">${esc(p.subinfo)}</p>` : ''}
          </div>
        </div>
        <div class="flex gap-1 shrink-0">
          <button onclick="openModalPersonagem('${p.id}')" title="Editar ficha" class="text-slate-400 hover:text-indigo-400 p-1.5 rounded bg-slate-800/50 hover:bg-slate-800 transition"><i data-lucide="pencil" class="w-4 h-4"></i></button>
          <button onclick="deletarPersonagem('${p.id}')" title="Excluir ficha" class="text-slate-500 hover:text-red-400 p-1.5 rounded bg-slate-800/50 hover:bg-slate-800 transition"><i data-lucide="trash" class="w-4 h-4"></i></button>
        </div>
      </div>

      <!-- Barras dinâmicas com botões rápidos -1 / +1 -->
      <div class="bg-slate-950/50 rounded-xl p-3 border border-slate-800/50 space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="text-slate-400 uppercase tracking-wide text-[10px]">PV <strong class="text-red-400 text-sm ml-1">${p.pv}</strong><span class="text-slate-500">/${p.pvMax || p.pv}</span></span>
          <div class="flex gap-1">
            <button onclick="ajustarStatusPersonagem('${p.id}', 'pv', -1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-red-950/60 hover:text-red-300 text-slate-200 font-bold text-xs transition">-1</button>
            <button onclick="ajustarStatusPersonagem('${p.id}', 'pv', 1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-emerald-950/60 hover:text-emerald-300 text-slate-200 font-bold text-xs transition">+1</button>
          </div>
        </div>
        <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div class="bg-red-500 h-full transition-all duration-300" style="width: ${pvPct}%"></div>
        </div>

        <div class="flex items-center justify-between text-xs pt-1">
          <span class="text-slate-400 uppercase tracking-wide text-[10px]">${recursoShort} <strong class="text-blue-400 text-sm ml-1">${p.recurso}</strong><span class="text-slate-500">/${p.recursoMax || p.recurso}</span></span>
          <div class="flex gap-1">
            <button onclick="ajustarStatusPersonagem('${p.id}', 'recurso', -1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition">-1</button>
            <button onclick="ajustarStatusPersonagem('${p.id}', 'recurso', 1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition">+1</button>
          </div>
        </div>
        <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div class="bg-blue-500 h-full transition-all duration-300" style="width: ${recPct}%"></div>
        </div>
        ${sanControlHtml}
      </div>

      <div class="grid ${pCfg.atributos.length === 5 ? 'grid-cols-5' : 'grid-cols-3'} gap-2">
        ${attrsHtml}
      </div>

      <div class="flex justify-between items-center bg-slate-800/40 rounded-xl p-3 border border-slate-700">
        <div class="text-center w-1/3 border-r border-slate-700">
          <span class="block text-[10px] text-slate-400 uppercase font-semibold">${defesaShort}</span>
          <span class="font-bold text-slate-200 flex items-center justify-center gap-1 mt-1"><i data-lucide="shield" class="w-3.5 h-3.5 text-indigo-400"></i> ${p.defesa}</span>
        </div>
        <div class="text-center w-1/3 border-r border-slate-700">
          <span class="block text-[10px] text-slate-400 uppercase font-semibold">Ataque</span>
          <span class="font-bold text-slate-200 flex items-center justify-center gap-1 mt-1"><i data-lucide="swords" class="w-3.5 h-3.5 text-indigo-400"></i> ${esc(p.ataque)}</span>
        </div>
        <div class="text-center w-1/3">
          <span class="block text-[10px] text-slate-400 uppercase font-semibold">${pCfg.progLabel}</span>
          <span class="font-bold text-slate-200 flex items-center justify-center gap-1 mt-1"><i data-lucide="zap" class="w-3.5 h-3.5 text-yellow-400"></i> ${p.progresso}${pCfg.progUnit}</span>
        </div>
      </div>

      <button onclick="openModalEvoluir('${p.id}')" class="w-full py-2.5 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 rounded-xl text-xs font-bold uppercase tracking-widest transition flex justify-center items-center gap-2">
        <i data-lucide="trending-up" class="w-4 h-4"></i> Evoluir ${pCfg.progLabel}
      </button>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

function deletarPersonagem(id) {
  state.personagens = state.personagens.filter(p => p.id !== id);
  saveState();
  renderPersonagens();
  showToast('Personagem removido.');
}

function openModalEvoluir(id) {
  const cfg = getSysConfig();
  const pCfg = cfg.personagem;
  const p = state.personagens.find(x => x.id === id);
  if (!p) return;

  document.getElementById('evoluir-personagem-id').value = p.id;
  document.getElementById('evoluir-titulo').textContent = `Evoluir ${pCfg.progLabel}`;
  document.getElementById('evoluir-personagem-nome').textContent = `${p.nome} (${pCfg.progLabel} atual: ${p.progresso}${pCfg.progUnit})`;
  document.getElementById('evoluir-label').textContent = `Incremento de ${pCfg.progLabel} ${pCfg.progUnit ? `(${pCfg.progUnit})` : ''}`;
  document.getElementById('evoluir-valor').value = pCfg.progStep;
  document.getElementById('modal-evoluir').classList.remove('hidden');
}

function confirmarEvolucao(e) {
  e.preventDefault();
  const cfg = getSysConfig();
  const pCfg = cfg.personagem;
  const id = document.getElementById('evoluir-personagem-id').value;
  const val = parseInt(document.getElementById('evoluir-valor').value, 10) || 0;
  const p = state.personagens.find(x => x.id === id);
  if (p) {
    p.progresso = Math.min(pCfg.progMax, p.progresso + val);
    saveState();
    renderPersonagens();
    closeModal('modal-evoluir');
    showToast(`+${val}${pCfg.progUnit} de ${pCfg.progLabel} aplicado a ${p.nome}!`);
  }
}

// ===================================================================
// 5. CRIATURAS & BESTIÁRIO (CRUD + FILTROS + API EXTERNA RESILIENTE)
// ===================================================================
function atualizarFiltrosCriaturas() {
  const cfg = getSysConfig();
  const selTipo = document.getElementById('filtro-criatura-tipo');
  selTipo.innerHTML = `<option value="">Todos (${cfg.criatura.tipoLabel})</option>`;
  cfg.criatura.tipos.forEach(t => selTipo.add(new Option(t, t)));
}

function limparFiltrosCriaturas() {
  document.getElementById('filtro-criatura-busca').value = '';
  document.getElementById('filtro-criatura-tipo').value = '';
  document.getElementById('filtro-criatura-origem').value = '';
  renderCriaturas();
}

function openModalCriatura(editId = null) {
  const cfg = getSysConfig();
  const cCfg = cfg.criatura;
  const cr = editId ? state.criaturas.find(x => x.id === editId) : null;

  document.getElementById('cr-id').value = cr ? cr.id : '';
  document.getElementById('modal-criatura-titulo').textContent = cr ? `Editar Criatura: ${cr.nome}` : 'Nova Criatura Personalizada';
  document.getElementById('modal-criatura-sub').textContent = `Sistema: ${cfg.nome}`;

  const tiposOptions = cCfg.tipos.map(t => `<option value="${esc(t)}" ${cr && cr.tipo === t ? 'selected' : ''}>${esc(t)}</option>`).join('');

  const attrsHtml = cCfg.atributos.map(attr => {
    const val = cr && cr.atributos && cr.atributos[attr.key] !== undefined ? cr.atributos[attr.key] : attr.def;
    return `
      <div>
        <label class="block text-[10px] text-slate-400 mb-1">${attr.label}</label>
        <input type="number" id="cr-attr-${attr.key}" value="${val}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
    `;
  }).join('');

  document.getElementById('criatura-campos-dinamicos').innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="sm:col-span-2">
        <label class="block text-xs font-medium text-slate-400 mb-1">Nome da Criatura</label>
        <input type="text" id="cr-nome" value="${cr ? esc(cr.nome) : ''}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">${cCfg.tipoLabel}</label>
        <select id="cr-tipo" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
          ${tiposOptions}
        </select>
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">${cCfg.ndLabel}</label>
        <input type="text" id="cr-nd" value="${cr ? esc(cr.nd) : ''}" placeholder="${cCfg.ndPlaceholder}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">${cCfg.hpLabel}</label>
        <input type="number" id="cr-pv" min="1" value="${cr ? cr.pv : 30}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">${cCfg.defesaLabel}</label>
        <input type="number" id="cr-defesa" min="1" value="${cr ? cr.defesa : 14}" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-400 mb-1">Tamanho</label>
        <select id="cr-tamanho" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
          ${['Minúsculo', 'Pequeno', 'Médio', 'Grande', 'Enorme', 'Colossal'].map(sz => `<option value="${sz}" ${cr && cr.tamanho === sz ? 'selected' : (!cr && sz === 'Médio' ? 'selected' : '')}>${sz}</option>`).join('')}
        </select>
      </div>
    </div>

    <div>
      <label class="block text-xs font-medium text-slate-400 mb-1">${cCfg.deslocamentoLabel}</label>
      <input type="text" id="cr-deslocamento" value="${cr ? esc(cr.deslocamento || '') : ''}" placeholder="${cCfg.deslocamentoPlaceholder}" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
    </div>

    <div class="border-t border-slate-800 pt-3">
      <p class="text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Atributos da Criatura</p>
      <div class="grid ${cCfg.atributos.length === 5 ? 'grid-cols-5' : 'grid-cols-6'} gap-2">
        ${attrsHtml}
      </div>
    </div>

    <div>
      <label class="block text-xs font-medium text-slate-400 mb-1">Ações, Ataques e Habilidades</label>
      <textarea id="cr-habilidades" rows="3" placeholder="Descreva ataques, resistências ou habilidades especiais..." class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">${cr ? esc(cr.habilidades || '') : ''}</textarea>
    </div>
  `;

  document.getElementById('modal-criatura').classList.remove('hidden');
}

function salvarCriatura(e) {
  e.preventDefault();
  const cfg = getSysConfig();
  const cCfg = cfg.criatura;
  const editId = document.getElementById('cr-id').value;

  const atributos = {};
  cCfg.atributos.forEach(attr => {
    atributos[attr.key] = parseInt(document.getElementById(`cr-attr-${attr.key}`).value, 10) || 0;
  });

  const nova = {
    id: editId || uid('cr'),
    sistema: state.sistemaAtivo,
    campanhaId: state.campanhaAtivaId,
    origem: 'personalizada',
    nome: document.getElementById('cr-nome').value.trim(),
    tipo: document.getElementById('cr-tipo').value,
    nd: document.getElementById('cr-nd').value.trim(),
    pv: parseInt(document.getElementById('cr-pv').value, 10) || 10,
    defesa: parseInt(document.getElementById('cr-defesa').value, 10) || 10,
    tamanho: document.getElementById('cr-tamanho').value,
    deslocamento: document.getElementById('cr-deslocamento').value.trim(),
    habilidades: document.getElementById('cr-habilidades').value.trim(),
    atributos
  };

  if (editId) {
    const idx = state.criaturas.findIndex(x => x.id === editId);
    if (idx !== -1) state.criaturas[idx] = nova;
    showToast(`Criatura "${nova.nome}" atualizada!`);
  } else {
    state.criaturas.push(nova);
    showToast(`Criatura "${nova.nome}" adicionada ao bestiário!`);
  }

  saveState();
  renderCriaturas();
  closeModal('modal-criatura');
}

function deletarCriatura(id) {
  state.criaturas = state.criaturas.filter(c => c.id !== id);
  saveState();
  renderCriaturas();
  showToast('Criatura removida.');
}

async function consultarCriaturasExternas() {
  if (state.sistemaAtivo !== 'dnd') return;

  const btn = document.getElementById('btn-consultar-api');
  const banner = document.getElementById('api-status-banner');
  const termoBusca = document.getElementById('filtro-criatura-busca').value.trim();

  btn.disabled = true;
  btn.classList.add('opacity-60');
  banner.className = 'rounded-xl p-3.5 text-xs flex items-center gap-2.5 border bg-slate-900 border-indigo-500/40 text-slate-200';
  banner.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 text-indigo-400 animate-spin shrink-0"></i><span>Consultando API pública Open5e (SRD 5.1)...</span>`;
  banner.classList.remove('hidden');
  lucide.createIcons();

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 7000);

  try {
    const url = new URL('https://api.open5e.com/v1/monsters/');
    url.searchParams.set('limit', '12');
    if (termoBusca) url.searchParams.set('search', termoBusca);

    const resp = await fetch(url.toString(), { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!resp.ok) {
      throw new Error(`HTTP ${resp.status}`);
    }

    const data = await resp.json();
    const resultados = Array.isArray(data.results) ? data.results : [];

    if (resultados.length === 0) {
      banner.className = 'rounded-xl p-3.5 text-xs flex items-center gap-2.5 border bg-amber-950/30 border-amber-700/50 text-amber-200';
      banner.innerHTML = `<i data-lucide="alert-circle" class="w-4 h-4 text-amber-400 shrink-0"></i><span>A API Open5e respondeu, mas nenhuma criatura foi encontrada para "${esc(termoBusca)}". Suas criaturas locais continuam disponíveis.</span>`;
      lucide.createIcons();
      return;
    }

    const mapaTipos = {
      aberration: 'Aberração', beast: 'Besta', celestial: 'Celestial', construct: 'Constructo',
      dragon: 'Dragão', elemental: 'Elemental', fey: 'Fada', giant: 'Gigante',
      humanoid: 'Humanoide', fiend: 'Ínfero', ooze: 'Limo', monstrosity: 'Monstruosidade',
      undead: 'Morto-Vivo', plant: 'Planta'
    };

    let importadas = 0;
    resultados.forEach(m => {
      const slugId = `open5e-${m.slug}-${state.campanhaAtivaId || 'livre'}`;
      const existe = state.criaturas.some(c => c.id === slugId);
      if (!existe) {
        const acoesResumo = Array.isArray(m.actions) && m.actions.length > 0
          ? m.actions.slice(0, 2).map(a => `${a.name}: ${a.desc}`).join(' | ')
          : 'Consulte o SRD 5.1 para detalhes completos.';

        state.criaturas.push({
          id: slugId,
          sistema: 'dnd',
          campanhaId: state.campanhaAtivaId,
          origem: 'externa',
          nome: m.name,
          tipo: mapaTipos[(m.type || '').toLowerCase()] || m.type || 'Monstruosidade',
          nd: String(m.challenge_rating ?? '0'),
          pv: parseInt(m.hit_points, 10) || 10,
          defesa: parseInt(m.armor_class, 10) || 10,
          tamanho: m.size || 'Médio',
          deslocamento: m.speed ? Object.entries(m.speed).map(([k, v]) => `${k}: ${v}`).join(', ') : '30 ft.',
          habilidades: acoesResumo,
          atributos: {
            for: m.strength ?? 10,
            des: m.dexterity ?? 10,
            con: m.constitution ?? 10,
            int: m.intelligence ?? 10,
            sab: m.wisdom ?? 10,
            car: m.charisma ?? 10
          }
        });
        importadas++;
      }
    });

    saveState();
    renderCriaturas();

    banner.className = 'rounded-xl p-3.5 text-xs flex items-center gap-2.5 border bg-emerald-950/30 border-emerald-700/50 text-emerald-200';
    banner.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0"></i><span>Consulta concluída via <strong>Open5e (SRD 5.1)</strong>: ${importadas} nova(s) criatura(s) salva(s) localmente para uso offline.</span>`;
    lucide.createIcons();
  } catch (err) {
    clearTimeout(timeoutId);
    const motivo = err.name === 'AbortError' ? 'tempo limite excedido (timeout)' : 'falha de rede ou indisponibilidade do servidor';
    banner.className = 'rounded-xl p-3.5 text-xs flex items-center gap-2.5 border bg-red-950/40 border-red-800/70 text-red-200';
    banner.innerHTML = `<i data-lucide="wifi-off" class="w-4 h-4 text-red-400 shrink-0"></i><span><strong>API externa indisponível</strong> (${motivo}). O sistema continua funcionando normalmente com suas criaturas personalizadas e dados em cache local.</span>`;
    lucide.createIcons();
    showToast('API externa indisponível. Operando em modo local.', 'error');
  } finally {
    btn.disabled = false;
    btn.classList.remove('opacity-60');
  }
}

function renderCriaturas() {
  const cfg = getSysConfig();
  const cCfg = cfg.criatura;
  const container = document.getElementById('grid-criaturas');
  container.innerHTML = '';

  const termo = document.getElementById('filtro-criatura-busca').value.trim().toLowerCase();
  const tipoFiltro = document.getElementById('filtro-criatura-tipo').value;
  const origemFiltro = document.getElementById('filtro-criatura-origem').value;

  const lista = state.criaturas.filter(cr => {
    if (!pertenceAoContextoAtual(cr)) return false;
    if (tipoFiltro && cr.tipo !== tipoFiltro) return false;
    if (origemFiltro && (cr.origem || 'personalizada') !== origemFiltro) return false;
    if (termo) {
      const alvo = `${cr.nome} ${cr.tipo} ${cr.nd} ${cr.habilidades || ''}`.toLowerCase();
      if (!alvo.includes(termo)) return false;
    }
    return true;
  });

  if (lista.length === 0) {
    container.innerHTML = `<p class="text-slate-500 text-sm italic col-span-3">Nenhuma criatura encontrada para os filtros atuais em ${cfg.nome}.</p>`;
    return;
  }

  lista.forEach(cr => {
    const isExterna = cr.origem === 'externa';
    const attrsHtml = cCfg.atributos.map(attr => {
      const val = cr.atributos && cr.atributos[attr.key] !== undefined ? cr.atributos[attr.key] : attr.def;
      return `
        <div class="bg-slate-800/80 border border-slate-700/80 rounded-lg py-1.5 text-center">
          <span class="block text-[9px] text-slate-400 font-bold">${attr.label}</span>
          <span class="text-xs font-black text-slate-100">${val}</span>
        </div>
      `;
    }).join('');

    const card = document.createElement('div');
    card.className = 'bg-slate-900 text-slate-100 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl flex flex-col justify-between';
    card.innerHTML = `
      <div class="space-y-3">
        <div class="flex justify-between items-start gap-2">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-1.5 mb-1">
              <span class="px-2 py-0.5 bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 rounded text-[10px] font-bold uppercase">${esc(cr.tipo)}</span>
              <span class="px-2 py-0.5 ${isExterna ? 'bg-sky-500/15 text-sky-300 border-sky-500/30' : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'} border rounded text-[10px] font-semibold">
                ${isExterna ? 'SRD Open5e' : 'Personalizada'}
              </span>
            </div>
            <h3 class="font-bold text-lg text-slate-100 leading-snug">${esc(cr.nome)}</h3>
            <p class="text-[11px] text-slate-400">${esc(cr.tamanho || 'Médio')} · ${cCfg.ndLabel.split(' ')[0]} <strong class="text-slate-200">${esc(cr.nd)}</strong></p>
          </div>
          <div class="flex gap-1 shrink-0">
            <button onclick="openModalCriatura('${cr.id}')" title="Editar criatura" class="text-slate-400 hover:text-indigo-400 p-1.5 rounded bg-slate-800/60 hover:bg-slate-800 transition"><i data-lucide="pencil" class="w-4 h-4"></i></button>
            <button onclick="deletarCriatura('${cr.id}')" title="Excluir criatura" class="text-slate-500 hover:text-red-400 p-1.5 rounded bg-slate-800/60 hover:bg-slate-800 transition"><i data-lucide="trash" class="w-4 h-4"></i></button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 bg-slate-950/50 rounded-xl p-2.5 border border-slate-800/60 text-xs">
          <div><span class="text-slate-400 text-[10px] uppercase block">${cCfg.hpLabel}</span><strong class="text-red-400 text-sm">${cr.pv}</strong></div>
          <div><span class="text-slate-400 text-[10px] uppercase block">${cCfg.defesaLabel}</span><strong class="text-indigo-400 text-sm">${cr.defesa}</strong></div>
        </div>

        <div class="grid ${cCfg.atributos.length === 5 ? 'grid-cols-5' : 'grid-cols-6'} gap-1.5">
          ${attrsHtml}
        </div>

        ${cr.deslocamento ? `<p class="text-[11px] text-slate-400"><strong class="text-slate-300">${cCfg.deslocamentoLabel.split('/')[0]}:</strong> ${esc(cr.deslocamento)}</p>` : ''}
        ${cr.habilidades ? `<p class="text-xs text-slate-300 bg-slate-800/40 border border-slate-800 rounded-lg p-2.5 line-clamp-3" title="${esc(cr.habilidades)}">${esc(cr.habilidades)}</p>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

// ===================================================================
// 6. FACÇÕES, ROLADOR DE DADOS E EVENTOS (ISOLADOS POR SISTEMA)
// ===================================================================
function openModalFaccao(editId = null) {
  const f = editId ? state.faccoes.find(x => x.id === editId) : null;
  document.getElementById('f-edit-id').value = f ? f.id : '';
  document.getElementById('modal-faccao-titulo').textContent = f ? `Editar Facção: ${f.nome}` : 'Nova Facção';
  document.getElementById('f-nome').value = f ? f.nome : '';
  document.getElementById('f-descricao').value = f ? (f.descricao || '') : '';
  document.getElementById('f-reputacao').value = f ? f.reputacao : 0;
  document.getElementById('modal-faccao').classList.remove('hidden');
}

function renderFaccoes() {
  const cfg = getSysConfig();
  const container = document.getElementById('grid-faccoes');
  container.innerHTML = '';

  const lista = state.faccoes.filter(pertenceAoContextoAtual);
  if (lista.length === 0) {
    container.innerHTML = `<p class="text-slate-500 text-sm italic col-span-3">Nenhuma facção cadastrada em ${cfg.nome} neste contexto.</p>`;
    return;
  }

  lista.forEach(f => {
    const card = document.createElement('div');
    card.className = 'bg-slate-900 text-slate-100 border border-slate-800 rounded-xl p-5 space-y-3 shadow-lg';
    card.innerHTML = `
      <div class="flex justify-between items-start gap-2">
        <h3 class="font-bold text-base">${esc(f.nome)}</h3>
        <div class="flex gap-1 shrink-0">
          <button onclick="openModalFaccao('${f.id}')" title="Editar facção" class="text-slate-400 hover:text-indigo-400 p-1 transition"><i data-lucide="pencil" class="w-4 h-4"></i></button>
          <button onclick="deletarFaccao('${f.id}')" title="Excluir facção" class="text-slate-500 hover:text-red-400 p-1 transition"><i data-lucide="trash" class="w-4 h-4"></i></button>
        </div>
      </div>
      <p class="text-xs text-slate-400">${esc(f.descricao)}</p>
      <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
        <span>Reputação: <strong class="text-indigo-400">${f.reputacao} pts</strong></span>
        <div class="flex gap-1">
          <button onclick="ajustarReputacaoFaccao('${f.id}', -5)" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold">-5</button>
          <button onclick="ajustarReputacaoFaccao('${f.id}', 5)" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold">+5</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

function ajustarReputacaoFaccao(id, delta) {
  const f = state.faccoes.find(x => x.id === id);
  if (!f) return;
  f.reputacao = Math.max(-100, Math.min(100, (f.reputacao || 0) + delta));
  saveState();
  renderFaccoes();
}

function deletarFaccao(id) {
  state.faccoes = state.faccoes.filter(f => f.id !== id);
  saveState();
  renderFaccoes();
  showToast('Facção removida.');
}

function salvarFaccao(e) {
  e.preventDefault();
  const editId = document.getElementById('f-edit-id').value;
  const dados = {
    id: editId || uid('fac'),
    sistema: state.sistemaAtivo,
    campanhaId: state.campanhaAtivaId,
    nome: document.getElementById('f-nome').value.trim(),
    descricao: document.getElementById('f-descricao').value.trim(),
    reputacao: parseInt(document.getElementById('f-reputacao').value, 10) || 0
  };

  if (editId) {
    const idx = state.faccoes.findIndex(x => x.id === editId);
    if (idx !== -1) state.faccoes[idx] = dados;
    showToast(`Facção ${dados.nome} atualizada!`);
  } else {
    state.faccoes.push(dados);
    showToast(`Facção ${dados.nome} adicionada!`);
  }

  saveState();
  renderFaccoes();
  closeModal('modal-faccao');
  document.getElementById('form-faccao').reset();
}

function rolarDados() {
  const qtd = parseInt(document.getElementById('dice-qtd').value, 10) || 1;
  const tipo = parseInt(document.getElementById('dice-tipo').value, 10) || 20;
  const mod = parseInt(document.getElementById('dice-mod').value, 10) || 0;

  let rolls = [];
  let sum = 0;
  for (let i = 0; i < qtd; i++) {
    let r = Math.floor(Math.random() * tipo) + 1;
    rolls.push(r);
    sum += r;
  }
  let total = sum + mod;

  const modStr = mod !== 0 ? (mod > 0 ? ` +${mod}` : ` ${mod}`) : '';
  const baseStr = `${qtd}d${tipo}${modStr}`;
  const resStr = `[${rolls.join(', ')}]${modStr}`;

  document.getElementById('dice-formula').innerText = `${baseStr} ➔ ${resStr}`;
  document.getElementById('dice-total').innerText = `TOTAL: ${total}`;
  document.getElementById('dice-result-area').classList.remove('hidden');

  window.lastRoll = { base: baseStr, total: total, detalhes: resStr };
}

function anotarRolagemEvento() {
  if (!window.lastRoll) return;
  openModalEvento();
  document.getElementById('e-titulo').value = `Rolagem (${getSysConfig().nome}): ${window.lastRoll.base} = ${window.lastRoll.total}`;
  document.getElementById('e-descricao').value = `Resultado detalhado dos dados: ${window.lastRoll.detalhes}`;
}

function renderEventos() {
  const cfg = getSysConfig();
  const container = document.getElementById('lista-eventos');
  const lista = state.eventos.filter(pertenceAoContextoAtual);

  container.innerHTML = lista.length === 0
    ? `<p class="text-sm text-slate-500 italic py-4">Nenhum evento registrado em ${cfg.nome} neste contexto.</p>`
    : '';

  lista.forEach(ev => {
    const item = document.createElement('div');
    item.className = 'bg-slate-900 text-slate-100 border border-slate-800 rounded-lg p-4 flex justify-between items-center gap-3 shadow';
    item.innerHTML = `
      <div>
        <h4 class="font-bold text-sm">${esc(ev.titulo)}</h4>
        <p class="text-xs text-slate-400">${esc(ev.descricao)}</p>
      </div>
      <button onclick="deletarEvento('${ev.id}')" class="text-slate-500 hover:text-red-400 p-1 transition shrink-0"><i data-lucide="trash" class="w-4 h-4"></i></button>
    `;
    container.appendChild(item);
  });
  lucide.createIcons();
}

function salvarEvento(e) {
  e.preventDefault();
  const novo = {
    id: uid('ev'),
    sistema: state.sistemaAtivo,
    campanhaId: state.campanhaAtivaId,
    titulo: document.getElementById('e-titulo').value.trim(),
    descricao: document.getElementById('e-descricao').value.trim()
  };
  state.eventos.push(novo);
  saveState();
  renderEventos();
  closeModal('modal-evento');
  document.getElementById('form-evento').reset();
  showToast('Evento registrado!');
}

function deletarEvento(id) {
  state.eventos = state.eventos.filter(ev => ev.id !== id);
  saveState();
  renderEventos();
  showToast('Evento removido.');
}

// ===================================================================
// 7. DOCUMENTOS DO MESTRE & BACKUP JSON
// ===================================================================
const DB_NAME = 'rpg_mestre_db', STORE = 'documentos';
const MIMES = { pdf: 'application/pdf', xls: 'application/vnd.ms-excel', xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' };

function dbOpen() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB_NAME, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: 'id' });
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function dbRun(mode, fn) {
  const db = await dbOpen();
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, mode);
    const req = fn(tx.objectStore(STORE));
    tx.oncomplete = () => res(req ? req.result : undefined);
    tx.onerror = () => rej(tx.error);
  });
}
const docsAll = () => dbRun('readonly', st => st.getAll());

function fmtTamanho(b) {
  return b < 1024 * 1024 ? (b / 1024).toFixed(0) + ' KB' : (b / 1024 / 1024).toFixed(1) + ' MB';
}

async function uploadDocs(files) {
  let ok = 0;
  for (const f of Array.from(files)) {
    const ext = f.name.split('.').pop().toLowerCase();
    if (!MIMES[ext]) { showToast(`"${f.name}" não é PDF/XLS/XLSX.`, 'error'); continue; }
    try {
      await dbRun('readwrite', st => st.put({
        id: uid('doc'),
        nome: f.name, ext, tamanho: f.size, data: new Date().toISOString(),
        sistema: state.sistemaAtivo,
        campanhaId: state.campanhaAtivaId,
        blob: f.slice(0, f.size, MIMES[ext])
      }));
      ok++;
    } catch (err) { showToast(`Erro ao salvar "${f.name}".`, 'error'); }
  }
  if (ok) showToast(`${ok} documento(s) salvo(s)!`);
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
  renderMestre();
}

async function renderMestre() {
  const cfg = getSysConfig();
  const box = document.getElementById('lista-docs');
  let docs = [];
  try {
    docs = (await docsAll()).filter(d => (d.sistema || 'ordem_paranormal') === state.sistemaAtivo && (d.campanhaId || '') === state.campanhaAtivaId);
  } catch (e) {}
  docs.sort((a, b) => b.data.localeCompare(a.data));
  if (!docs.length) {
    box.innerHTML = `<p class="text-slate-500 text-sm italic col-span-3">Nenhum documento cadastrado em ${cfg.nome} neste contexto.</p>`;
    return;
  }
  box.innerHTML = docs.map(d => {
    const pdf = d.ext === 'pdf';
    return `<div class="bg-slate-900 text-slate-100 border border-slate-800 rounded-xl p-4 space-y-3 shadow-lg">
      <div class="flex items-start gap-3">
        <div class="p-2 rounded-lg ${pdf ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}"><i data-lucide="${pdf ? 'file-text' : 'file-spreadsheet'}" class="w-5 h-5"></i></div>
        <div class="min-w-0 flex-1">
          <h3 class="font-bold text-sm truncate" title="${esc(d.nome)}">${esc(d.nome)}</h3>
          <p class="text-xs text-slate-400">${d.ext.toUpperCase()} · ${fmtTamanho(d.tamanho)} · ${new Date(d.data).toLocaleDateString('pt-BR')}</p>
        </div>
      </div>
      <div class="flex justify-end gap-2 pt-2 border-t border-slate-800 text-xs">
        ${pdf ? `<button onclick="abrirDoc('${d.id}')" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 flex items-center gap-1"><i data-lucide="eye" class="w-3 h-3"></i>Abrir</button>` : ''}
        <button onclick="baixarDoc('${d.id}')" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 flex items-center gap-1"><i data-lucide="download" class="w-3 h-3"></i>Baixar</button>
        <button onclick="excluirDoc('${d.id}')" class="text-slate-500 hover:text-red-400 p-1 transition" title="Excluir"><i data-lucide="trash" class="w-4 h-4"></i></button>
      </div>
    </div>`;
  }).join('');
  lucide.createIcons();
}

async function pegarDoc(id) { return dbRun('readonly', st => st.get(id)); }
async function abrirDoc(id) {
  const d = await pegarDoc(id); if (!d) return;
  window.open(URL.createObjectURL(d.blob), '_blank');
}
async function baixarDoc(id) {
  const d = await pegarDoc(id); if (!d) return;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(d.blob); a.download = d.nome;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 10000);
}
async function excluirDoc(id) {
  await dbRun('readwrite', st => st.delete(id));
  renderMestre();
  showToast('Documento removido.');
}
async function excluirDocsDaCampanha(cid) {
  const docs = (await docsAll()).filter(d => (d.campanhaId || '') === cid);
  for (const d of docs) await dbRun('readwrite', st => st.delete(d.id));
}

function exportarBackupJSON() {
  const payload = {
    versao: 2,
    exportadoEm: new Date().toISOString(),
    dados: state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `rpg-campaign-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  showToast('Backup JSON exportado!');
}

function importarBackupJSON(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const parsed = JSON.parse(ev.target.result);
      const dados = parsed.dados || parsed;
      if (!Array.isArray(dados.campanhas) || !Array.isArray(dados.personagens)) {
        throw new Error('Formato inválido');
      }
      state.campanhas = dados.campanhas.filter(c => SYSTEM_CONFIG[c.sistema]);
      state.personagens = dados.personagens || [];
      state.criaturas = dados.criaturas || [];
      state.faccoes = dados.faccoes || [];
      state.eventos = dados.eventos || [];
      state.sistemaAtivo = SYSTEM_CONFIG[dados.sistemaAtivo] ? dados.sistemaAtivo : 'ordem_paranormal';
      state.campanhaAtivaId = dados.campanhaAtivaId || '';
      saveState();
      trocarSistema(state.sistemaAtivo, state.campanhaAtivaId);
      showToast('Backup restaurado com sucesso!');
    } catch (err) {
      showToast('Arquivo de backup inválido.', 'error');
    }
  };
  reader.readAsText(file);
}

// ===================================================================
// 8. UI GERAL, LOGIN, TEMA E ABAS
// ===================================================================
function showToast(mensagem, tipo = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const bg = tipo === 'success' ? 'bg-emerald-600' : 'bg-red-600';

  toast.className = `${bg} text-white text-xs px-4 py-3 rounded-lg shadow-lg flex items-center justify-between transition-all duration-300 opacity-0 transform translate-y-2 pointer-events-auto`;
  toast.innerHTML = `<span>${esc(mensagem)}</span>`;

  container.appendChild(toast);
  setTimeout(() => toast.classList.remove('opacity-0', 'translate-y-2'), 10);
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function realizarLogin(e) {
  e.preventDefault();
  const usr = document.getElementById('login-usuario').value.trim();
  const pwd = document.getElementById('login-senha').value.trim();
  const errorEl = document.getElementById('login-error');

  if (!usr || !pwd) {
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  document.getElementById('login-screen').classList.add('hidden');
  showToast('Login realizado com sucesso!');
}

function toggleDarkMode() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('darkModeToggle');
  const handle = document.getElementById('darkModeToggleHandle');
  const label = document.getElementById('theme-label');

  if (html.classList.contains('light')) {
    html.classList.remove('light');
    html.classList.add('dark');
    toggleBtn.classList.remove('bg-slate-300');
    toggleBtn.classList.add('bg-indigo-600');
    handle.classList.remove('translate-x-0');
    handle.classList.add('translate-x-5');
    label.innerText = 'Modo Escuro';
    localStorage.setItem('rpg_theme', 'dark');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
    toggleBtn.classList.remove('bg-indigo-600');
    toggleBtn.classList.add('bg-slate-300');
    handle.classList.remove('translate-x-5');
    handle.classList.add('translate-x-0');
    label.innerText = 'Modo Claro';
    localStorage.setItem('rpg_theme', 'light');
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('rpg_theme');
  const html = document.documentElement;
  if (savedTheme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    const toggleBtn = document.getElementById('darkModeToggle');
    const handle = document.getElementById('darkModeToggleHandle');
    const label = document.getElementById('theme-label');
    if (toggleBtn) {
      toggleBtn.classList.remove('bg-indigo-600');
      toggleBtn.classList.add('bg-slate-300');
      handle.classList.remove('translate-x-5');
      handle.classList.add('translate-x-0');
      label.innerText = 'Modo Claro';
    }
  } else {
    html.classList.add('dark');
    html.classList.remove('light');
  }
}

function switchTab(tabId) {
  ['personagens', 'criaturas', 'faccoes', 'eventos', 'mestre'].forEach(t => {
    document.getElementById(`view-${t}`).classList.add('hidden');
    const btn = document.getElementById(`tab-btn-${t}`);
    btn.classList.remove('bg-indigo-600', 'text-white');
    btn.classList.add('text-slate-400', 'hover:text-slate-200', 'hover:bg-slate-800');
  });

  document.getElementById(`view-${tabId}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`tab-btn-${tabId}`);
  activeBtn.classList.remove('text-slate-400', 'hover:text-slate-200', 'hover:bg-slate-800');
  activeBtn.classList.add('bg-indigo-600', 'text-white');
}

function openModalEvento() { document.getElementById('modal-evento').classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

(() => {
  const dz = document.getElementById('dropzone');
  ['dragenter', 'dragover'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('border-indigo-500'); }));
  ['dragleave', 'drop'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove('border-indigo-500'); }));
  dz.addEventListener('drop', e => uploadDocs(e.dataTransfer.files));
})();

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  aplicarIdentidadeSistema();
  atualizarFiltrosCriaturas();
  renderCampanhas();
  renderPersonagens();
  renderCriaturas();
  renderFaccoes();
  renderEventos();
  renderMestre();
  atualizarContadoresAbas();
  lucide.createIcons();
});

// ===================================================================
// BLOCO 2 (UNIFICADO) — GUILDAS + MISSÕES + GAVETA + FIM DE COMBATE/XP + DADOS NO COMBATE
// Colar DEPOIS do bloco 1 (fim do script.js). Substitui o bloco 2 e o bloco 3 antigos.
// ===================================================================
(() => {
  // ---------- Facção → Guilda ----------
  const ren = s => s.replace(/Facções/g, 'Guildas').replace(/Facção/g, 'Guilda')
    .replace(/facções/g, 'guildas').replace(/facção/g, 'guilda')
    .replace(/FACÇÕES/g, 'GUILDAS').replace(/FACÇÃO/g, 'GUILDA');
  const SKIP = /^(SCRIPT|STYLE|TEXTAREA)$/;
  const guilda = n => {
    if (!n) return;
    if (n.nodeType === 3) { if (!SKIP.test(n.parentNode ? n.parentNode.nodeName : '')) { const v = ren(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; } return; }
    if (n.nodeType !== 1) return;
    const w = document.createTreeWalker(n, NodeFilter.SHOW_TEXT); let t;
    while ((t = w.nextNode())) { if (SKIP.test(t.parentNode.nodeName)) continue; const v = ren(t.nodeValue); if (v !== t.nodeValue) t.nodeValue = v; }
    n.querySelectorAll('[title],[placeholder]').forEach(el => ['title', 'placeholder'].forEach(a => { const x = el.getAttribute(a); if (x && ren(x) !== x) el.setAttribute(a, ren(x)); }));
  };
  guilda(document.body);
  new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(guilda))).observe(document.body, { childList: true, subtree: true });
  window.addEventListener('load', () => guilda(document.body));

  // ---------- Trava de nível mínimo/máximo de cada sistema (vale para qualquer tela) ----------
  const oSave = saveState;
  window.saveState = function () {
    state.personagens.forEach(p => {
      const c = SYSTEM_CONFIG[p.sistema] && SYSTEM_CONFIG[p.sistema].personagem; if (!c) return;
      p.progresso = Math.max(c.progMin, Math.min(c.progMax, parseInt(p.progresso, 10) || c.progMin));
    });
    return oSave.apply(this, arguments);
  };

  // ---------- Biblioteca: só materiais com origem verificada ----------
  const BIB = {
    dnd: [
      { t: 'A Most Potent Brew', n: 'Nível 1 (one-shot)', d: 'Aventura clássica de iniciantes: expulsar ratos gigantes da adega de uma cervejaria de mago. Usa apenas as Regras Básicas gratuitas.', f: 'Comunidade D&D 5e (gratuita)', u: 'https://adventurelookup.com/adventures/a-most-potent-brew' },
      { t: 'Hoard of the Dragon Queen (kit D&D Encounters)', n: 'Níveis iniciais', d: 'Capítulos iniciais da saga Tyranny of Dragons, distribuídos gratuitamente pela Wizards of the Coast.', f: 'Wizards of the Coast (o link é um guia que indica o download)', u: 'https://www.wargamer.com/dnd/campaigns' }
    ],
    ordem_paranormal: [
      { t: 'O Pântano Afogado (Playtest 2 de Ordem Paranormal RPG 2)', n: 'Playtest da 2ª edição (veja o NEX no PDF)', d: 'Aventura incluída no segundo playtest gratuito, com novas regras de combate.', f: 'Jambô Editora', u: 'https://jogaod20.com/2026/11/08/ordem-paranormal-ii-beta/' },
      { t: 'Manual do Investigador Independente', n: 'Aventura pronta (veja o NEX no PDF)', d: 'Suplemento NÃO oficial com uma aventura pronta e criaturas novas. Confira o preço na página.', f: 'Jxz8 (fã, não oficial)', u: 'https://jxz8.itch.io/manualdoinvestigadorindependente' }
    ],
    tormenta20: [
      { t: 'Aventuras Breves 02 — Capturados Pelos Puristas', n: 'Nível 1 (leva ao 2)', d: 'Os heróis estão presos pelos puristas e precisam escapar. Traz personagens prontos.', f: 'Daniel Duran / Jambô Editora', u: 'https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/Tormenta20_-_Aventuras_Breves_-_02_-_Capturados_Pelos_Puristas.pdf' },
      { t: 'Nos Campos de Calêndula', n: 'Nível 3 (4 personagens)', d: 'One-shot NÃO oficial de fantasia sombria, no Mundo de Vordel.', f: 'flamereaper (não oficial, itch.io)', u: 'https://flamereaper.itch.io/nos-campos-de-calendula' }
    ]
  };
  const GAN = { // ideias originais, sem material de terceiros
    dnd: [
      { t: 'A Cripta sob a Taverna', d: 'Barulhos vêm do porão da taverna. Ao descer, o grupo encontra uma cripta esquecida e um morador que ninguém viu entrar.' },
      { t: 'A Caravana Desaparecida', d: 'Uma caravana de mercadores sumiu na estrada. Só o carroceiro voltou, sem lembrar de nada.' }
    ],
    ordem_paranormal: [
      { t: 'O Prédio Sem Andar 13', n: 'NEX inicial', d: 'Moradores juram que o elevador para num andar que não existe. Uma investigação de campo para novos agentes.' },
      { t: 'A Fita do Último Plantão', d: 'Uma fita de segurança mostra um vigia conversando com alguém que a câmera não registra.' }
    ],
    tormenta20: [
      { t: 'O Mercado das Máscaras', d: 'Em um festival, comerciantes vendem máscaras que parecem ter vontade própria. Alguém quer reuni-las todas.' },
      { t: 'A Ponte do Troll Cobrador', d: 'Uma ponte cobra pedágio em favores, não em moedas. Quem recusa passa a ser seguido.' }
    ]
  };

  // ---------- Armazenamento (chave própria, por sistema + campanha) ----------
  const KEY = 'rpg_missoes';
  let M; try { M = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { M = {}; }
  const gv = () => localStorage.setItem(KEY, JSON.stringify(M));
  const ctx = () => `${state.sistemaAtivo}|${state.campanhaAtivaId}`;
  const L = () => M[ctx()] || (M[ctx()] = []);
  const fx = m => { if (m) { m.lore ??= ''; m.xp ??= ''; m.itens ??= ''; m.jog ??= []; m.npcs ??= []; m.mons ??= []; } return m; };
  const achar = id => fx(L().find(m => m.id === id));
  const nova = (t, d, tipo, origem) => fx({ id: uid('miss'), titulo: t, descricao: d, tipo, status: 'andamento', objetivos: [], notas: '', origem: origem || 'Própria' });
  const comb = () => { try { return (JSON.parse(localStorage.getItem('rpg_combate')) || {})[ctx()] || { monstros: [], npcs: [], removidos: [] }; } catch (e) { return { monstros: [], npcs: [], removidos: [] }; } };
  const ST = { andamento: 'Em andamento', concluida: 'Concluída', arquivada: 'Arquivada' };
  const FILTROS = [['todas', 'Todas'], ['principal', 'Principais'], ['opcional', 'Opcionais'], ['andamento', 'Em andamento'], ['concluida', 'Concluídas'], ['arquivada', 'Arquivadas']];
  let filtro = 'todas', gid = null, ativa = null;
  const bt = 'px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs';
  const inp = 'w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100';

  // ---------- Tabelas do SRD 5.1 (D&D): XP por ND e XP por nível ----------
  const XPCR = { '0': 10, '1/8': 25, '1/4': 50, '1/2': 100, '1': 200, '2': 450, '3': 700, '4': 1100, '5': 1800, '6': 2300, '7': 2900, '8': 3900, '9': 5000, '10': 5900, '11': 7200, '12': 8400, '13': 10000, '14': 11500, '15': 13000, '16': 15000, '17': 18000, '18': 20000, '19': 22000, '20': 25000, '21': 33000, '22': 41000, '23': 50000, '24': 62000, '25': 75000, '26': 90000, '27': 105000, '28': 120000, '29': 135000, '30': 155000 };
  const XPLV = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
  const nivelXP = xp => { let l = 1; XPLV.forEach((v, i) => { if (xp >= v) l = i + 1; }); return l; };
  const nd2xp = nd => { const k = String(nd).trim().replace(',', '.'); return XPCR[{ '0.125': '1/8', '0.25': '1/4', '0.5': '1/2' }[k] || k] || 0; };
  const sugXP = m => state.sistemaAtivo !== 'dnd' ? 0 : m.mons.reduce((t, id) => { const c = state.criaturas.find(x => x.id === id); return t + (c ? nd2xp(c.nd) : 0); }, 0);
  const rotXP = () => ({ dnd: 'XP total da missão (dividido entre os jogadores)', ordem_paranormal: 'NEX a ganhar por jogador (%, ex.: 5)', tormenta20: 'Níveis a ganhar por jogador' }[state.sistemaAtivo]);
  const notaNivel = (s, a, n) => {
    if (n <= a) return '';
    if (s === 'dnd') { const asi = [4, 8, 12, 16, 19].filter(l => l > a && l <= n); return `Bônus de proficiência agora +${2 + Math.floor((n - 1) / 4)}.` + (asi.length ? ` Aumento de atributo no(s) nível(is) ${asi.join(', ')} (maioria das classes).` : '') + ' Atualize PV e espaços de magia da classe.'; }
    if (s === 'ordem_paranormal') { const at = [20, 50, 80, 95].filter(l => l > a && l <= n); return (at.length ? `NEX ${at.join('%, ')}%: aumento de atributo (confira o livro). ` : '') + 'Atualize PV, PE e SAN conforme a classe.'; }
    return (Math.floor(n / 4) > Math.floor(a / 4) ? 'Há aumento de atributo a cada 4 níveis (confira o livro). ' : '') + 'Atualize PV e PM conforme a classe.';
  };

  // ---------- Área do Mestre: biblioteca + gerenciador ----------
  const sec = document.createElement('div');
  sec.id = 'missoes-mestre'; sec.className = 'space-y-5';
  sec.innerHTML = '<div id="miss-bib" class="space-y-3"></div><div id="miss-ger" class="space-y-3"></div>';
  document.getElementById('view-mestre').appendChild(sec);

  const cardBib = (x, i, src) => `<div class="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
    <h4 class="font-bold text-sm">${esc(x.t)}</h4>
    ${x.n ? `<p class="text-[11px] text-indigo-400">${esc(x.n)}</p>` : ''}
    <p class="text-xs text-slate-300">${esc(x.d)}</p>
    ${x.f ? `<p class="text-[11px] text-slate-400">Fonte: ${esc(x.f)}</p>` : ''}
    ${x.u ? `<a href="${esc(x.u)}" target="_blank" rel="noopener noreferrer" class="text-[11px] text-indigo-400 underline">Abrir material original</a>` : ''}
    <div class="flex gap-2 pt-1"><button onclick="missAdd('${src}',${i},'principal')" class="${bt}">Missão principal</button><button onclick="missAdd('${src}',${i},'opcional')" class="${bt}">Missão opcional</button></div></div>`;

  function renderBib() {
    const s = state.sistemaAtivo, nome = getSysConfig().nome;
    document.getElementById('miss-bib').innerHTML = `
      <h3 class="text-lg font-bold">Missões e Aventuras — ${nome}</h3>
      <details open><summary class="cursor-pointer text-sm font-semibold text-indigo-400">Biblioteca gratuita (origem verificada)</summary>
        <p class="text-[11px] text-slate-500 my-2">Links levam ao material original; confira a licença e o preço na página de cada autor.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${(BIB[s] || []).map((x, i) => cardBib(x, i, 'bib')).join('')}</div></details>
      <details><summary class="cursor-pointer text-sm font-semibold text-indigo-400">Ganchos iniciais (ideias originais)</summary>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">${(GAN[s] || []).map((x, i) => cardBib(x, i, 'gan')).join('')}</div></details>`;
  }

  const cardM = m => `<div class="bg-slate-900 border ${m.tipo === 'principal' ? 'border-indigo-500/50' : 'border-slate-800'} rounded-xl p-4 space-y-2 ${m.status === 'arquivada' ? 'opacity-60' : ''}">
    <div class="flex flex-wrap items-center gap-1.5">
      <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase ${m.tipo === 'principal' ? 'bg-indigo-500/15 text-indigo-300' : 'bg-slate-800 text-slate-300'}">${m.tipo === 'principal' ? 'Principal' : 'Opcional'}</span>
      <span class="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">${ST[m.status] || m.status}</span></div>
    <h4 class="font-bold text-sm">${esc(m.titulo)}</h4>
    <p class="text-xs text-slate-300">${esc(m.descricao)}</p>
    ${m.objetivos.map((o, k) => `<label class="flex items-center gap-2 text-xs text-slate-300"><input type="checkbox" ${o.ok ? 'checked' : ''} onchange="missObj('${m.id}',${k})">${esc(o.t)}</label>`).join('')}
    ${m.notas ? `<p class="text-[11px] text-slate-400 border-t border-slate-800 pt-1">Notas: ${esc(m.notas)}</p>` : ''}
    <div class="flex flex-wrap gap-1.5 pt-1">
      <button onclick="gavetaAbrir('${m.id}')" class="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold">Abrir missão</button>
      <select onchange="missStatus('${m.id}',this.value)" class="bg-slate-800 border border-slate-700 rounded text-xs px-1.5 py-1 text-slate-200">${Object.entries(ST).map(([k, v]) => `<option value="${k}" ${k === m.status ? 'selected' : ''}>${v}</option>`).join('')}</select>
      <button onclick="missEdit('${m.id}')" class="${bt}">Editar</button>
      <button onclick="missObjAdd('${m.id}')" class="${bt}">+ Objetivo</button>
      <button onclick="missNota('${m.id}')" class="${bt}">Notas</button>
      <button onclick="missTipo('${m.id}')" class="${bt}">${m.tipo === 'principal' ? 'Tornar opcional' : 'Tornar principal'}</button>
      <button onclick="missDel('${m.id}')" class="${bt} hover:text-red-400">Remover</button></div></div>`;

  function renderGer() {
    const lista = L().map(fx).filter(m => filtro === 'todas' || filtro === m.tipo || filtro === m.status);
    document.getElementById('miss-ger').innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2">
        <h3 class="text-lg font-bold">Gerenciador de Missões</h3>
        <div class="flex gap-2"><select onchange="missFiltro(this.value)" class="bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-slate-200">${FILTROS.map(([k, v]) => `<option value="${k}" ${k === filtro ? 'selected' : ''}>${v}</option>`).join('')}</select>
        <button onclick="missNova()" class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-medium">+ Missão própria</button></div></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${lista.map(cardM).join('') || '<p class="text-xs text-slate-500 italic">Nenhuma missão neste filtro.</p>'}</div>`;
  }
  const render = () => { renderBib(); renderGer(); };

  window.missFiltro = v => { filtro = v; renderGer(); };
  window.missAdd = (src, i, tipo) => {
    const x = (src === 'bib' ? BIB : GAN)[state.sistemaAtivo][i]; if (!x) return;
    L().push(nova(x.t, x.d, tipo, x.f || 'Gancho original')); gv();
    if (tipo === 'principal') { // missão principal também entra no histórico de Eventos
      state.eventos.push({ id: uid('ev'), sistema: state.sistemaAtivo, campanhaId: state.campanhaAtivaId, titulo: `Missão principal: ${x.t}`, descricao: x.d });
      saveState(); renderEventos();
    }
    renderGer(); showToast(`"${x.t}" adicionada como missão ${tipo}.`);
  };
  window.missNova = () => {
    const t = (prompt('Título da missão:') || '').trim(); if (!t) return;
    const d = (prompt('Descrição:') || '').trim();
    L().push(nova(t, d, confirm('OK = missão principal\nCancelar = missão opcional') ? 'principal' : 'opcional')); gv(); renderGer();
  };
  window.missStatus = (id, v) => { const m = achar(id); if (m) { m.status = v; gv(); renderGer(); } };
  window.missTipo = id => { const m = achar(id); if (m) { m.tipo = m.tipo === 'principal' ? 'opcional' : 'principal'; gv(); renderGer(); } };
  window.missEdit = id => {
    const m = achar(id); if (!m) return;
    const t = prompt('Título:', m.titulo); if (t === null) return;
    const d = prompt('Descrição:', m.descricao); if (d === null) return;
    m.titulo = t.trim() || m.titulo; m.descricao = d.trim(); gv(); renderGer();
  };
  window.missNota = id => { const m = achar(id); if (!m) return; const n = prompt('Notas da missão:', m.notas); if (n !== null) { m.notas = n.trim(); gv(); renderGer(); } };
  window.missObjAdd = id => { const m = achar(id); if (!m) return; const t = (prompt('Novo objetivo:') || '').trim(); if (t) { m.objetivos.push({ t, ok: false }); gv(); renderGer(); } };
  window.missObj = (id, k) => { const m = achar(id); if (m && m.objetivos[k]) { m.objetivos[k].ok = !m.objetivos[k].ok; gv(); } };
  window.missDel = id => { M[ctx()] = L().filter(m => m.id !== id); gv(); renderGer(); showToast('Missão removida.'); };

  // ---------- Menu lateral (gaveta) da missão ----------
  const ov = document.createElement('div');
  ov.id = 'gaveta'; ov.className = 'fixed inset-0 z-50 hidden';
  ov.innerHTML = '<div class="absolute inset-0 bg-slate-950/70" onclick="gavetaFechar()"></div><aside id="gaveta-p" class="absolute right-0 top-0 h-full w-full max-w-md bg-slate-900 text-slate-100 border-l border-slate-800 shadow-2xl overflow-y-auto p-5 space-y-4 transition-transform duration-300 translate-x-full"></aside>';
  document.body.appendChild(ov);
  const H = t => `<h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400 pt-2">${t}</h4>`;

  function renderG() {
    const m = achar(gid), p = document.getElementById('gaveta-p');
    if (!m) { gavetaFechar(); return; }
    const pers = state.personagens.filter(pertenceAoContextoAtual), crs = state.criaturas.filter(pertenceAoContextoAtual), sug = sugXP(m);
    p.innerHTML = `
      <div class="flex justify-between items-start gap-2"><div><h3 class="font-bold text-lg">${esc(m.titulo)}</h3>
        <p class="text-[11px] text-slate-400">${m.tipo === 'principal' ? 'Missão principal' : 'Missão opcional'} · ${ST[m.status] || m.status}</p></div>
        <button onclick="gavetaFechar()" class="text-slate-400 hover:text-white text-xl leading-none">×</button></div>
      ${H('Lore')}<p class="text-xs text-slate-300">${esc(m.descricao)}</p>
      <textarea rows="4" placeholder="Lore detalhada, segredos, ganchos..." class="${inp}" oninput="gSet('lore',this.value)">${esc(m.lore)}</textarea>
      ${H('Objetivos')}${m.objetivos.map((o, k) => `<label class="flex items-center gap-2 text-xs"><input type="checkbox" ${o.ok ? 'checked' : ''} onchange="missObj('${m.id}',${k})">${esc(o.t)}</label>`).join('') || '<p class="text-xs text-slate-500 italic">Sem objetivos.</p>'}
      <button onclick="gObjAdd()" class="${bt}">+ Objetivo</button>
      ${H('Recompensas')}<label class="block text-[11px] text-slate-400">${rotXP()}</label>
      <input type="number" min="0" value="${esc(m.xp)}" placeholder="${sug ? 'Sugerido pelo livro: ' + sug : 'Defina o valor'}" class="${inp}" oninput="gSet('xp',this.value)">
      ${sug ? `<p class="text-[11px] text-slate-500">Sugestão (SRD) somando o ND dos monstros: ${sug} XP. Deixe vazio para usar os monstros derrotados.</p>` : ''}
      <textarea rows="2" placeholder="Itens, ouro e outras recompensas..." class="${inp}" oninput="gSet('itens',this.value)">${esc(m.itens)}</textarea>
      ${H('Jogadores na missão')}${pers.map(q => `<label class="flex items-center gap-2 text-xs"><input type="checkbox" ${m.jog.includes(q.id) ? 'checked' : ''} onchange="gJog('${q.id}')">${esc(q.nome)} <span class="text-slate-500">${esc(q.classe)}</span></label>`).join('') || '<p class="text-xs text-slate-500 italic">Nenhum personagem neste contexto.</p>'}
      ${H('NPCs')}${m.npcs.map((n, k) => `<div class="flex justify-between text-xs"><span>${esc(n.nome)} · PV ${n.pv} · Def ${n.defesa}</span><button onclick="gNpcDel(${k})" class="text-slate-500 hover:text-red-400">remover</button></div>`).join('')}
      <button onclick="gNpc()" class="${bt}">+ NPC</button>
      ${H('Monstros')}${m.mons.map((id, k) => { const c = state.criaturas.find(x => x.id === id); return `<div class="flex justify-between text-xs"><span>${esc(c ? c.nome : '(removida do bestiário)')}${c ? ' · ND ' + esc(c.nd) : ''}</span><button onclick="gMonDel(${k})" class="text-slate-500 hover:text-red-400">remover</button></div>`; }).join('')}
      ${crs.length ? `<div class="flex gap-2"><select id="g-mon" class="${inp}">${crs.map(c => `<option value="${c.id}">${esc(c.nome)} (ND ${esc(c.nd)})</option>`).join('')}</select><button onclick="gMon()" class="${bt}">Adicionar</button></div>` : '<p class="text-xs text-slate-500 italic">Cadastre criaturas no Bestiário para usá-las aqui.</p>'}
      <div class="border-t border-slate-800 pt-3 space-y-2">
        <p class="text-xs text-slate-400">${m.jog.length || pers.length} jogador(es) · ${m.npcs.length} NPC(s) · ${m.mons.length} monstro(s)</p>
        <button onclick="gCombate()" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-sm">Combate</button>
        <button onclick="gFim('${m.id}')" class="${bt} w-full py-2">Finalizar combate e recompensas</button></div>`;
  }
  window.gavetaAbrir = id => { gid = id; renderG(); ov.classList.remove('hidden'); requestAnimationFrame(() => document.getElementById('gaveta-p').classList.remove('translate-x-full')); };
  window.gavetaFechar = () => { document.getElementById('gaveta-p').classList.add('translate-x-full'); setTimeout(() => ov.classList.add('hidden'), 300); };
  window.gSet = (k, v) => { const m = achar(gid); if (m) { m[k] = v; gv(); } };
  window.gObjAdd = () => { missObjAdd(gid); renderG(); };
  window.gJog = id => { const m = achar(gid), i = m.jog.indexOf(id); if (i < 0) m.jog.push(id); else m.jog.splice(i, 1); gv(); renderG(); };
  window.gNpc = () => {
    const nome = (prompt('Nome do NPC:') || '').trim(); if (!nome) return;
    achar(gid).npcs.push({ nome, pv: parseInt(prompt('PV máximo:', '10'), 10) || 10, defesa: parseInt(prompt('Defesa/CA:', '10'), 10) || 10 }); gv(); renderG();
  };
  window.gNpcDel = k => { achar(gid).npcs.splice(k, 1); gv(); renderG(); };
  window.gMon = () => { const s = document.getElementById('g-mon'); if (s && s.value) { achar(gid).mons.push(s.value); gv(); renderG(); } };
  window.gMonDel = k => { achar(gid).mons.splice(k, 1); gv(); renderG(); };

  // Envia jogadores, NPCs e monstros da missão para a tela de Combate (a mesma do bloco 1)
  const injetaNPC = n => { const op = window.prompt, r = [n.nome, String(n.pv), String(n.defesa)]; let i = 0; window.prompt = () => r[i++]; try { combAddNPC(); } finally { window.prompt = op; } };
  window.gCombate = () => {
    const m = achar(gid); if (!m) return;
    combRestaurar();
    if (m.jog.length) state.personagens.filter(pertenceAoContextoAtual).forEach(p => { if (!m.jog.includes(p.id)) combRemover('p', p.id); });
    const c = comb(); c.monstros.forEach(x => combRemover('m', x.iid)); c.npcs.forEach(x => combRemover('n', x.iid));
    m.mons.forEach(cid => addMonstroCombate(cid));
    m.npcs.forEach(injetaNPC);
    ativa = gid; gavetaFechar(); abrirCombate();
  };

  // ---------- Fim do combate: XP, recompensas e evolução ----------
  const fim = document.createElement('div');
  fim.id = 'fim-combate'; fim.className = 'fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 hidden';
  document.body.appendChild(fim);
  window.fimFechar = () => fim.classList.add('hidden');
  window.gFim = id => {
    id = (typeof id === 'string' && id) || ativa;
    const m = id ? achar(id) : null, c = comb(), s = state.sistemaAtivo, pc = getSysConfig().personagem;
    const der = c.monstros.filter(x => x.pv <= 0);
    const pers = state.personagens.filter(pertenceAoContextoAtual).filter(p => !c.removidos.includes(p.id));
    const xpDer = s === 'dnd' ? der.reduce((t, x) => t + nd2xp(x.nd), 0) : 0;
    const xpDef = m && m.xp !== '' ? m.xp : (xpDer || '');
    fim.innerHTML = `<div class="bg-slate-900 text-slate-100 border border-slate-800 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl p-6 space-y-3 shadow-2xl">
      <div class="flex justify-between"><h3 class="font-bold text-lg">Fim do combate${m ? ' — ' + esc(m.titulo) : ''}</h3><button onclick="fimFechar()" class="text-slate-400 hover:text-white text-xl leading-none">×</button></div>
      <p class="text-xs text-slate-400">Monstros derrotados: ${der.length}/${c.monstros.length}${der.length ? ' — ' + esc(der.map(x => x.nome).join(', ')) : ''}</p>
      <div id="fim-corpo" class="space-y-3">
        <label class="block text-xs text-slate-400">${rotXP()}</label>
        <input type="number" min="0" id="fim-xp" value="${esc(xpDef)}" class="${inp}">
        ${s === 'dnd' ? `<p class="text-[11px] text-slate-500">Sugestão do SRD pelos derrotados: ${xpDer} XP. Você pode alterar.</p>` : '<p class="text-[11px] text-slate-500">Este sistema não tem tabela de XP embutida aqui: o valor é definido por você (livro ou mestre).</p>'}
        ${m && m.itens ? `<p class="text-xs"><strong class="text-indigo-400">Recompensas da missão:</strong> ${esc(m.itens)}</p>` : ''}
        <p class="text-xs font-semibold text-slate-300">Quem recebe:</p>
        ${pers.map(p => `<label class="flex items-center gap-2 text-xs"><input type="checkbox" name="fim-p" value="${p.id}" checked>${esc(p.nome)} <span class="text-slate-500">${pc.progLabel} ${p.progresso}${pc.progUnit}</span></label>`).join('') || '<p class="text-xs text-slate-500 italic">Nenhum personagem no combate.</p>'}
        <button onclick="gAplicar()" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-sm">Aplicar recompensas e evoluir</button></div></div>`;
    fim.classList.remove('hidden');
  };
  window.gAplicar = () => {
    const v = Math.max(0, parseInt(document.getElementById('fim-xp').value, 10) || 0), s = state.sistemaAtivo, c = SYSTEM_CONFIG[s].personagem;
    const marcados = [...document.querySelectorAll('input[name=fim-p]:checked')].map(i => i.value);
    const alvos = state.personagens.filter(p => marcados.includes(p.id));
    const parte = s === 'dnd' ? Math.floor(v / (alvos.length || 1)) : v;
    const linhas = alvos.map(p => {
      const ant = p.progresso;
      if (s === 'dnd') { p.xp = Math.max(p.xp || 0, XPLV[ant - 1] || 0) + parte; p.progresso = Math.min(c.progMax, Math.max(ant, nivelXP(p.xp))); }
      else p.progresso = Math.min(c.progMax, ant + parte);
      return { p, ant, novo: p.progresso };
    });
    saveState(); renderPersonagens();
    document.getElementById('fim-corpo').innerHTML = `<p class="text-sm font-semibold text-emerald-400">Recompensas aplicadas${s === 'dnd' ? ` (${parte} XP para cada)` : ''}.</p>` +
      linhas.map(({ p, ant, novo }) => `<div class="bg-slate-800/60 border border-slate-700 rounded-lg p-3 text-xs space-y-1">
        <div class="flex justify-between"><strong>${esc(p.nome)}</strong><span>${c.progLabel} ${ant}${c.progUnit} ➔ ${novo}${c.progUnit}${novo >= c.progMax ? ' (máximo)' : ''}${s === 'dnd' ? ` · ${p.xp} XP` : ''}</span></div>
        ${novo > ant ? `<p class="text-slate-400">${esc(notaNivel(s, ant, novo))}</p><button onclick="fimFechar();openModalPersonagem('${p.id}')" class="${bt}">Editar ficha</button>` : ''}</div>`).join('');
  };

  // ---------- Atualiza ao trocar sistema/campanha; exclusão e backup ----------
  const oRM = renderMestre;
  window.renderMestre = function () { render(); return oRM.apply(this, arguments); };
  const oDel = deletarCampanha;
  window.deletarCampanha = function () {
    const cid = state.campanhaAtivaId;
    if (cid) { Object.keys(M).filter(k => k.endsWith('|' + cid)).forEach(k => delete M[k]); gv(); }
    return oDel.apply(this, arguments);
  };
  const oExp = exportarBackupJSON;
  window.exportarBackupJSON = function () {
    state.missoes = M;
    try { return oExp.apply(this, arguments); } finally { delete state.missoes; }
  };
  const oImp = importarBackupJSON;
  window.importarBackupJSON = function (file) {
    if (file) {
      const r = new FileReader();
      r.onload = ev => { try { const d = JSON.parse(ev.target.result), dd = d.dados || d;
        if (dd.missoes && typeof dd.missoes === 'object') { M = dd.missoes; gv(); render(); } } catch (e) {} };
      r.readAsText(file);
    }
    return oImp.apply(this, arguments);
  };

  // ---------- Tela de Combate: rolador de dados + botão de finalizar ----------
  const dp = document.createElement('div');
  dp.id = 'combate-dados';
  dp.className = 'bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg space-y-4';
  dp.innerHTML = `<h3 class="font-bold flex items-center gap-2"><i data-lucide="dices" class="w-5 h-5 text-indigo-400"></i> Rolador de Dados Online</h3>
    <div class="flex flex-wrap gap-4 items-end">
      <div><label class="block text-xs font-medium text-slate-400 mb-1">Quantidade</label>
        <input type="number" id="cd-qtd" value="1" min="1" class="w-24 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100"></div>
      <div><label class="block text-xs font-medium text-slate-400 mb-1">Tipo de Dado</label>
        <select id="cd-tipo" class="w-32 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100">
          <option value="4">d4</option><option value="6">d6</option><option value="8">d8</option><option value="10">d10</option>
          <option value="12">d12</option><option value="20" selected>d20</option><option value="100">d100</option></select></div>
      <div><label class="block text-xs font-medium text-slate-400 mb-1">Modificador (+/-)</label>
        <input type="number" id="cd-mod" value="0" class="w-28 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100"></div>
      <button onclick="rolarDadosCombate()" class="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-sm">ROLAR</button></div>
    <div id="cd-res" class="hidden p-4 bg-slate-800/50 border border-slate-700 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div><p class="text-xs text-slate-400" id="cd-formula"></p><p class="text-2xl font-black text-indigo-400 mt-1" id="cd-total"></p></div>
      <button onclick="anotarRolagemEvento()" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-medium">Anotar no Histórico</button></div>
    <div class="flex justify-end"><button onclick="gFim()" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-sm font-bold">Finalizar combate e recompensas</button></div>`;
  window.rolarDadosCombate = () => {
    const qtd = Math.max(1, parseInt(document.getElementById('cd-qtd').value, 10) || 1);
    const tipo = parseInt(document.getElementById('cd-tipo').value, 10) || 20;
    const mod = parseInt(document.getElementById('cd-mod').value, 10) || 0;
    const rolls = Array.from({ length: qtd }, () => Math.floor(Math.random() * tipo) + 1);
    const total = rolls.reduce((a, b) => a + b, 0) + mod;
    const ms = mod !== 0 ? (mod > 0 ? ` +${mod}` : ` ${mod}`) : '';
    document.getElementById('cd-formula').textContent = `${qtd}d${tipo}${ms} ➔ [${rolls.join(', ')}]${ms}`;
    document.getElementById('cd-total').textContent = `TOTAL: ${total}`;
    document.getElementById('cd-res').classList.remove('hidden');
    window.lastRoll = { base: `${qtd}d${tipo}${ms}`, total, detalhes: `[${rolls.join(', ')}]${ms}` }; // mesmo formato do rolador original
  };
  // O combate se redesenha inteiro; este observador recoloca o painel no fim da tela
  const cs = document.getElementById('view-combate');
  if (cs) {
    const fix = () => { if (!cs.contains(dp)) cs.appendChild(dp); };
    fix(); new MutationObserver(fix).observe(cs, { childList: true });
  }

  document.addEventListener('DOMContentLoaded', () => { render(); lucide.createIcons(); });
})();