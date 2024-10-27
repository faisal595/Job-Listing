module.exports = {
    MONGO_URI: "mongodb://localhost:27017",
    jwtSECRET: "app_mysecret",
    EXPRESS_PORT: 4000,
    
    USER_APPLICANT: 0,
    USER_RECRUITER:1,
    TOKEN_EXPIRY: 31556926, // 1 year in seconds
};