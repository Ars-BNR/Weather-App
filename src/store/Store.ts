/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable, runInAction } from "mobx";
import type { NavigateFunction } from "react-router-dom";
import authorizedUsers from "../components/moke/authorizedUsers.json";
interface User {
  login: string;
  password: string;
}

export default class Store {
  private authorizedUsers: User[] = authorizedUsers;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUsers(authorizedUsers: User) {
    this.authorizedUsers = [authorizedUsers];
  }
  setLoading(bool: boolean) {
    this.isLoading = bool;
  }
  async login(login: string, password: string, navigate: NavigateFunction) {
    try {
      const user = this.authorizedUsers.find(
        (u) => u.login === login && u.password === password
      );
      if (user) {
        localStorage.setItem("isAuth", "true");
        navigate("/main", { replace: true });
      } else {
        return false;
      }
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }
  logout(navigate: NavigateFunction) {
    localStorage.setItem("isAuth", "false");
    navigate("/login", { replace: true });
  }
  async checkAuth(navigate: NavigateFunction) {
    this.setLoading(true);
    try {
      const isAuthenticated = localStorage.getItem("isAuth");
      if (!isAuthenticated && window.location.pathname !== "/login") {
        navigate("/login", { replace: true });
      } else if (isAuthenticated && window.location.pathname === "/login") {
        navigate("/main", { replace: true });
      }
    } catch (error: any) {
      console.log(error, "error checkAuth");
      console.log(error.response?.data?.message);
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }
}
