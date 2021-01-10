import axios from "axios";

const baseURL = "https://kvdomingo.herokuapp.com/api/";

const axiosInstance = axios.create({ baseURL });

const api = {
  home: {
    technologies() {
      return axiosInstance.get("home/technology");
    },
  },
  cv: {
    education() {
      return axiosInstance.get("cv/education");
    },
    work() {
      return axiosInstance.get("cv/work");
    },
    projects() {
      return axiosInstance.get("cv/project");
    },
    certifications() {
      return axiosInstance.get("cv/certification");
    },
    publications() {
      return axiosInstance.get("cv/publication");
    },
    references() {
      return axiosInstance.get("cv/reference");
    },
  },
  svip: {
    blogposts() {
      return axiosInstance.get("svip/blogpost");
    },
    courses() {
      return axiosInstance.get("svip/course");
    },
  },
  photography: {
    clients(slug) {
      return axiosInstance.get(`photography/clients/${slug}`);
    },
    client() {
      return axiosInstance.get("photography/client");
    },
    gallery(slug) {
      return axiosInstance.get(`photography/${slug}`);
    },
  },
  dev: {
    projects() {
      return axiosInstance.get("dev/project");
    },
  },
};

export default api;
