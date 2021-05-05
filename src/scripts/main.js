function main() {

    const getDataCovid = () => {
        // membuat instance dari XMLHttpRequest
        const xhr = new XMLHttpRequest();
            
        //menetapkan callback jika response sukses dan error
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            if(responseJson.error) {
               showResponseMessage(responseJson);
            } else {
               renderAllDataCovid(responseJson.data);
            }
        }
     
        xhr.onerror = function() {
            showResponseMessage();
        }
     
         // Membuat GET request dan menetapkan target URL
         xhr.open("GET", "https://indonesia-covid-19.mathdro.id/api/provinsi/");
         // Mengirimkan request
         xhr.send();
     };


    const renderAllDataCovid = (data) => {
        const dataCovidElement = document.querySelector("#listDataCovid");
        dataCovidElement.innerHTML = "";

        data.forEach(data => {
            dataCovidElement.innerHTML += `
                <div class="col-lg-3 m-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card " style="width: 18rem; height: 15rem;">
                        <div class="card-body bg-secondary">
                            <h5 class="card-title text-center">${data.provinsi}</h5>
                            <hr>
                            <p class="card-text">Pasien Positif : <b>${data.kasusPosi}</b></p>
                            <p class="card-text">Pasien Sembuh : <b>${data.kasusSemb}</b></p>
                            <p class="card-text">Pasien Meninggal : <b>${data.kasusMeni}</b></p>
       
                        </div>
                    </div>
                </div>
            `;
        });
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        
        getDataCovid();
    });
}

export default main;