export const LOADING = "LOADING";

export function updateLoading(value) {
  return {
    type: LOADING,
    payload: value
  };
}
