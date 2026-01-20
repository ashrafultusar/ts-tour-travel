export type RegisterFormErrors = {
  name?: string[];
  email?: string[];
  role?: string[];
  password?: string[];
  _form?: string[];
};

export type RegisterActionState = null | {
  success: false;
  errors: RegisterFormErrors;
};
