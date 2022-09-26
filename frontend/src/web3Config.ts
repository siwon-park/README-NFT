import Web3 from "web3";
import { MintReadmeToken } from "./abi/MintReadmeTokenABI";
import { SaleReadmeToken } from "./abi/SaleReadmeTokenABI";
import { GetReadmeToken } from "./abi/GetReadmeTokenABI";
import { BidReadmeToken } from "./abi/BidReadmeTokenABI";
import { SSF } from "./abi/SSFABI";

export const web3 = new Web3(window.ethereum);

const ABI = {
  MintReadmeToken: MintReadmeToken,
  SaleReadmeToken: SaleReadmeToken,
  GetReadmeToken: GetReadmeToken,
  BidReadmeToken: BidReadmeToken,
  SSF: SSF,
};

export const MintReadmeContract = new web3.eth.Contract(
  ABI.MintReadmeToken,
  process.env.REACT_APP_MINTREADMETOKEN_CA
);

export const SaleReadmeContract = new web3.eth.Contract(
  ABI.SaleReadmeToken,
  process.env.REACT_APP_SALEREADMETOKEN_CA
);

export const GetReadmeContract = new web3.eth.Contract(
  ABI.GetReadmeToken,
  process.env.REACT_APP_GETREADMETOKEN_CA
);

export const SSFContract = new web3.eth.Contract(
  ABI.SSF,
  process.env.REACT_APP_ERC20_CA
);

export const BidReadmeContract = new web3.eth.Contract(
  ABI.BidReadmeToken,
  process.env.REACT_APP_BIDREADMETOKEN
);
