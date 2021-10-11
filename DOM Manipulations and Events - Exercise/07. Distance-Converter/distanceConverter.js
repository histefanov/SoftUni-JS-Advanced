function attachEventsListeners() {
    const ratios = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    document.getElementById('convert').addEventListener('click', (ev) => {
        const input = Number(document.getElementById('inputDistance').value);
        const inputUnits = document.getElementById('inputUnits').value;
        const outputUnits = document.getElementById('outputUnits').value;
        
        const distInMeters = input * ratios[inputUnits];
        
        const result = distInMeters / ratios[outputUnits];

        document.getElementById('outputDistance').value = result;
    })
}