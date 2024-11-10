const makeImage = (image) => {
  return `<div class="profile">
          <img
            src="${image}"
            alt=""
          />
        </div>`;
};

const createName = (userName) => {
  return `<div class="name">${userName}</div>`;
};

export const profileData = (image, userName) => {
  return `<div class="list">
        ${makeImage(image)}
        ${createName(userName)}
      </div>`;
};
