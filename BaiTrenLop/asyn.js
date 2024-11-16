function getUseriD() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userID = 10;
      resolve(userID);
    });
  });
}

function getPostiD(userID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let postID = { id: userID, name: "abc" };
      resolve(postID);
    });
  });
}

function getCommentiD(postID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let comment = { id: postID.id, name: "def" };
      resolve(comment);
    });
  });
}

// let abc = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     getUseriD((data) => {
//       resolve(data);
//     });
//   }, 0);
// });
// abc
//   .then((data) => {
//     getPostiD(data, function (post) {
//       return post;
//     });
//   })
//   .then((post) => {
//     getCommentiD(post, function (comment) {
//       console.log(comment);
//     });
//   });

async function abc() {
  let user = await getUseriD();
  let post = await getPostiD(user);
  let comment = await getCommentiD(post);
  return comment;
}
// hàm này dùng khi chạy các phần cùng lúc mà không cần đợi lấy tham số nào
Promise.all([getUseriD(), getPostiD(), getCommentiD()]).then((data) => {
  console.log("2", data);
});

// Vì các hàm cần data truyền vào để chạy nên sử dụng
abc().then((data) => {
  console.log("1", data);
});
