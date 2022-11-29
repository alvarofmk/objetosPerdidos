import { Injectable } from '@angular/core';
import { addDoc, doc, Firestore, setDoc, collection, getDocs } from '@angular/fire/firestore';
import { itemConverter, LostItem } from '../components/model/lostItem.interface';

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

  async getAll(found: boolean){
    let resultado: LostItem[] = [];
    let collectionType = found ? "found-items" : "lost-items";
    let ref = collection(this.db, collectionType).withConverter(itemConverter);
    const querySnapshot = await getDocs(ref);
    querySnapshot.forEach((doc) => {
      resultado.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
    return resultado;
  }
}
