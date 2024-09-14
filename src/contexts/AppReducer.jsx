export default (state, action) => {
  switch (action.type) {
    case "ADD-TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE-TRANSACTION":
        return {
            ...state,
            transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
        }
    default:
      return state;
  }
};
