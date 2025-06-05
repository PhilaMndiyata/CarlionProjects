function validate() {
    var subject = Document.getElementByID("name").value;
    var massage = Document.getElementByID("email").value;
    var massage = Document.getElementByID("massage").value;
    if (email.length < 3){
        alert("Enter a valid email");
        return false
    }
    }
    
    function displayDateTime() {
        // Get the current date and time
        let currentDate = new Date();

        // Extract date components
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1; // Month is zero-based
        let year = currentDate.getFullYear();

        // Extract time components
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();

        // Format the date and time
        let formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
        let formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        // Display the date and time in the HTML
        document.getElementById('date').textContent = formattedDate;
        document.getElementById('time').textContent = formattedTime;
    }

    // Call the function when the page loads
    window.onload = function() {
        displayDateTime();
        // Update the date and time every second
        setInterval(displayDateTime, 1000);
    }