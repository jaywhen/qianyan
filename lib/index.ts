const pc_list = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "Linux", "Win32"]

export const isMobileClient = ():boolean => {
  if(navigator.userAgentData) {
    return navigator.userAgentData.mobile;
  } else {
    const clientType = navigator.platform;
    return !pc_list.includes(clientType)
  }
}