document.addEventListener("DOMContentLoaded", () => {
    const getDataButton = document.getElementById("getDataButton");
    const resultDiv = document.getElementById("result");

    getDataButton.addEventListener("click", async() => {
        try {
            // Выполняем GET-запрос с помощью async/await
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error("Не удалось получить данные");
            }

            const data = await response.json();

            // Отображаем данные на странице
            resultDiv.innerHTML = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error(error);
            resultDiv.innerHTML = "Произошла ошибка при получении данных.";
        }
    });
});







//2

document.addEventListener("DOMContentLoaded", () => {
    const getDataButton = document.getElementById("getDataButton");
    const dataDisplay = document.getElementById("dataDisplay");

    getDataButton.addEventListener("click", async() => {
        try {
            // Выполняем GET-запрос с помощью async/await
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error("Не удалось получить данные");
            }

            const data = await response.json();

            //  с использованием innerHTML
            dataDisplay.innerHTML = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error(error);
            dataDisplay.innerHTML = "Произошла ошибка при получении данных.";
        }
    });
});



//3
document.addEventListener("DOMContentLoaded", () => {
    const ageInput = document.getElementById("ageInput");
    const compareButton = document.getElementById("compareButton");

    compareButton.addEventListener("click", () => {
        const yourAge = parseInt(ageInput.value);

        async function compareAge() {
            try {
                const myAge = 30; // Здесь укажите ваш возраст

                if (isNaN(yourAge)) {
                    throw new Error("Введите корректный возраст");
                }

                if (yourAge === myAge) {
                    return Promise.resolve("Успех");
                } else {
                    return Promise.reject("Ошибка");
                }
            } catch (error) {
                return Promise.reject(error.message);
            }
        }

        compareAge()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    });
});