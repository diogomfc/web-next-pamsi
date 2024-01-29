export enum FormularioTipoType {
  ClienteSegurado,
  CaracteristicaSinistro,
  CronologiaSinistro,
  Carregamento,
  Motorista,
  Ajudantes,
  VeiculoTransportador,
  OrgaoPolicial,
  GerenciamentoRiscoVeiculo,
  SistemasProtecaoCarregamento,
  DeclaracaoMotoristaAjudante,
  GerenciamentoRiscoDeposito,
  LocaisEvento,
  ResumoAveriguacoes,
  RecuperacaoCarga,
  AnexosFotograficos,
  Conclusao
}

export enum RelatorioStatusType {
  Formalizando,
  Finalizado,
  Aprovado,
  Rejeitado,
  Emitido,
  Recuperado,
  Irreversivel
}

export enum SinistroNaturezaType {
  Roubo,
  Furto,
  Apreensao,
  Outros
}

export interface ResponsavelUsuarioType {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  avatar: string;
  funcao: string;
}

export interface FormulariosSelecionadosType {
  form: Tipo_Formulario;
  etapa?: string;
}

export interface FormulariosType {
  numero_processo: string;
  qtd_etapas_formulario: string;
  etapas: string[];
}

export interface ReportDataType {
  relatorio_filtrado: {
    id: string;
    numero_processo: string;
    natureza_sinistro: string;
    cliente: string;
    cnpj: string;
    data_entrada: string;
    data_emissao: string;
    status: string;
    usuario_responsavel: ResponsavelUsuarioType;
    usuarios_permitidos: ResponsavelUsuarioType[];
    formularios_selecionados: FormulariosSelecionadosType[];
    formularios: FormulariosType;
  }[];
}

export interface NewReportType {
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
  usuario_responsavel: ResponsavelUsuarioType;
  usuarios_permitidos: ResponsavelUsuarioType[];
  formularios_selecionados: FormulariosSelecionadosType[];
  formularios: FormulariosType;
}

export type Tipo_Formulario = {
  form1_Cliente_Segurado: boolean;
  form2_Caracteristica_Sinistro: boolean;
  form3_Cronologia_Sinistro: boolean;
  form4_Do_Carregamento: boolean;
  form5_Motorista: boolean;
  form6_Ajudantes: boolean;
  form7_Veiculo_Transportador: boolean;
  form8_Orgao_Policial: boolean;
  form9_Gerenciamento_Risco_Veiculo: boolean;
  form10_Sistemas_Protecao_Carregamento: boolean;
  form11_Declaracao_Motorista_Ajudante: boolean;
  form12_Gerenciamento_Risco_Deposito: boolean;
  form13_Locais_Evento: boolean;
  form14_Resumo_Averiguacoes: boolean;
  form15_Recuperacao_Carga: boolean;
  form16_Anexos_Fotograficos: boolean;
  form17_Conclusao: boolean;
};
