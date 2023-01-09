// import Plausible from 'plausible-tracker'
if (typeof window !== 'undefined') {
    const startPlausible = async () => {
        let { default: Plausible } = await import('plausible-tracker');
        const {enableAutoOutboundTracking, enableAutoPageviews} = Plausible({
            domain: 'developer.vocdoni.io',
            // apiHost: 'https://api.vocdoni.io/',
            trackLocalhost: true
        })

        console.log("Starting plausible")

        enableAutoPageviews()
        enableAutoOutboundTracking()

        // const response = await fetch('https://notion.so');
        // const response = await fetch('https://api.notion.com/v1/pages');
        // const myJson = await response.json(); //extract JSON from the http response
    }

    startPlausible()
}


// export default startPlausible

// export default (
//     function () {
//
//         const { enableAutoOutboundTracking, enableAutoPageviews }  = Plausible({
//             domain: 'developer.vocdoni.io',
//             trackLocalhost: true
//         })
//
//         console.log("Starting plausible")
//
//         enableAutoPageviews()
//         enableAutoOutboundTracking()
//
//
// })();

// import Plausible from 'plausible-tracker'
//
// const { enableAutoOutboundTracking, enableAutoPageviews }  = Plausible({
//     domain: 'developer.vocdoni.io',
//     trackLocalhost: true
// })
//
// console.log("Starting plausible")
//
// enableAutoPageviews()
// enableAutoOutboundTracking()