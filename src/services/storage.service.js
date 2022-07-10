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

const uploadTeamImage = async (file, teamId) => {
  try {
    const fileRef = ref(firebaseStorage, `/teams/team-${teamId}`);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  } catch (error) {
    toast.error(error.message);
  }
};

const uploadTeamProjectsImages = async (fileArray, id) => {
  try {
    if (!fileArray) {
      const errorMessage = "Failed to load image, please try again later";
      throw errorMessage;
    }
    return await fileArray?.map(async (file, index) => {
      const fileRef = ref(firebaseStorage, `/projects/${id}/${index}`);
      await uploadBytes(fileRef, file[0]);
      return await getDownloadURL(fileRef);
    });
  } catch (error) {
    toast.error(error);
  }
};

const storageService = {
  uploadAvatar,
  uploadTeamImage,
  uploadTeamProjectsImages,
};

export default storageService;
