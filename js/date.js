const footerDate = () =>{
    const fecha = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    console.log(fecha.getFullYear());
    console.log(months[fecha.getMonth()]);

    const date = document.getElementById('date');
    date.innerHTML = `@Copyright &copy;  ${months[fecha.getMonth()]}   ${fecha.getFullYear()} `;
    
}

footerDate();
