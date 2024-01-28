export interface FormReportsProps {
  id: string;
}

export function FormReports({ id }: FormReportsProps) {
  return (
    <>
      <h1>Fomulários do relatórios</h1>
      <p>Formulário: {id}</p>
    </>
  );
}
