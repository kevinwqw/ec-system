import { makeAutoObservable } from 'mobx'

export default class Store {
  constructor() {
    makeAutoObservable(this)
  }

  public demoData = undefined
}
