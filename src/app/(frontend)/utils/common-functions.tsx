function image_download_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/image_download_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("image download count", result);
    });
}
function spin_wheel_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/spin_wheel_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("spin the wheel count", result);
    });
}
function image_share_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/image_share_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("image share count", result);
    });
}

function upload_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/upload_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("upload count", result);
    });
}
function video_share_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/video_share_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("video_share_count", result);
    });
}
export {
  image_download_count,
  spin_wheel_count,
  image_share_count,
  upload_count,
  video_share_count,
};
