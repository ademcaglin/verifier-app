export const viewInitialState = {
  certificate: { isValid: false }
};

export const viewActions = {
  login: state => {
    return { certificate: state.isValid };
  }
};
