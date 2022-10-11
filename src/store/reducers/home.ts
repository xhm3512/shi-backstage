
const initialState = {
  breadcrumblist: {},
};
export default (state = initialState, action: { type: string; data: any }) => {
  switch (action.type) {

    case 'breadcrumblist':
      return {
        ...state,
        breadcrumblist: action.data,
      };
    
    default:
      return state;
  }
};
