import { RootState } from "./../../app/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api";

interface SaleDate {
  saleStartDay: Date; // 판매 시작일
  saleEndDay: Date; // 판매 종료일
}

export interface Metadata {
  fileName: string;
  name: string;
  author: string;
  description: string;
  imageURL: string;
}

export interface NftConfig {
  metaDataURI: string;
  readmeTokenId: string;
  readmeTokenOwner: string;
  readmeTokenPrice: number;
  metaData: Metadata | undefined;
  isActive: boolean;
}

interface NftListConfig {
  rawList: any[];
  nftList: NftConfig[];
  carouselList: NftConfig[];
  solveList: number[];
  status: "idle" | "loading" | "failed";
}

const initialState: NftListConfig = {
  rawList: [],
  nftList: [],
  carouselList: [],
  solveList: [],
  status: "idle",
};
export const postProblem = createAsyncThunk(
  "nft/postProblem",
  async ({ userAddress, tokenId }: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(api.solver.solveProblem(), {
        walletAddress: userAddress,
        tokenId,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const findSolveList = createAsyncThunk(
  "nft/findSolveList",
  async (userAddress: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(api.solver.getSolveList(userAddress));
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    setRawList: (state, { payload }) => {
      state.rawList = payload;
    },
    setNftList: (state, { payload }) => {
      state.nftList = payload;
    },
    setCarouselList: (state) => {
      const { rawList, solveList } = state;
      const result: NftConfig[] = [];
      let cnt = Math.min(rawList.length, 10);
      for (let i = 0; i < cnt; i++) {
        const {
          metaDataURI,
          readmeTokenId,
          readmeTokenOwner,
          readmeTokenPrice,
          isActive,
        } = rawList[rawList.length - 1 - i];
        if (!solveList.includes(Number(readmeTokenId)))
          // 임시방편
          result.push({
            metaDataURI,
            readmeTokenId,
            readmeTokenOwner,
            readmeTokenPrice,
            metaData: undefined,
            isActive,
          });
        else if (cnt < rawList.length - 1) cnt++;
      }
      state.carouselList = result;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(findSolveList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(findSolveList.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.solveList = payload.nftList;
      })
      .addCase(findSolveList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setRawList, setCarouselList, setNftList } = nftSlice.actions;

export default nftSlice.reducer;

export const selectRawList = (state: RootState) => state.nft.rawList;
export const selectNftList = (state: RootState) => state.nft.nftList;
export const selectCarouselList = (state: RootState) => state.nft.carouselList;
export const selectSolveList = (state: RootState) => state.nft.solveList;
