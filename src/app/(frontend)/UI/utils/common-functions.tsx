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

function quiz_share_count() {
  fetch("https://mahathugbandhan.com/api/v1/user/score_share_count")
    .then((response) => response.json())
    .then((result) => {
      console.log("quiz_share_count", result);
    });
  // window.location.href = "#demo-modal";
}

//

function getQueryParam(key: string) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

async function generateCertificate(
  mobile: string,
  lang: string,
  next: Function,
  setCertificateUrl: React.Dispatch<React.SetStateAction<string>>
) {
  const response = await fetch(
    "https://mahathugbandhan.com/api/v1/generate_certificate/" +
      mobile +
      "?language=" +
      lang
  );
  const responseData = await response.json();
  console.log("certificate", responseData, responseData.status === 200);
  if (responseData.status === 200) {
    console.log(responseData.certificate_url);
    setCertificateUrl(responseData.certificate_url);
    next();
  }
}
export {
  image_download_count,
  spin_wheel_count,
  image_share_count,
  upload_count,
  video_share_count,
  quiz_share_count,
  getQueryParam,
  generateCertificate,
};
