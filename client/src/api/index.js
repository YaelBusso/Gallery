import axios from "axios";

//TODO: secure the app through pass the keys to ENV file. 
const SECRET_KEY ="$2b$10$mDDPw85Qhc8zycOFyr9mAuJaIqoqaLd9nDH0mBFhCHyybApT5BEve";
// const TRY = process.env.REACT_APP_TRY;
// console.log("SECRET_KEY: " + SECRET_KEY, "TRY: " + TRY);

export const fetchImages = async () =>
  axios({
    method: "get",
    url: "https://api.jsonbin.io/b/627b346c38be29676100ef94/latest",
    headers: {
      "Secret-Key": SECRET_KEY,
    },
  }).then(function (res) {
    // console.log(JSON.stringify(res.data.moduleAccess.pictures));
    return (JSON.stringify(res.data.moduleAccess.pictures))
  });

