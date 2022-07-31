import { IProdutos } from "../types/Produtos";

interface IResponseDefault {
  data: IProdutos | IProdutos[] | undefined;
  message: string;
  count?: number;
}

export const responseDefault = (
  data: IProdutos | IProdutos[] | undefined,
  message: string,
  count?: number
): IResponseDefault => {
  return {
    data,
    message,
    count,
  };
};

export default responseDefault;
