# Election Metadata

Election metadata provides the human-readable data associated with an election.

The creation of this data structure is critical. Multiple checks should be in place to ensure that the data is coherent (well formatted, all relevant locales present, etc).

The Election Metadata should not be confused with the Election Parameters, which define how the election should behave.

## JSON Schema

The metadata of a election is represented as follows:

```json
{
    "version": "1.1", // Protocol version
    "title": {
        "en": "Universal Basic Income",
        "ca": "Renda Bàsica Universal"
    },
    "description": {
        "en": "The description goes here",
        "ca": "La descripció va aquí"
    },
    "media": {
        "header": "<content uri>",
        "streamUri": "https://.../"
    },
    "questions": [
        {
            "title": {
                "en": "Should universal basic income become a human right?",
                "ca": "Estàs d'acord amb que la renda bàsica universal sigui un dret humà?"
            },
            "description": {
                "en": "The description goes here",
                "ca": "La descripció va aquí"
            },
            "choices": [
                {
                    "title": {
                        "en": "Yes",
                        "ca": "Sí"
                    },
                    "value": 0
                },
                {
                    "title": {
                        "en": "No",
                        "ca": "No"
                    },
                    "value": 1
                }
            ]
        }
    ],
    "results": {
        "aggregation": "index-weighted", // "index-weighted" | "discrete-counting",
        "display": "rating" // "rating" | "simple-question" | "multiple-choice" | "linear-weighted" | "quadratic-voting" | "multiple-question" | "raw"
    }
}
```

The `results` fields are informational only. Regardless of the chosen `aggregation` or `display`, the scrutiny is the same for all cases. However, these fields help the UI components to interpret and display the results according to the [ballot protocol](/protocol/ballot-protocol)

