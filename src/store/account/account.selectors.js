const getAccountData = () => (state) => state.account.entity;

const getAccountLoadingStatus = () => (state) => state.account.loading;

export { getAccountData, getAccountLoadingStatus };
