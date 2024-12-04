// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Provided API key
// const API_KEY = process.env.MISTRAL_API_KEY; // Your API key
// const AI_API_URL = 'https://api.mistral.ai/v1/chat/completions'; // Replace with the correct URL

// app.post('/api/process_srs', async (req, res) => {
//     const { srs_text } = req.body;
//     if (!srs_text) {
//         return res.status(400).json({ error: "SRS text is required" });
//     }

//     try {
//         const coco_values = await callAIAgentAPI(srs_text);
//         console.log("COCOMO Model Values:", coco_values); // Log the response
//         res.json(coco_values);
//     } catch (error) {
//         console.error("Error processing SRS:", error);
//         res.status(500).json({ error: "Internal Server Error", details: error.message });
//     }
// });

// async function callAIAgentAPI(srs_text) {
//     try {
//         const response = await axios.post(
//             AI_API_URL,
//             {
//                 model: "mistral-large-latest",
//                 messages: [
//                     {
//                         role: 'user',
//                         content: `You are an expert in software cost estimation using the COCOMO model. Given the following SRS, extract the necessary information and provide the COCOMO model values in the following JSON format:\n${srs_text}\n\n{
//                             "software_size": {
//                                 "new": <integer>,
//                                 "reused": <integer>,
//                                 "modified": <integer>
//                             },
//                             "software_scale_drivers": {
//                                 "precedentedness": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                 "development_flexibility": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                 "architecture_risk_resolution": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                 "team_cohesion": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                 "process_maturity": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                             },
//                             "software_cost_drivers": {
//                                 "product": {
//                                     "required_software_reliability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "data_base_size": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "product_complexity": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "developed_for_reusability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "documentation_match_to_lifecycle_needs": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                                 },
//                                 "personnel": {
//                                     "analyst_capability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "programmer_capability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "personnel_continuity": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "application_experience": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "platform_experience": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "language_and_toolset_experience": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                                 },
//                                 "platform": {
//                                     "time_constraint": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "storage_constraint": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "platform_volatility": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                                 },
//                                 "project": {
//                                     "use_of_software_tools": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "multisite_development": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "required_development_schedule": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                                 }
//                             },
//                             "maintenance": "<On|Off>",
//                             "software_labor_rates": <integer>
//                         }`
//                     }
//                 ],
//                 response_format: { type: 'json_object' }
//             },
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${API_KEY}` // Include the API key in the headers
//                 }
//             }
//         );
//         return response.data;
//     } catch (error) {
//         console.error("Error from AI agent API:", error);
//         throw error;
//     }
// }

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Provided API key
// const API_KEY = process.env.MISTRAL_API_KEY; // Your API key
// const AI_API_URL = 'https://api.mistral.ai/v1/chat/completions'; // Replace with the correct URL

// app.post('/api/process_srs', async (req, res) => {
//     const { srs_text } = req.body;
//     if (!srs_text) {
//         return res.status(400).json({ error: "SRS text is required" });
//     }

//     try {
//         const coco_values = await callAIAgentAPI(srs_text);
//         console.log("COCOMO Model Values:", coco_values); // Log the response
//         res.json(coco_values);
//     } catch (error) {
//         console.error("Error processing SRS:", error);
//         res.status(500).json({ error: "Internal Server Error", details: error.message });
//     }
// });

// async function callAIAgentAPI(srs_text) {
//     try {
//         const response = await axios.post(
//             AI_API_URL,
//             {
//                 model: "mistral-large-latest",
//                 messages: [
//                     {
//                         role: 'user',
//                         content: `You are an expert in software cost estimation using the COCOMO model. Given the following SRS, extract the necessary information and provide the COCOMO model values in the following JSON format:\n${srs_text}\n\n{
//                             "software_size": {
//                                 "new": <integer>,
//                                 "reused": <integer>,
//                                 "modified": <integer>
//                             },
//                             "software_scale_drivers": {
//                                 "precedentedness": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                 "development_flexibility": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                 "architecture_risk_resolution": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                 "team_cohesion": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                 "process_maturity": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                             },
//                             "software_cost_drivers": {
//                                 "product": {
//                                     "required_software_reliability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "data_base_size": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "product_complexity": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "developed_for_reusability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "documentation_match_to_lifecycle_needs": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                                 },
//                                 "personnel": {
//                                     "analyst_capability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "programmer_capability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "personnel_continuity": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "application_experience": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "platform_experience": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "language_and_toolset_experience": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                                 },
//                                 "platform": {
//                                     "time_constraint": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "storage_constraint": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "platform_volatility": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                                 },
//                                 "project": {
//                                     "use_of_software_tools": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "multisite_development": "<Very Low|Low|Nominal|High|Very High|Extra High>",
//                                     "required_development_schedule": "<Very Low|Low|Nominal|High|Very High|Extra High>"
//                                 }
//                             },
//                             "maintenance": "<On|Off>",
//                             "software_labor_rates": <integer>
//                         }`
//                     }
//                 ],
//                 response_format: { type: 'json_object' }
//             },
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${API_KEY}` // Include the API key in the headers
//                 }
//             }
//         );
//         return response.data;
//     } catch (error) {
//         console.error("Error from AI agent API:", error);
//         throw error;
//     }
// }

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Provided API key
const API_KEY = process.env.MISTRAL_API_KEY; // Your API key
const AI_API_URL = 'https://api.mistral.ai/v1/chat/completions'; // Replace with the correct URL

app.post('/api/process_srs', async (req, res) => {
    const { srs_text } = req.body;
    if (!srs_text) {
        return res.status(400).json({ error: "SRS text is required" });
    }

    try {
        const coco_values = await callAIAgentAPI(srs_text);
        console.log("COCOMO Model Values:", coco_values); // Log the response
        res.json(coco_values);
    } catch (error) {
        console.error("Error processing SRS:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

async function callAIAgentAPI(srs_text) {
    try {
        const response = await axios.post(
            AI_API_URL,
            {
                model: "mistral-large-latest",
                messages: [
                    {
                        role: 'user',
                        content: `You are an expert in software cost estimation using the COCOMO model. Given the following SRS, extract the necessary information and provide the COCOMO model values in the following JSON format:\n${srs_text}\n\n{
                            "software_size": {
                                "new": <integer>,
                                "reused": <integer>,
                                "modified": <integer>
                            },
                            "software_scale_drivers": {
                                "precedentedness": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                "development_flexibility": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                "architecture_risk_resolution": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                "team_cohesion": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                "process_maturity": "<Very Low|Low|Nominal|High|Very High|Extra High>"
                            },
                            "software_cost_drivers": {
                                "product": {
                                    "required_software_reliability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "data_base_size": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "product_complexity": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "developed_for_reusability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "documentation_match_to_lifecycle_needs": "<Very Low|Low|Nominal|High|Very High|Extra High>"
                                },
                                "personnel": {
                                    "analyst_capability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "programmer_capability": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "personnel_continuity": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "application_experience": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "platform_experience": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "language_and_toolset_experience": "<Very Low|Low|Nominal|High|Very High|Extra High>"
                                },
                                "platform": {
                                    "time_constraint": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "storage_constraint": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "platform_volatility": "<Very Low|Low|Nominal|High|Very High|Extra High>"
                                },
                                "project": {
                                    "use_of_software_tools": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "multisite_development": "<Very Low|Low|Nominal|High|Very High|Extra High>",
                                    "required_development_schedule": "<Very Low|Low|Nominal|High|Very High|Extra High>"
                                }
                            },
                            "maintenance": "<On|Off>",
                            "software_labor_rates": <integer>
                        }`
                    }
                ],
                response_format: { type: 'json_object' }
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}` // Include the API key in the headers
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error from AI agent API:", error);
        throw error;
    }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});