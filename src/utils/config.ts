import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

import CryptoJS from "crypto-js";

export function setAuthData(userKey: string, userSecret: string) {
  localStorage.setItem("key", userKey);
  localStorage.setItem("secret", userSecret);
}

function generateSign(method: string, path: string, body: any, secret: string) {
  let bodyStr = "";
  if (body && (method === "POST" || method === "PATCH")) {
    bodyStr = JSON.stringify(body);
  }
  const signStr = method + path + bodyStr + secret;
  return CryptoJS.MD5(signStr).toString();
}

export const API = axios.create({
  baseURL: "https://lavina.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const method = (config.method || "get").toUpperCase();
  // URL constructor'a url ve baseURL veriyoruz
  const url = new URL(config.url ?? "", API.defaults.baseURL);
  const path = url.pathname;

  const key = localStorage.getItem("key") || "";
  const secret = localStorage.getItem("secret") || "";

  const sign = generateSign(method, path, config.data, secret);

  if (!config.headers) {
    config.headers = {};
  }

  config.headers["Key"] = key;
  config.headers["Sign"] = sign;

  return config;
});

export const API_URL = "https://lavina.onrender.com";

export default API;
