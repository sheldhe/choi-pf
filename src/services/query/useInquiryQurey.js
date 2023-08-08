import { useMutation } from "react-query";
import { db } from "services/firebase";
import { Timestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const addInquiry = async (inqu) => {
  const timestamp = Timestamp.fromDate(new Date());
  return await addDoc(collection(db, "inquiry"), {
    type: inqu.select,
    writer: inqu.writer,
    title: inqu.title,
    contents: inqu.contents,
    writedate: timestamp,
  });
};
/* hook : 1:1 문의 작성  */
export const useAddInquiryMutation = () => {
  return useMutation(addInquiry);
};
