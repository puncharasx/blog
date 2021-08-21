class HttpException extends Error {
    status: number;
    message: string;
    validation: any;
    constructor(status: number, message: string, validation: any) {
      super(message);
      this.status = status;
      this.message = message;
      this.validation = validation;
    }
  }
   
  export default HttpException;