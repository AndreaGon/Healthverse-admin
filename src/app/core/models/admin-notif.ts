import { Timestamp } from 'firebase/firestore';

export interface AdminNotif {
  id: string;
  title: string;
  notif_content: string;
  timestamp: Timestamp;
}
