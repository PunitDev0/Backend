class ApiResponse {
    construnctor(statusCode, data, message = "Success"){

        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode

    }
}