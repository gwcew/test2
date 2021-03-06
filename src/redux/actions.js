import {
  VIDEO_ADD,
  VIDEO_DELETE,
  VIDEO_CLICK,
  VIDEO_SET_ACCESS_TYPE,
  VIDEO_SET_SEARCH_STRING_RESULT,
  VIDEO_SET_OUTPUT_CONTENT_AFTER_APPLIED_SEARCH_STRING,
  THEME_SET_STATUS,
  SIDEBAR_SET_STATUS,
  MODAL_LOGINFORM_SET_STATUS,
  MODAL_REGISTERFORM_SET_STATUS,
  MODAL_REGISTERFORM_USER_LIST_STATUS,
  SIDEBAR_SET_SELECTED_PAGE_ID,
} from './actionTypes';

/*
export const mapboxReady = () => ({
  type: MAPBOX_READY,
  payload: {},
});
*/

export const addVideo = (data) => {
  return {
    type: VIDEO_ADD,
    video: data,
  };
};

export const deleteVideo = (data) => {
  return {
    type: VIDEO_DELETE,
    video: data,
  };
};

export const clickVideo = (data) => {
  return {
    type: VIDEO_CLICK,
    video: data,
  };
};

export const setAccessType = (id) => {
  return {
    type: VIDEO_SET_ACCESS_TYPE,
    accessType: id,
  }
};

export const setSearchResult = (string) => {
  return {
    type: VIDEO_SET_SEARCH_STRING_RESULT,
    searchString: string,
  };
}; 

export const setSearchContentByString = (searchString) => {
  return {
    type: VIDEO_SET_OUTPUT_CONTENT_AFTER_APPLIED_SEARCH_STRING,
    searchString: searchString,
  };
};

export const setThemeStatus = (theme) => {
  return {
    type: THEME_SET_STATUS,
    themeStatus: theme,
  };
};

export const setSideBarStatus = (status) => {
  return {
    type: SIDEBAR_SET_STATUS,
    sideBarCollapsed: status,
  };
};

export const setModalLoginFormStatus = (status) => {
  return {
    type: MODAL_LOGINFORM_SET_STATUS,
    loginFormStatus: status, 
  };
};

export const setModalRegisterFormStatus = (boolStatus) => {
  return {
    type: MODAL_REGISTERFORM_SET_STATUS,
    registerFormStatus: boolStatus,
  };
};

export const setSideBarSelectedPageID = (stringID) => {
  return {
    type: SIDEBAR_SET_SELECTED_PAGE_ID,
    sidebarPageID: stringID,
  };
};

export const setModalRegisterFormListUserStatus = (boolStatus) => {
  return {
    type: MODAL_REGISTERFORM_USER_LIST_STATUS,
    registerFormUserListStatus: boolStatus,
  };
};