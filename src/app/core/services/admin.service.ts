import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminNotif } from '../models/admin-notif';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private firestore: Firestore) {}

  currentDate = new Date();

  col: any = collection(this.firestore, 'Admin_notif');
  adminData: Observable<AdminNotif[]> | undefined = collectionData(this.col);

  adminDocument: any = doc(this.col);

  getAll() {
    return this.adminData;
  }

  addNewData(data: any) {
    return addDoc(this.col, {
      title: data.get('title').value,
      notif_content: data.get('content').value,
      timestamp: this.currentDate.getUTCDate()
    });
  }
}
