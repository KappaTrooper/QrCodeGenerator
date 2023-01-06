    function generateQRCode() {
        var url = document.getElementById("url").value;
        if (url === "") {
          return;
        }
  
        // Remove existing QR code (if any)
        var qrCode = document.getElementById("qrCode");
        while (qrCode.firstChild) {
          qrCode.removeChild(qrCode.firstChild);
        }
  
        // Create new QR code
        var img = document.createElement("img");
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(url);
        qrCode.appendChild(img);

        
  
        // Show download link
        document.getElementById("downloadLink").style.display = "inline";
  
        // Update download link
        document.getElementById("downloadLink").href = img.src;
      }
    
      