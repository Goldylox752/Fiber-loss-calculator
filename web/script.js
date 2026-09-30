function calculateLoss() {
    const fibreLength = Number(
        document.getElementById("fibreLength").value
    );

    const attenuation = Number(
        document.getElementById("attenuation").value
    );

    const fibreLoss = fibreLength * attenuation;

    document.getElementById("result").textContent =
        "Total fibre loss: " + fibreLoss.toFixed(2) + " dB";
}