import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sdfg_list = createAsyncThunk(
  "sDFGS/api_v1_sdfg_list",
  async payload => {
    const response = await apiService.api_v1_sdfg_list(payload)
    return response.data
  }
)
export const api_v1_sdfg_create = createAsyncThunk(
  "sDFGS/api_v1_sdfg_create",
  async payload => {
    const response = await apiService.api_v1_sdfg_create(payload)
    return response.data
  }
)
export const api_v1_sdfg_retrieve = createAsyncThunk(
  "sDFGS/api_v1_sdfg_retrieve",
  async payload => {
    const response = await apiService.api_v1_sdfg_retrieve(payload)
    return response.data
  }
)
export const api_v1_sdfg_update = createAsyncThunk(
  "sDFGS/api_v1_sdfg_update",
  async payload => {
    const response = await apiService.api_v1_sdfg_update(payload)
    return response.data
  }
)
export const api_v1_sdfg_partial_update = createAsyncThunk(
  "sDFGS/api_v1_sdfg_partial_update",
  async payload => {
    const response = await apiService.api_v1_sdfg_partial_update(payload)
    return response.data
  }
)
export const api_v1_sdfg_destroy = createAsyncThunk(
  "sDFGS/api_v1_sdfg_destroy",
  async payload => {
    const response = await apiService.api_v1_sdfg_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sDFGSSlice = createSlice({
  name: "sDFGS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_sdfg_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfg_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfg_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfg_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfg_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfg_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfg_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfg_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_sdfg_list,
  api_v1_sdfg_create,
  api_v1_sdfg_retrieve,
  api_v1_sdfg_update,
  api_v1_sdfg_partial_update,
  api_v1_sdfg_destroy,
  slice: sDFGSSlice
}
