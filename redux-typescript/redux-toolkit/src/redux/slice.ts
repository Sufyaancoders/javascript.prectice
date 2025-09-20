import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * Define WordType used throughout the slice.
 * For this simple example each word is a string.
 * Adjust to an object type if your data is richer.
 */
type WordType = string;

interface StateType {
  loading: boolean;
  words: WordType[];
  result: string[];
  error?: string;
  count: number;
}

const initialState: StateType = {
  loading: false,
  words: [] as WordType[],
  result: [],
  count: 0,
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    getWordsRequest: (state) => {
      state.loading = true;
    },
    getWordsSuccess: (state, action: PayloadAction<WordType[]>) => {
      state.loading = false;
      state.words = action.payload;
    },
    getWordsFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    saveResult: (state, action: PayloadAction<string[]>) => {
      state.loading = false;
      state.result = action.payload;
    },
    clearState: (state) => {
      state.loading = false;
      state.result = [];
      state.words = [];
      state.error = undefined;
    },
  },
});

export const {
  getWordsSuccess,
  getWordsRequest,
  getWordsFail,
  clearState,
  saveResult,
  incrementCount,
  decrementCount,
  incrementByAmount,
} = rootSlice.actions;

export default rootSlice.reducer;