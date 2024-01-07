let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");
let pdfPreviewContainer = document.getElementById("pdf-preview-container");
const btn = document.getElementById("btn");

function clearPDFPreview() {
    pdfPreviewContainer.innerHTML = '';
}

function preview() {
    clearPDFPreview();
    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for (let i = 0; i < fileInput.files.length; i++) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = fileInput.files[i].name;
        figure.appendChild(figCap);

        reader.onload = (index => {
            return () => {
                let img = document.createElement("img");
                img.setAttribute("src", reader.result);
                figure.insertBefore(img, figCap);

                // Add remove button/icon
                let removeBtn = document.createElement("delete");
                removeBtn.textContent = " X ";
                
                removeBtn.addEventListener("click", () => removeImagePreview(index));
                figure.appendChild(removeBtn);

                showImagePreview(reader.result);
            };
        })(i);

        imageContainer.appendChild(figure);
        reader.readAsDataURL(fileInput.files[i]);
        document.getElementById("btn").style.display = "block";
    }
    
    
}

function showImagePreview(imageSrc) {
    let imgPreview = document.createElement("img");
    imgPreview.setAttribute("src", imageSrc);
    pdfPreviewContainer.appendChild(imgPreview);
    document.getElementById("btn-2").style.display = "block";
    document.getElementById("btn-fa").style.display = "block";
}

function removeImagePreview(index) {
    // Remove image preview from both the image container and PDF preview container
    imageContainer.removeChild(imageContainer.children[index]);
    pdfPreviewContainer.removeChild(pdfPreviewContainer.children[index]);
}

function printPDF() {
    clearPDFPreview();
    var doc = new jsPDF();
    var images = imageContainer.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        var imgData = images[i].src;
        doc.addImage(imgData, 'JPEG', 10, 10, 190, 150);
        if (i < images.length - 1) {
            doc.addPage();
        }
    }

    doc.save('Img2Pdf-by-SATYAM.pdf');
}
