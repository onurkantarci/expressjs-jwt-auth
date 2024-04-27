require("dotenv").config();

const accesTokenExpireTime = 5 * 60 * 1000; // 5min
const refreshTokenExpireTime = 7 * 24 * 60 * 60 * 1000; // 7day;

function getAccessTokenOpts() {
  return {
    secret: process.env.ACCESS_TOKEN_SECRET,
    tokenOpts: {
      expiresIn: accesTokenExpireTime / 1000,
    },
    cookieOpts: {
      expires: accesTokenExpireTime,
    },
  };
}

function getRefreshTokenOpts() {
  return {
    secret: process.env.REFRESH_TOKEN_SECRET,
    tokenOpts: {
      expiresIn: refreshTokenExpireTime / 1000,
    },
    cookieOpts: {
      expires: refreshTokenExpireTime,
    },
  };
}

module.exports = {
  getRefreshTokenOpts,
  getAccessTokenOpts,
};
