async function fetchData() {
    try {
        const res = await fetch(
            "https://disease.sh/v3/covid-19/countries/UK"
        );

        if (!res.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await res.json();

        document.getElementById("date").textContent =
            new Date(data.updated).toLocaleDateString();

        document.getElementById("country").textContent = data.country;
        document.getElementById("cases").textContent =
            data.cases.toLocaleString();

        document.getElementById("deaths").textContent =
            data.deaths.toLocaleString();
    } catch (error) {
        console.error("Fetch error:", error);
        document.getElementById("date").textContent = "Error loading data";
    }
}

fetchData();
