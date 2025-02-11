const hostname = location.hostname
const backendUrl = `http://${hostname}:3000/api`;

async function fetchFiles() {
  const response = await fetch(`${backendUrl}/files`);
  const files = await response.json();
  const fileList = document.getElementById('fileList');
  fileList.innerHTML = files.map(file => `
    <li>
      ${file}
      <button onclick="downloadFile('${file}')">Download</button>
      <button onclick="deleteFile('${file}')">Delete</button>
    </li>
  `).join('');
}

async function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  await fetch(`${backendUrl}/upload`, {
    method: 'POST',
    body: formData,
  });
  fetchFiles();
}

async function deleteFile(filename) {
  await fetch(`${backendUrl}/files/${filename}`, {
    method: 'DELETE',
  });
  fetchFiles();
}

async function downloadFile(filename) {
  window.open(`${backendUrl}/files/${filename}`, '_blank');
}

fetchFiles();
