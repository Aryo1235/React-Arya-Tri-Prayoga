// async function fetchData() {
//   try {
//     console.log("Fetching data...");

//     await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 2000);
//     });

//     console.log("Data berhasil ditangkap!");
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// // Panggil fungsi fetchData
// fetchData();

function promise() {
  return new Promise((resolve) => {
    console.log("Fetching data...");
    setTimeout(() => {
      resolve("Berhasil!");
    }, 2000);
  });
}

async function async() {
  const result = await promise();
  console.log(result);
}

async();
