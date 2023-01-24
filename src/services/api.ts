import axios from "axios";

export const api = axios.create({
  // baseURL: "https://doacao.onrender.com/",
  baseURL: "https://do-acao-json-server.onrender.com/",
  // baseURL: "http://localhost:3001/",
  timeout: 7000,
});
