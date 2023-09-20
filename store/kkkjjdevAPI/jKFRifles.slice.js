import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_jkfrifles_list = createAsyncThunk(
  "jKFRifles/api_v1_jkfrifles_list",
  async payload => {
    const response = await apiService.api_v1_jkfrifles_list(payload)
    return response.data
  }
)
export const api_v1_jkfrifles_create = createAsyncThunk(
  "jKFRifles/api_v1_jkfrifles_create",
  async payload => {
    const response = await apiService.api_v1_jkfrifles_create(payload)
    return response.data
  }
)
export const api_v1_jkfrifles_retrieve = createAsyncThunk(
  "jKFRifles/api_v1_jkfrifles_retrieve",
  async payload => {
    const response = await apiService.api_v1_jkfrifles_retrieve(payload)
    return response.data
  }
)
export const api_v1_jkfrifles_update = createAsyncThunk(
  "jKFRifles/api_v1_jkfrifles_update",
  async payload => {
    const response = await apiService.api_v1_jkfrifles_update(payload)
    return response.data
  }
)
export const api_v1_jkfrifles_partial_update = createAsyncThunk(
  "jKFRifles/api_v1_jkfrifles_partial_update",
  async payload => {
    const response = await apiService.api_v1_jkfrifles_partial_update(payload)
    return response.data
  }
)
export const api_v1_jkfrifles_destroy = createAsyncThunk(
  "jKFRifles/api_v1_jkfrifles_destroy",
  async payload => {
    const response = await apiService.api_v1_jkfrifles_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const jKFRiflesSlice = createSlice({
  name: "jKFRifles",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_jkfrifles_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jkfrifles_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jkfrifles_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jkfrifles_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jkfrifles_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jkfrifles_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jkfrifles_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jkfrifles_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_jkfrifles_list,
  api_v1_jkfrifles_create,
  api_v1_jkfrifles_retrieve,
  api_v1_jkfrifles_update,
  api_v1_jkfrifles_partial_update,
  api_v1_jkfrifles_destroy,
  slice: jKFRiflesSlice
}
