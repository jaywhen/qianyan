const pc_list = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "Linux", "Win32"]

export const isMobileClient = ():boolean => {
  if(navigator.userAgentData) {
    return navigator.userAgentData.mobile;
  } else {
    const clientType = navigator.platform;
    return !pc_list.includes(clientType)
  }
}

export const getImgFileBase64 = (file:Blob) => {
  return new Promise(resolve => {
    let baseUrl = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseUrl = reader.result as string;
      resolve(baseUrl);
    }
  })
}