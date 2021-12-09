import dayjs from "dayjs";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "./firebase";
import usersApi from "./users";

const TaskEvent = "state_changed";
const metadata = {
  contentType: "image/jpeg",
};

const uploadImage = async (
  uid,
  name,
  email,
  image,
  onUploadProgress,
  onError
) => {
  try {
    const imageRef = ref(storage, `users/${uid}/${dayjs()}`);
    const response = await fetch(image);
    const blob = await response.blob();

    const uploadTask = uploadBytesResumable(imageRef, blob, metadata);

    const next = (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      onUploadProgress(progress);
    };

    const error = (error) => {
      console.log("@uploadTask Error: ", error);
      onError(error);
    };

    const complete = () =>
      getDownloadURL(ref(storage, uploadTask.snapshot.ref)).then((url) => {
        usersApi.addUser(uid, name, email, url);
      });

    uploadTask.on(TaskEvent, next, error, complete);
  } catch (error) {
    console.log("An unexpected error occurred: ", error.message);
    onError(error.message);
  }
};

export default {
  uploadImage,
};
