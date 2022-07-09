import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import firebaseService from "./firebase.service";
import { localStorageService } from "./index";

const firebaseStorage = getStorage(firebaseService);

const uploadAvatar = async (file) => {
  const currentUserId = localStorageService.getUserId();
  try {
    const fileRef = ref(firebaseStorage, `/avatars/avatar-${currentUserId}`);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  } catch (error) {
    toast.error(error.message);
  }
};

const storageService = {
  uploadAvatar,
};

export default storageService;
