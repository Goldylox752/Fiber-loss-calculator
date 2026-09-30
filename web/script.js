function calculateLoss() {
    const fibreLength = Number(
        document.getElementById("fibreLength").value
    );

    const attenuation = Number(
        document.getElementById("attenuation").value
    );

    const spliceCount = Number(
        document.getElementById("spliceCount").value
    );

    const spliceLoss = Number(
        document.getElementById("spliceLoss").value
    );

    const connectorCount = Number(
        document.getElementById("connectorCount").value
    );

    const connectorLoss = Number(
        document.getElementById("connectorLoss").value
    );

    const fibreLoss = fibreLength * attenuation;
    const totalSpliceLoss = spliceCount * spliceLoss;
    const totalConnectorLoss = connectorCount * connectorLoss;

    const totalLoss =
        fibreLoss +
        totalSpliceLoss +
        totalConnectorLoss;

    document.getElementById("result").textContent =
        "Total fibre loss: " + totalLoss.toFixed(2) + " dB";
}