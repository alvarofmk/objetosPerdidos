import { Injectable } from '@angular/core';
import { addDoc, doc, Firestore, setDoc, collection, getDocs } from '@angular/fire/firestore';
import { LostItem } from '../components/model/lostItem.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: Firestore) {}

  save(item: LostItem, found: boolean){
    let collectionType = found ? "found-items" : "lost-items";
    let ref = collection(this.db, collectionType);
    addDoc(ref, item);
  }

  getAll(found: boolean){
    let collectionType = found ? "found-items" : "lost-items";
    let ref = collection(this.db, collectionType);
    return getDocs(ref);
  }
}
