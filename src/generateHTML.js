function generateHTML(data) {
    var cards = generateCards(data)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <title>Team Builder</title>
</head>
<body>
    <header class="bg-danger text-center p-4">
        <h1>My Team</h1>
    </header>

    <main class="row m-0 justify-content-center">
        <!-- Team Cards go Here -->
        ${cards}
    </main>
</body>
</html>
    `;
}

function generateCards(data) {
    cardsHTML = '';
    for(i = 0; i < data.length; i++) {
        if (data[i].role === 'Manager') {
            cardsHTML += 
            `<div class="card col-3 px-0 m-3">
                <div class="bg-primary mx-0 px-3">
                    <h2 class="card-title">${data[i].name}</h2>
                    <h3 class="card-subtitle">${data[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${data[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${data[i].email}">${data[i].email}</a></li>
                        <li class="list-group-item">Office Number: ${data[i].office}</li>
                    </ul>
                </div>
            </div>`
        }
        if (data[i].role === 'Engineer') {
            cardsHTML += 
            `<div class="card col-3 px-0 m-3">
                <div class="bg-primary mx-0 px-3">
                    <h2 class="card-title">${data[i].name}</h2>
                    <h3 class="card-subtitle">${data[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${data[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${data[i].email}">${data[i].email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${data[i].github}">${data[i].github}</a></li>
                    </ul>
                </div>
            </div>`
        }
        if (data[i].role === 'Intern') {
            cardsHTML += 
            `<div class="card col-3 px-0 m-3">
                <div class="bg-primary mx-0 px-3">
                    <h2 class="card-title">${data[i].name}</h2>
                    <h3 class="card-subtitle">${data[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${data[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${data[i].email}">${data[i].email}</a></li>
                        <li class="list-group-item">School: ${data[i].school}</li>
                    </ul>
                </div>
            </div>`
        }
    }
    return cardsHTML;
}

module.exports = generateHTML;

