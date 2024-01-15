export enum Tipo_Formulario {
  form1_Cliente_Segurado,
  form2_Caracteristica_Sinistro,
  form3_Cronologia_Sinistro,
  form4_Do_Carregamento,
  form5_Motorista,
  form6_Ajudantes,
  form7_Veiculo_Transportador,
  form8_Orgao_Policial,
  form9_Gerenciamento_Risco_Veiculo,
  form10_Sistemas_Protecao_Carregamento,
  form11_Declaracao_Motorista_Ajudante,
  form12_Gerenciamento_Risco_Deposito,
  form13_Locais_Evento,
  form14_Resumo_Averiguacoes,
  form15_Recuperacao_Carga,
  form16_Anexos_Fotograficos,
  form17_Conclusao
}

export enum Status_Relatorio {
  Formalizando,
  Finalizado,
  Aprovado,
  Rejeitado,
  Emitido
}

export interface UsuarioResponsavel {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  avatar: string;
  funcao: string;
}

export interface FormulariosSelecionados {
  form: string;
  etapa: string;
}

export interface Formularios {
  numero_processo: string;
  qtd_etapas_formulario: string;
  etapas: string[];
}

export interface ReportData {
  relatorio_filtrado: {
    id: string;
    numero_processo: string;
    natureza_sinistro: string;
    cliente: string;
    cnpj: string;
    data_entrada: string;
    data_emissao: string;
    status: string;
    status_recuperacao_carga: string;
    fato_gerador_recuperacao_carga: string;
    usuario_responsavel: UsuarioResponsavel;
    usuarios_permitidos: UsuarioResponsavel[];
    formularios_selecionados: FormulariosSelecionados[];
    formularios: Formularios;
  }[];
}
