import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb/dist/pouchdb';


@Injectable({
  providedIn: 'root'
})

export class User{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export class DatabaseService {
  public db = new PouchDB('users');
  constructor() { }

}