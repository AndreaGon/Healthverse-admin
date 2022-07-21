import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminNotif } from '../models/admin-notif';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private firestore: Firestore) {}

  currentDate = new Date(Date.now());

  col: any = collection(this.firestore, 'Admin_notif');
  adminData: Observable<AdminNotif[]> | undefined = collectionData(this.col);

  adminDocument: any = doc(this.col);

  getAll() {
    return this.adminData;
  }

  addNewData(data: any) {
    const docId = uuid.v4();
    return setDoc(doc(this.col, docId), {
      id: docId,
      title: data.get('title').value,
      notif_content: data.get('content').value,
      timestamp: this.currentDate
    });
  }

  deleteData(id: any) {
    return deleteDoc(doc(this.col, String(id)));
  }
}
