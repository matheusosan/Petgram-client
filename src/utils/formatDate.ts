type ISODateString = string;

export function formatarData(dataISO: ISODateString): string {
  const dataPostagem = new Date(dataISO);
  const dataAtual = new Date();
  const diffTempo = Math.abs(dataAtual.getTime() - dataPostagem.getTime());
  const diffDias = Math.floor(diffTempo / (1000 * 60 * 60 * 24));
  const diffHoras = Math.floor(diffTempo / (1000 * 60 * 60));
  const diffMinutos = Math.floor(diffTempo / (1000 * 60));

  if (diffMinutos < 60) {
    return `Há ${diffMinutos} minutos`;
  } else if (diffHoras < 24) {
    return `Há ${diffHoras} horas`;
  } else if (diffDias < 30) {
    return `Há ${diffDias} dias`;
  } else {
    const dia = String(dataPostagem.getDate()).padStart(2, "0");
    const mes = String(dataPostagem.getMonth() + 1).padStart(2, "0");
    const ano = dataPostagem.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
}
