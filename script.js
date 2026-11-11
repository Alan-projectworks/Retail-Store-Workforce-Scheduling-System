

document.addEventListener("DOMContentLoaded", function () {


    var leaveSection = document.querySelector(".leave");

    if (leaveSection) {

        var dateInput = leaveSection.querySelector("input[type='date']");
        var reasonInput = leaveSection.querySelector("input[type='text']");
        var submitButton = leaveSection.querySelector("button");

        submitButton.addEventListener("click", function () {

            var leaveDate = dateInput.value;
            var reason = reasonInput.value;

            if (leaveDate == "" || reason == "") {
                alert("Please enter the leave date and reason.");
            }

            else {

                var requests = JSON.parse(localStorage.getItem("leaveRequests")) || [];

                var newRequest = {
                    name: "Alex John",
                    date: leaveDate,
                    reason: reason,
                    status: "Pending"
                };

                requests.push(newRequest);

                localStorage.setItem("leaveRequests", JSON.stringify(requests));

                alert("Your leave request has been submitted.");

                dateInput.value = "";
                reasonInput.value = "";

            }

        });

    }

    var tables = document.querySelectorAll(".firstbg table");

    if (tables.length > 1) {

        var pendingTable = tables[1];

        var requests = JSON.parse(localStorage.getItem("leaveRequests")) || [];

        for (var i = 0; i < requests.length; i++) {

            var row = pendingTable.insertRow();

            var nameCell = row.insertCell(0);
            var dateCell = row.insertCell(1);
            var reasonCell = row.insertCell(2);
            var statusCell = row.insertCell(3);

            nameCell.innerHTML = requests[i].name;
            dateCell.innerHTML = requests[i].date;
            reasonCell.innerHTML = requests[i].reason;
            statusCell.innerHTML = requests[i].status;

        }

    }



    var scheduleDate = document.querySelector(".schedule input[type='date']");

    if (scheduleDate) {

        scheduleDate.addEventListener("change", function () {

            alert("You selected: " + scheduleDate.value);

        });

    }



    var managerDate = document.querySelector(".ts input[type='date']");

    if (managerDate) {

        managerDate.addEventListener("change", function () {

            alert("Selected date: " + managerDate.value);

        });

    }

});