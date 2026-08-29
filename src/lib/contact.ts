import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export interface ContactRequestInput {
  name: string;
  email: string;
  phone?: string;
  restaurant?: string;
  subject: string;
  message: string;
}

/**
 * İletişim/başvuru formunu yemigo-prod `contactRequests` koleksiyonuna yazar.
 * Alanlar ve sabitler (source/status) Firestore kuralındaki doğrulamayla
 * birebir eşleşmeli — aksi halde create reddedilir.
 */
export async function submitContactRequest(
  input: ContactRequestInput
): Promise<void> {
  await addDoc(collection(db, "contactRequests"), {
    name: input.name.trim(),
    email: input.email.trim(),
    phone: (input.phone ?? "").trim(),
    restaurant: (input.restaurant ?? "").trim(),
    subject: input.subject.trim(),
    message: input.message.trim(),
    source: "website",
    status: "new",
    createdAt: serverTimestamp(),
  });
}
