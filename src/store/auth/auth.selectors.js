const getAccountId = () => (state) => state.auth.accountId;

const getLoggedInStatus = () => (state) => state.auth.isLoggedIn;

export { getAccountId, getLoggedInStatus };
