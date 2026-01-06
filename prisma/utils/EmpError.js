class EmpError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isEmpError = true;
  }
}

export default EmpError;
