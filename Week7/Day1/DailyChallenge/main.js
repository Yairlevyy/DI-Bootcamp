const largeNumber = 356;

let currentdate = new Date(); 
let dateAndTime = "The date and time are currently: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

module.exports = {
	largeNumber,
	dateAndTime,
}