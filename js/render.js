function RenderMe(){
    var pincode =prompt("ENTER PINCODE : 160055 EXAMPLE");
    var date = prompt("ENTER DATE : 03-06-2021 EXAMPLE");
    var healer = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+ pincode + `&date=` + date;
    function fetchData(){
        fetch(healer).then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        }).then(data =>{
            console.log(data.sessions);
            const html = data.sessions.map(user =>{
                return `
                <div class="gg">
                <p>CenterId: ${user.center_id} </p>
                <p>Name: ${user.name} </p>
                <p>address: ${user.address} </p>
                <p>District: ${user.district_name} </p>
                <p>City: ${user.block_name} </p>
                <p>Pincode: ${user.pincode} </p>
                <p>Slots: ${user.slots} </p>
                <p>Vaccine: ${user.vaccine} </p>
                </div>`;
            }).join('');
            document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
        }).catch(error =>{
            console.log(error);
        });
    }
    fetchData();
}
