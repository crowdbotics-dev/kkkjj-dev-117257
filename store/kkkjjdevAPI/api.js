import axios from "axios"
const kkkjjdevAPI = axios.create({
  baseURL: "https://kkkjj-dev-117257.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return kkkjjdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_jkfrifles_list(payload) {
  return kkkjjdevAPI.get(`/api/v1/jkfrifles/`)
}
function api_v1_jkfrifles_create(payload) {
  return kkkjjdevAPI.post(`/api/v1/jkfrifles/`, payload)
}
function api_v1_jkfrifles_retrieve(payload) {
  return kkkjjdevAPI.get(`/api/v1/jkfrifles/${payload.id}/`)
}
function api_v1_jkfrifles_update(payload) {
  return kkkjjdevAPI.put(`/api/v1/jkfrifles/${payload.id}/`, payload)
}
function api_v1_jkfrifles_partial_update(payload) {
  return kkkjjdevAPI.patch(`/api/v1/jkfrifles/${payload.id}/`, payload)
}
function api_v1_jkfrifles_destroy(payload) {
  return kkkjjdevAPI.delete(`/api/v1/jkfrifles/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return kkkjjdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_sdfg_list(payload) {
  return kkkjjdevAPI.get(`/api/v1/sdfg/`)
}
function api_v1_sdfg_create(payload) {
  return kkkjjdevAPI.post(`/api/v1/sdfg/`, payload)
}
function api_v1_sdfg_retrieve(payload) {
  return kkkjjdevAPI.get(`/api/v1/sdfg/${payload.id}/`)
}
function api_v1_sdfg_update(payload) {
  return kkkjjdevAPI.put(`/api/v1/sdfg/${payload.id}/`, payload)
}
function api_v1_sdfg_partial_update(payload) {
  return kkkjjdevAPI.patch(`/api/v1/sdfg/${payload.id}/`, payload)
}
function api_v1_sdfg_destroy(payload) {
  return kkkjjdevAPI.delete(`/api/v1/sdfg/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return kkkjjdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return kkkjjdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return kkkjjdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return kkkjjdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return kkkjjdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return kkkjjdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return kkkjjdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return kkkjjdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return kkkjjdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return kkkjjdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return kkkjjdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return kkkjjdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_jkfrifles_list,
  api_v1_jkfrifles_create,
  api_v1_jkfrifles_retrieve,
  api_v1_jkfrifles_update,
  api_v1_jkfrifles_partial_update,
  api_v1_jkfrifles_destroy,
  api_v1_login_create,
  api_v1_sdfg_list,
  api_v1_sdfg_create,
  api_v1_sdfg_retrieve,
  api_v1_sdfg_update,
  api_v1_sdfg_partial_update,
  api_v1_sdfg_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
