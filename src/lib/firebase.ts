import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Public client config — yemigo-prod. İletişim/başvuru (lead) yazımı, admin
// panelinin OKUDUĞU projeye gitsin diye prod'a bağlanıyoruz (website hosting
// projesi farklı olabilir; bir client herhangi bir projeye yazabilir).
// Bu değerler GİZLİ DEĞİL (public web identifier). Güvenlik Firestore
// kurallarında: contactRequests yalnız doğrulamalı create, okuma admin'e özel.
const firebaseConfig = {
  apiKey: "AIzaSyCt5xEqaJyzl2nbvVop16dtdwHgd8IROEk",
  authDomain: "yemigo-prod.firebaseapp.com",
  projectId: "yemigo-prod",
  storageBucket: "yemigo-prod.firebasestorage.app",
  messagingSenderId: "608236654925",
  appId: "1:608236654925:web:7300b5b6f23de84d0ca704",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);

// YEREL TEST: NEXT_PUBLIC_USE_FIREBASE_EMULATOR=true ise tüm Firestore
// çağrıları yerel emülatöre (127.0.0.1:8080) gider — prod'a dokunulmaz.
// Prod build'de bu env tanımsız olduğundan devre dışı kalır.
if (
  process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === "true" &&
  typeof window !== "undefined"
) {
  try {
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
  } catch {
    // HMR sırasında ikinci çağrı hata verebilir — yok say.
  }
}
