async function fetchData() {
  try {
    console.log("Fetching data...");

    // Simulasi penundaan dengan setTimeout
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); // Penundaan 2 detik
    });

    console.log("Data berhasil ditangkap!");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Panggil fungsi fetchData
fetchData();
